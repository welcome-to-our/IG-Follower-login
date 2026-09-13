const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!username.value.trim() || !password.value) {
    message.textContent = "Please enter a username and password.";
    return;
  }

  // Safe demo behavior:
  // Nothing is sent to a server, Discord, or any third party.
  message.textContent = "Demo login submitted — no credentials were transmitted.";

  // Clear the password immediately after the demo submission.
  password.value = "";
});

document.getElementById("helpLink").addEventListener("click", (event) => {
  event.preventDefault();
  message.textContent = "Demo only: password recovery is not connected.";
});
