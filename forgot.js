function checkEmailFormat(email) {
  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  // aturan ala PDF:
  if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
    return false;
  }
  return true;
}

function handleSubmit(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let message = document.getElementById("message");

  // VALIDASI
  if (!checkEmailFormat(email)) {
    message.innerHTML = "Invalid email format!";
    message.style.color = "red";
    return false;
  }

  // EMAIL VALID → tampilkan success message
  message.innerHTML = "Reset link sent to " + email;
  message.style.color = "lightgreen";

  // redirect
  setTimeout(() => {
    window.location.href = "resetpass.html";
  }, 2000);

  return true;
}

$(document).ready(function () {

  // Focus
  $("#email").on("focus", function () {
    $(this).css("background-color", "rgba(255,175,97,0.15)");
  });

  // Change → validasi live
  $("#email").on("change", function () {
    let email = $(this).val();
    let message = $("#message");

    if (!checkEmailFormat(email)) {
      message.text("Invalid email format!").css("color", "red");
    } else {
      message.text("");
    }
  });

  // Keypress
  $("#email").on("keypress", function (e) {
    console.log("Key pressed:", e.key);
  });

  // Hover button
  $("button").on("mousemove", function () {
    $(this).css("background-color", "#ffa041");
  });

  // Form submit
  $("#forgotPasswordForm").on("submit", handleSubmit);

});
