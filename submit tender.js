document.getElementById("tenderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("tenderTitle").value;
  const drug = document.getElementById("drugType").value;
  const qty = document.getElementById("quantity").value;
  const amount = document.getElementById("bidAmount").value;
  const file = document.getElementById("proposalFile").files[0];

  if (title && drug && qty && amount && file) {
    // Simulate submission
    document.getElementById("tenderMsg").textContent = "Tender submitted successfully!";
    document.getElementById("tenderForm").reset();
  } else {
    document.getElementById("tenderMsg").textContent = "Please fill all fields and upload the file.";
  }
});
