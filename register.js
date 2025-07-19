document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const companyName = document.getElementById("companyName").value;
  const licenseNo = document.getElementById("licenseNo").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;

  // Simulated registration process (replace with API call)
  if (companyName && licenseNo && email && password && address) {
    document.getElementById("registerMsg").textContent = "Registered successfully!";
    document.getElementById("registerForm").reset();
  } else {
    document.getElementById("registerMsg").textContent = "Please fill all fields.";
  }
});
