document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  clearErrors();

  let valid = true;

  if (name.length < 3) {
    showError("nameError", "Name must be at least 3 characters.");
    valid = false;
  }

  if (! /^[^@]+@[^@]+\.[a-zA-Z]{2,3}$/.test(email)) {
    showError("emailError", "Invalid email format.");
    valid = false;
  }

if (
  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password)) {
  showError("passwordError","Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
  );
  valid = false;
}

  if (password !== confirmPassword) {
    showError("confirmPasswordError", "Passwords do not match.");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
     document.getElementById("registrationForm").reset();
  }
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  ["nameError", "emailError", "passwordError", "confirmPasswordError"].forEach(id => {
    document.getElementById(id).textContent = "";
  });
}