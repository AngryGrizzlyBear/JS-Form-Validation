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