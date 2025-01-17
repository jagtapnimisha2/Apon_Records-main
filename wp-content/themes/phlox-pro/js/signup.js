const firstName = document.getElementsByClassName('input--style-1');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('nextBtn');
// login-btn
// mobileInput
function checkValidity() {
    const mobileValue = firstName.value;
    const passwordValue = passwordInput.value;

    // Check if mobile number is valid (either 10 digits or non-numeric)
    const isMobileValid = /^\d{10}$/.test(mobileValue) || /^\D+$/.test(mobileValue);

    // Define password validation criteria
    const hasUpperCase = /[A-Z]/.test(passwordValue);
    const hasLowerCase = /[a-z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
    const isLengthValid = passwordValue.length >= 8 && passwordValue.length <= 20;

    // Check if all criteria are met for both mobile number and password
    if (isMobileValid && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLengthValid) {
        nextBtn.disabled = false;
        document.getElementById('passwordValidationText').style.display = 'none';
    } else {
        nextBtn.disabled = true;
        document.getElementById('passwordValidationText').style.display = 'block';
    }
}

// Attach event listeners to both inputs
firstName.addEventListener('input', checkValidity);
passwordInput.addEventListener('input', checkValidity);