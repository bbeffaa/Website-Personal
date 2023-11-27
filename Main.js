function redirectToLoginPage() {
  // Handle the login action, for example, redirect to the login page
  // You can replace the window.location.href with the actual login page URL
  window.location.href = "login.html";
}
document.getElementById("loginButton").addEventListener("click", function () {
  document.getElementById("loginForm").style.display = "block";
});

document.getElementById("submitLogin").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Lakukan verifikasi login di sini, contoh sederhana:
  if (username === "user" && password === "pass") {
    alert("Login berhasil!");
  } else {
    alert("Login gagal. Coba lagi.");
  }
});
