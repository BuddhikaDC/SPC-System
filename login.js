document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  // Simulated login (replace with real API call)
  if (email && role) {
    window.location.href = `${role}-dashboard.html`; // Redirect to role-based dashboard
  } else {
    document.getElementById("loginMsg").textContent = "Invalid login.";
  }
});
