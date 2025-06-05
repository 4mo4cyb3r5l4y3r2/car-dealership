import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase-config.js";

// Login button click handler
document.getElementById("login-btn").addEventListener("click", () => {
  new bootstrap.Modal(document.getElementById('loginModal')).show();
});

// Form submission handler
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "/test/WADFILE/products.html"; // Redirect after login
  } catch (error) {
    document.getElementById("loginMessage").textContent = "Error: " + error.message;
  }
});