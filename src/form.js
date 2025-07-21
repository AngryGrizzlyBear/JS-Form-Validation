import {
    isValidEmail,
    isValidCountry,
    isValidPostalCode,
    isStrongPassword,
    doPasswordsMatch,
} from './validation';

document.addEventListener('DOMContentLoaded', () => {

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

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailValidation = isValidEmail(email.value);
        const countryValidation = isValidCountry(country.value);
        const postalValidation = isValidPostalCode(postal.value);
        const passwordValidation = isStrongPassword(password.value);
        const confirmPasswordValidation = doPasswordsMatch(
            password.value,
            confirmPassword.value,
        );

        let allValid = true;


        if (!form || !email || !country || !postal || !password || !confirmPassword || !successMessage) {
            console.error("One or more form elements are missing in the DOM.");
        }
  
        if (!emailValidation.valid) {
            showError(email, emailError, emailValidation.message);
            allValid = false;
        }

        if (!countryValidation.valid) {
            showError(country, countryError, countryValidation.message);
            allValid = false;
        }

        if (!postalValidation.valid) {
            showError(postal, postalError, postalValidation.message);
            allValid = false;
        }
        if (!passwordValidation.valid) {
            showError(password, passwordError, passwordValidation.message);
            allValid = false;
        }

        if (!confirmPasswordValidation.valid) {
            showError(confirmPassword, confirmPasswordError, confirmPasswordValidation.message);
            allValid = false;
        }

        if (allValid) {
            successMessage.textContent = 'Form submitted successfully!';
            successMessage.style.display = 'block';
            form.reset();

            [email, country, postal, password, confirmPassword].forEach((input) => {
                if (input) input.classList.remove('invalid'); // ✅ null-safe
            });

            [emailError, countryError, postalError, passwordError, confirmPasswordError].forEach(
                (errorSpan) => {
                    if (errorSpan) errorSpan.textContent = ''; // ✅ null-safe
                }
            );

        } else {
            successMessage.textContent = '';
            successMessage.style.display = 'none';

        }

    });
});
