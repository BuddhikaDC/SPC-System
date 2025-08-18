document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const msgEl = document.getElementById("loginMsg");
  msgEl.textContent = "";

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role })
    });
    const data = await res.json();
    if (!res.ok) {
      msgEl.textContent = data.error || "Invalid login.";
      return;
    }

    const roleToPage = {
      supplier: "supplier dashboard.html",
      admin: "admin dashboard.html",
      plant: "plant dashboard.html",
      pharmacy: "pharmacy dashboard.html"
    };
    const target = roleToPage[data.user.role] || "login.html";
    window.location.href = target;
  } catch (err) {
    msgEl.textContent = "Network error";
  }
});
