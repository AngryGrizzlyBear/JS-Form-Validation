import {
  isValidEmail,
  isValidCountry,
  isValidPostalCode,
  isStrongPassword,
  doPasswordsMatch,
} from './validation';

const form = document.getElementById('signup-form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postal = document.getElementById('postal');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const emailError = document.getElementById('email-error');
const countryError = document.getElementById('country-error');
const postalError = document.getElementById('postal-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const successMessage = document.getElementById('success-message');

function showError(input, errorSpan, message) {
  errorSpan.textContent = message;
  input.classList.add('invalid');
}

function clearError(input, errorSpan) {
  errorSpan.textContent = '';
  input.classList.remove('invalid');
}

email.addEventListener('blur', () => {
  const { valid, message } = isValidEmail(email.value);
  if (!valid) {
    showError(email, emailError, message);
  } else {
    clearError(email, emailError);
  }
});

country.addEventListener('blur', () => {
  const { valid, message } = isValidCountry(country.value);
  if (!valid) {
    showError(country, countryError, message);
  } else {
    clearError(country, countryError);
  }
});

postal.addEventListener('blur', () => {
  const { valid, message } = isValidPostalCode(postal.value);
  if (!valid) {
    showError(postal, postalError, message);
  } else {
    clearError(postal, postalError);
  }
});

password.addEventListener('blur', () => {
  const { valid, message } = isStrongPassword(password.value);
  if (!valid) {
    showError(password, passwordError, message);
  } else {
    clearError(password, passwordError);
  }
});

confirmPassword.addEventListener('blur', () => {
  const { valid, message } = doPasswordsMatch(
    password.value,
    confirmPassword.value,
  );
  if (!valid) {
    showError(confirmPassword, confirmPasswordError, message);
  } else {
    clearError(confirmPassword, confirmPasswordError);
  }
});
