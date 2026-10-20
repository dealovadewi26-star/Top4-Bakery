// reset.js (tanpa alert)

$(document).ready(function () {

  $("#resetPasswordForm").on("submit", function (e) {
    e.preventDefault();

    let newPass = $("#newPassword").val();
    let confirmPass = $("#confirmPassword").val();
    let msg = $("#resetMessage");

    // === VALIDASI: tidak boleh kosong ===
    if (newPass === "" || confirmPass === "") {
      msg.text("Password fields cannot be empty!").css("color", "red");
      return;
    }

    // === VALIDASI: minimal 6 karakter ===
    if (newPass.length < 6) {
      msg.text("Password terlalu pendek! (min 6 karakter)").css("color", "red");
      return;
    }

    // === VALIDASI: harus sama ===
    if (newPass !== confirmPass) {
      msg.text("Password tidak sama!").css("color", "red");
      return;
    }

    // === SUCCESS ===
    msg.text("Password berhasil direset!").css("color", "lightgreen");

    // Redirect setelah 2 detik
    setTimeout(function () {
      window.location.href = "login.html";
    }, 2000);
  });

  // Efek focus
  $("input").on("focus", function () {
    $(this).css("background-color", "rgba(255,175,97,0.15)");
  });

  // Hilangkan pesan saat input diubah
  $("input").on("input", function () {
    $("#resetMessage").text("");
  });

  // Hover button
  $("button").on("mousemove", function () {
    $(this).css("background-color", "#ffa041");
  });

});
