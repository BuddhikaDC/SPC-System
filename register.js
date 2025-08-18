document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const companyName = document.getElementById("companyName").value;
  const licenseNo = document.getElementById("licenseNo").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;

  const msgEl = document.getElementById("registerMsg");
  msgEl.textContent = "";

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companyName, licenseNo, email, password, address })
    });
    const data = await res.json();
    if (!res.ok) {
      msgEl.textContent = data.error || "Registration failed";
      return;
    }
    msgEl.textContent = "Registered successfully!";
    document.getElementById("registerForm").reset();
  } catch (err) {
    msgEl.textContent = "Network error";
  }
});
