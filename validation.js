/**
 * ============================================================
 * VALIDATION.JS — HealthCore Patient Inquiry Form
 * ============================================================
 * Real-time validation on input/blur + full validation on submit.
 * Uses translations.js t() helper for bilingual error messages.
 * ============================================================
 */

(function () {
  "use strict";

  // ── Clinic closing-hour map (24h format) ──
  var clinicHours = {
    "HealthCore Austin Central": { closes: 20, satOpen: true },
    "HealthCore Austin North":   { closes: 19, satOpen: false },
    "HealthCore San Antonio":    { closes: 18, satOpen: true },
    "HealthCore Miami":          { closes: 20, satOpen: true },
    "HealthCore Orlando":        { closes: 18, satOpen: false },
    "HealthCore Atlanta":        { closes: 19, satOpen: false },
  };
  var phoneIti = null;
  var phoneInitVersion = 0;

  // ── Helpers ──

  function getField(name) {
    return document.getElementById(name);
  }

  function getRadioValue(name) {
    var el = document.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : "";
  }

  function showError(fieldId, message) {
    var errorEl = document.getElementById(fieldId + "-error");
    var input = document.getElementById(fieldId);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove("hidden");
    }
    if (input) {
      input.classList.add("border-red-500", "ring-1", "ring-red-500");
      input.classList.remove("border-gray-300");
      input.setAttribute("aria-invalid", "true");
    }
  }

  function clearError(fieldId) {
    var errorEl = document.getElementById(fieldId + "-error");
    var input = document.getElementById(fieldId);
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.add("hidden");
    }
    if (input) {
      input.classList.remove("border-red-500", "ring-1", "ring-red-500");
      if (fieldId === "phone") {
        input.setAttribute("aria-invalid", "false");
      } else {
        input.classList.add("border-gray-300");
        input.setAttribute("aria-invalid", "false");
      }
    }
  }

  function showRadioError(name, message) {
    var errorEl = document.getElementById(name + "-error");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove("hidden");
    }
  }

  function clearRadioError(name) {
    var errorEl = document.getElementById(name + "-error");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.add("hidden");
    }
  }

  function showWarning(fieldId, message) {
    var warnEl = document.getElementById(fieldId + "-warning");
    if (warnEl) {
      warnEl.textContent = message;
      warnEl.classList.remove("hidden");
    }
  }

  function clearWarning(fieldId) {
    var warnEl = document.getElementById(fieldId + "-warning");
    if (warnEl) {
      warnEl.textContent = "";
      warnEl.classList.add("hidden");
    }
  }

  function isErrorVisible(fieldId) {
    var errorEl = document.getElementById(fieldId + "-error");
    return !!(errorEl && !errorEl.classList.contains("hidden"));
  }

  function updatePhoneBorderState(showInvalidState) {
    var phoneInput = getField("phone");
    if (!phoneInput) return;

    phoneInput.classList.remove(
      "border-emerald-500",
      "focus:border-emerald-500",
      "border-red-500",
      "focus:border-red-500"
    );

    var raw = (phoneInput.value || "").trim();
    if (!raw) {
      phoneInput.classList.add("border-gray-300");
      phoneInput.setAttribute("aria-invalid", "false");
      return;
    }

    if (validatePhone() === "") {
      phoneInput.classList.remove("border-gray-300");
      phoneInput.classList.add("border-emerald-500", "focus:border-emerald-500");
      phoneInput.setAttribute("aria-invalid", "false");
      return;
    }

    if (showInvalidState) {
      phoneInput.classList.remove("border-gray-300");
      phoneInput.classList.add("border-red-500", "focus:border-red-500");
      phoneInput.setAttribute("aria-invalid", "true");
    }
  }

  function getPhoneI18n(lang) {
    if (lang === "es") {
      return {
        searchPlaceholder: "Buscar país",
        zeroSearchResults: "No se encontraron resultados",
        oneSearchResult: "1 resultado",
        multipleSearchResults: "${count} resultados",
        noCountrySelected: "Ningún país seleccionado"
      };
    }

    return {
      searchPlaceholder: "Search country",
      zeroSearchResults: "No results found",
      oneSearchResult: "1 result",
      multipleSearchResults: "${count} results",
      noCountrySelected: "No country selected"
    };
  }

  function loadPhoneI18n(locale) {
    var code = locale === "es" ? "es" : "en";
    var url = "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/i18n/" + code + "/index.js";

    return import(url)
      .then(function (mod) {
        return mod && mod.default ? mod.default : getPhoneI18n(locale);
      })
      .catch(function () {
        return getPhoneI18n(locale);
      });
  }

  function initPhoneInput(lang) {
    var phoneInput = getField("phone");
    if (!phoneInput || typeof window.intlTelInput !== "function") return;

    var initVersion = ++phoneInitVersion;

    var activeLang = (lang || document.documentElement.lang || "en").toLowerCase();
    var locale = activeLang.startsWith("es") ? "es" : "en";

    var currentValue = (phoneInput.value || "").trim();
    var selectedIso2 = "";
    if (phoneIti && phoneIti.getSelectedCountryData) {
      var currentCountry = phoneIti.getSelectedCountryData();
      selectedIso2 = currentCountry && currentCountry.iso2 ? currentCountry.iso2 : "";
      phoneIti.destroy();
      phoneIti = null;
    }

    loadPhoneI18n(locale).then(function (i18nData) {
      if (initVersion !== phoneInitVersion) return;

      phoneIti = window.intlTelInput(phoneInput, {
        separateDialCode: true,
        initialCountry: selectedIso2 || "auto",
        countryNameLocale: locale,
        i18n: i18nData,
        autoPlaceholder: "aggressive",
        geoIpLookup: function (success) {
          fetch("https://ipapi.co/json")
            .then(function (res) {
              return res.ok ? res.json() : Promise.reject(new Error("Geo lookup failed"));
            })
            .then(function (data) {
              var code = data && data.country_code ? data.country_code.toLowerCase() : "us";
              success(code);
            })
            .catch(function () {
              success("us");
            });
        },
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js"
      });

      if (currentValue) {
        phoneInput.value = currentValue;
      }

      updatePhoneBorderState(false);
    });

    if (!phoneInput.dataset.itiBound) {
      phoneInput.addEventListener("input", function () {
        updatePhoneBorderState(true);
      });

      phoneInput.addEventListener("countrychange", function () {
        updatePhoneBorderState(true);
        if (!isErrorVisible("phone")) return;
        var msg = validatePhone();
        if (msg) showError("phone", msg);
        else clearError("phone");
      });

      phoneInput.dataset.itiBound = "true";
    }

  }

  /** Calculate age from a Date string */
  function getAge(dateStr) {
    var birth = new Date(dateStr);
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  /** Get next business day date from today */
  function getNextBusinessDay() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    // Move to tomorrow first
    d.setDate(d.getDate() + 1);
    // Skip weekends
    while (d.getDay() === 0 || d.getDay() === 6) {
      d.setDate(d.getDate() + 1);
    }
    return d;
  }

  function toDateStr(d) {
    var y = d.getFullYear();
    var m = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + d.getDate()).slice(-2);
    return y + "-" + m + "-" + day;
  }

  // ── Individual validators — each returns error message or "" ──

  function validateFirstName() {
    var val = (getField("first_name").value || "").trim();
    var re = /^[a-zA-ZáéíóúñüÁÉÍÓÚÑÜàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ\s'-]{2,50}$/;
    if (!val || !re.test(val)) {
      return t("err_first_name_val");
    }
    return "";
  }

  function validateLastName() {
    var val = (getField("last_name").value || "").trim();
    var re = /^[a-zA-ZáéíóúñüÁÉÍÓÚÑÜàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜçÇ\s'-]{2,50}$/;
    if (!val || !re.test(val)) {
      return t("err_last_name_val");
    }
    return "";
  }

  function validateDOB() {
    var val = getField("date_of_birth").value;
    if (!val) return t("err_dob_val");
    var birth = new Date(val);
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    if (birth > today) return t("err_dob_val");
    var age = getAge(val);
    if (age < 0 || age > 120) return t("err_dob_val");
    return "";
  }

  function validateEmail() {
    var val = (getField("email").value || "").trim();
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var typoDomains = {
      "gmai.com": true,
      "gmial.com": true,
      "gmal.com": true,
      "hotnail.com": true,
      "hotmai.com": true,
      "outllok.com": true,
      "outlok.com": true,
      "yaho.com": true
    };
    if (!val || !re.test(val)) {
      return t("err_email_val");
    }

    var domain = val.split("@")[1].toLowerCase();
    if (typoDomains[domain]) {
      return t("err_email_val");
    }

    return "";
  }

  function validatePhone() {
    var val = (getField("phone").value || "").trim();
    if (phoneIti) {
      if (!val || !phoneIti.isValidNumber()) {
        return t("err_phone_val");
      }
      return "";
    }

    var re = /^\+\d{1,3}[\s\-]?\d[\d\s\-]{4,}$/;
    if (!val || !re.test(val)) {
      return t("err_phone_val");
    }
    return "";
  }

  function validatePreferredLanguage() {
    var val = getField("preferred_language").value;
    if (!val) return t("err_preferred_language_val");
    return "";
  }

  function validatePreferredClinic() {
    var val = getField("preferred_clinic").value;
    if (!val) return t("err_preferred_clinic_val");
    return "";
  }

  function validatePreferredDate() {
    var val = getField("preferred_date").value;
    if (!val) return t("err_preferred_date_val");
    var chosen = new Date(val);
    chosen.setHours(0, 0, 0, 0);
    var minDate = getNextBusinessDay();
    var maxDate = new Date();
    maxDate.setHours(0, 0, 0, 0);
    maxDate.setDate(maxDate.getDate() + 60);
    if (chosen < minDate || chosen > maxDate) {
      return t("err_preferred_date_val");
    }
    return "";
  }

  function validatePreferredTime() {
    var val = getField("preferred_time").value;
    if (!val) return t("err_preferred_time_val");
    return "";
  }

  function validateServiceType() {
    var val = getField("service_type").value;
    if (!val) return t("err_service_type_val");
    return "";
  }

  /** Cross-validation: Paediatric + DOB */
  function validatePaediatricAge() {
    var service = getField("service_type").value;
    var dob = getField("date_of_birth").value;
    if (service === "Paediatric Care" && dob) {
      var age = getAge(dob);
      if (age >= 18) {
        return t("err_service_paediatric");
      }
    }
    return "";
  }

  /** Cross-validation: Evening slot + clinic hours */
  function checkEveningClinicWarning() {
    var time = getField("preferred_time").value;
    var clinic = getField("preferred_clinic").value;
    clearWarning("preferred_time");
    if (time === "Evening (5pm-8pm)" && clinic && clinicHours[clinic]) {
      var closes = clinicHours[clinic].closes;
      if (closes <= 18) {
        showWarning("preferred_time", t("warn_evening_clinic"));
      }
    }
  }

  function validateNewPatient() {
    var val = getRadioValue("new_patient");
    if (!val) return t("err_new_patient_val");
    return "";
  }

  function validateHasInsurance() {
    var val = getRadioValue("has_insurance");
    if (!val) return t("err_has_insurance_val");
    return "";
  }

  function validateInsuranceProvider() {
    var insured = getRadioValue("has_insurance");
    if (insured !== "Yes") return "";
    var val = (getField("insurance_provider").value || "").trim();
    if (!val) return t("err_insurance_provider_val");
    return "";
  }

  function validateInsuranceMemberId() {
    var insured = getRadioValue("has_insurance");
    if (insured !== "Yes") return "";
    var val = (getField("insurance_member_id").value || "").trim();
    var re = /^[a-zA-Z0-9]{6,20}$/;
    if (!val || !re.test(val)) {
      return t("err_insurance_member_id_val");
    }
    return "";
  }

  function validatePatientId() {
    var isNew = getRadioValue("new_patient");
    if (isNew !== "No") return "";
    var val = (getField("patient_id").value || "").trim();
    if (!val) return ""; // optional
    var re = /^HC-[a-zA-Z0-9]{6}$/;
    if (!re.test(val)) {
      return t("err_patient_id_val");
    }
    return "";
  }

  function validateHealthConcern() {
    var val = (getField("health_concern").value || "");
    var len = val.length;
    if (len < 20) {
      var remaining = 20 - len;
      return t("err_health_concern_val").replace("X", remaining);
    }
    if (len > 500) return t("err_health_concern_val");
    return "";
  }

  function validateConsent() {
    var el = getField("contact_consent");
    if (!el.checked) return t("err_contact_consent_val");
    return "";
  }

  // ── Wire up real-time validation ──

  function bindField(id, validatorFn) {
    var el = document.getElementById(id);
    if (!el) return;
    var validate = function () {
      var msg = validatorFn();
      if (msg) {
        showError(id, msg);
      } else {
        clearError(id);
      }
    };

    // Validate on blur/change, but while typing only clear existing errors.
    el.addEventListener("blur", validate);
    el.addEventListener("change", validate);
    el.addEventListener("input", function () {
      var msg = validatorFn();
      if (!msg) {
        clearError(id);
        return;
      }
      if (isErrorVisible(id)) {
        showError(id, msg);
      }
    });
  }

  function bindRadio(name, validatorFn) {
    var radios = document.querySelectorAll('input[name="' + name + '"]');
    radios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        var msg = validatorFn();
        if (msg) {
          showRadioError(name, msg);
        } else {
          clearRadioError(name);
        }
      });
    });
  }

  function bindCheckbox(id, validatorFn) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("change", function () {
      var msg = validatorFn();
      if (msg) {
        showError(id, msg);
      } else {
        clearError(id);
      }
    });
    // On focus/blur cycle, only show message if checkbox still invalid.
    el.addEventListener("blur", function () {
      var msg = validatorFn();
      if (msg) {
        showError(id, msg);
      } else {
        clearError(id);
      }
    });
  }

  // ── Initialise on DOM ready ──

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("patient-inquiry-form");
    if (!form) return;

    initPhoneInput(document.documentElement.lang);

    document.addEventListener("healthcore:languagechange", function (ev) {
      var lang = ev && ev.detail && ev.detail.lang ? ev.detail.lang : document.documentElement.lang;
      initPhoneInput(lang);
    });

    // Bind simple fields
    bindField("first_name", validateFirstName);
    bindField("last_name", validateLastName);
    bindField("date_of_birth", function () {
      var msg = validateDOB();
      // Also re-check paediatric cross-validation
      var paedMsg = validatePaediatricAge();
      if (paedMsg) showError("service_type", paedMsg);
      else if (!validateServiceType()) clearError("service_type");
      return msg;
    });
    bindField("email", validateEmail);
    bindField("phone", validatePhone);
    bindField("preferred_language", validatePreferredLanguage);
    bindField("preferred_clinic", function () {
      checkEveningClinicWarning();
      return validatePreferredClinic();
    });
    bindField("preferred_date", validatePreferredDate);
    bindField("preferred_time", function () {
      checkEveningClinicWarning();
      return validatePreferredTime();
    });
    bindField("service_type", function () {
      var msg = validateServiceType();
      if (msg) return msg;
      return validatePaediatricAge();
    });

    // Radio groups
    bindRadio("new_patient", validateNewPatient);
    bindRadio("has_insurance", validateHasInsurance);

    // Checkbox
    bindCheckbox("contact_consent", validateConsent);

    // Insurance conditional fields
    bindField("insurance_provider", validateInsuranceProvider);
    bindField("insurance_member_id", validateInsuranceMemberId);

    // Patient ID conditional field
    bindField("patient_id", validatePatientId);

    // ── Conditional visibility: new_patient → patient_id ──
    var newPatientRadios = document.querySelectorAll('input[name="new_patient"]');
    newPatientRadios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        var group = document.getElementById("patient_id-group");
        if (getRadioValue("new_patient") === "No") {
          group.classList.remove("hidden");
        } else {
          group.classList.add("hidden");
          getField("patient_id").value = "";
          clearError("patient_id");
        }
      });
    });

    // ── Conditional visibility: has_insurance → insurance fields ──
    var insuranceRadios = document.querySelectorAll('input[name="has_insurance"]');
    insuranceRadios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        var group = document.getElementById("insurance-group");
        if (getRadioValue("has_insurance") === "Yes") {
          group.classList.remove("hidden");
        } else {
          group.classList.add("hidden");
          getField("insurance_provider").value = "";
          getField("insurance_member_id").value = "";
          clearError("insurance_provider");
          clearError("insurance_member_id");
        }
      });
    });

    // ── Live character counter for health_concern ──
    var healthConcern = getField("health_concern");
    var charCount = document.getElementById("char-count");
    if (healthConcern && charCount) {
      healthConcern.addEventListener("input", function () {
        charCount.textContent = healthConcern.value.length;
      });
    }

    // ── Form reset handler ──
    form.addEventListener("reset", function () {
      // Short delay to let the browser reset values first
      setTimeout(function () {
        // Clear all errors
        var errors = form.querySelectorAll("[id$='-error']");
        errors.forEach(function (el) {
          el.textContent = "";
          el.classList.add("hidden");
        });
        // Reset input styles
        var inputs = form.querySelectorAll("input, select, textarea");
        inputs.forEach(function (el) {
          el.classList.remove("border-red-500", "ring-1", "ring-red-500");
          el.classList.add("border-gray-300");
        });
        // Hide conditional sections
        document.getElementById("patient_id-group").classList.add("hidden");
        document.getElementById("insurance-group").classList.add("hidden");
        // Reset counter
        if (charCount) charCount.textContent = "0";
        // Clear warnings
        clearWarning("preferred_time");
        updatePhoneBorderState(false);
      }, 10);
    });

    // ── Form submit handler ──
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (phoneIti && getField("phone") && (getField("phone").value || "").trim() !== "" && phoneIti.isValidNumber()) {
        getField("phone").value = phoneIti.getNumber();
      }

      var isValid = true;

      // Run all validators
      var validators = [
        { id: "first_name", fn: validateFirstName },
        { id: "last_name", fn: validateLastName },
        { id: "date_of_birth", fn: validateDOB },
        { id: "email", fn: validateEmail },
        { id: "phone", fn: validatePhone },
        { id: "preferred_language", fn: validatePreferredLanguage },
        { id: "preferred_clinic", fn: validatePreferredClinic },
        { id: "preferred_date", fn: validatePreferredDate },
        { id: "preferred_time", fn: validatePreferredTime },
        { id: "service_type", fn: function () {
            var msg = validateServiceType();
            if (msg) return msg;
            return validatePaediatricAge();
          }
        },
      ];

      validators.forEach(function (v) {
        var msg = v.fn();
        if (msg) {
          showError(v.id, msg);
          isValid = false;
        } else {
          clearError(v.id);
        }
      });

      // Radio groups
      var newPatientMsg = validateNewPatient();
      if (newPatientMsg) { showRadioError("new_patient", newPatientMsg); isValid = false; }
      else { clearRadioError("new_patient"); }

      var hasInsuranceMsg = validateHasInsurance();
      if (hasInsuranceMsg) { showRadioError("has_insurance", hasInsuranceMsg); isValid = false; }
      else { clearRadioError("has_insurance"); }

      // Conditional insurance fields
      if (getRadioValue("has_insurance") === "Yes") {
        var provMsg = validateInsuranceProvider();
        if (provMsg) { showError("insurance_provider", provMsg); isValid = false; }
        else { clearError("insurance_provider"); }

        var memMsg = validateInsuranceMemberId();
        if (memMsg) { showError("insurance_member_id", memMsg); isValid = false; }
        else { clearError("insurance_member_id"); }
      }

      // Conditional patient ID
      var pidMsg = validatePatientId();
      if (pidMsg) { showError("patient_id", pidMsg); isValid = false; }
      else { clearError("patient_id"); }

      // Health concern
      var hcMsg = validateHealthConcern();
      if (hcMsg) { showError("health_concern", hcMsg); isValid = false; }
      else { clearError("health_concern"); }

      // Consent
      var consentMsg = validateConsent();
      if (consentMsg) { showError("contact_consent", consentMsg); isValid = false; }
      else { clearError("contact_consent"); }

      if (!isValid) {
        // Scroll to first error
        var firstError = form.querySelector(".text-red-600:not(.hidden)");
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      // ── Success: hide form, show message ──
      document.getElementById("form-section").classList.add("hidden");
      document.getElementById("success-section").classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ── Mobile menu toggle (same as index.html) ──
    var menuBtn = document.getElementById("mobile-menu-btn");
    var mobileMenu = document.getElementById("mobile-menu");
    var iconOpen = document.getElementById("menu-icon-open");
    var iconClose = document.getElementById("menu-icon-close");
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", function () {
        var expanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", !expanded);
        mobileMenu.classList.toggle("hidden");
        iconOpen.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");
      });
    }
  });
})();
