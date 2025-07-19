document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate update
  document.getElementById("profileMsg").textContent = "Profile updated successfully!";
});
