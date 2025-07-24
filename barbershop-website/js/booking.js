document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const confirmation = document.getElementById("confirmationMessage");

  if (!name || !email || !service || !date || !time) {
    confirmation.textContent = "Bitte füllen Sie alle Felder korrekt aus.";
    confirmation.style.color = "red";
    return;
  }

  // In real use, here you would send the data to a server.

  confirmation.textContent = `Vielen Dank, ${name}! Ihre Buchung für ${service} am ${date} um ${time} wurde gespeichert.`;
  confirmation.style.color = "green";

  // Optional: clear form
  this.reset();
});
