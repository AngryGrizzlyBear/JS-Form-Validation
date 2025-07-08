export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailRegex.test(email.trim());
  return {
    valid,
    message: valid ? '' : 'Please enter a valid email address.',
  };
}

export function isValidCountry(country) {
  const valid = country.trim().length > 0;
  return {
    valid,
    message: valid ? '' : 'Country is required.',
  };
}

export function isStrongPassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  const valid = passwordRegex.test(password);
  return {
    valid,
    message: valid
      ? ''
      : 'Password must be at least 8 characters, include a number and special character.',
  };
}

export function isValidPostalCode(postal) {
  const postalRegex = /^[A-Za-z0-9]{3,10}$/; // Adjust as needed
  const valid = postalRegex.test(postal.trim());
  return {
    valid,
    message: valid ? '' : 'Please enter a valid postal code.',
  };
}

export function doPasswordsMatch(password, confirmPassword) {
  const valid = password === confirmPassword;
  return {
    valid,
    message: valid ? '' : 'Passwords do not match.',
  };
}
