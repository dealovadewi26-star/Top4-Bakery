$(document).ready(function () {

    // a. Click Event
    $(".btn").click(function () {

        event.preventDefault();
        let user = $("input[type='text']").val();
        let pass = $("input[type='password']").val();

        if (user === "" || pass === "") {
            alert("Username and password cant be empty!");
        } else {
            alert("Login berhasil!");
            window.location.href = "index.html"
        }
    });

    // Show/Hide Password (Eye Icon)
    $(".toggle-pass").click(function () {

        let input = $(".password");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
            $(this).attr("name", "eye-outline");       // icon open eye
        } else {
            input.attr("type", "password");
            $(this).attr("name", "eye-off-outline");   // icon closed eye
        }
    });

    // b. Change Event
    $("input[type='text']").change(function () {
        let val = $(this).val();
        if (val.length < 5) {
            $('.username-warning').text("Username must be at least 5 characters");
        } else {
            $('.username-warning').text("");
        }
    });

    // c. Mouse Move Event
    $('.wrapper').mouseleave(function () {
        // Ubah kursor seluruh body saat mouse keluar
        $('body').css('cursor', 'progress');
    }).mouseenter(function () {
        // Kembalikan kursor ke default saat mouse masuk elemen
        $('body').css('cursor', 'default');
    });

    // d. Keypress Event - Password must have 1 uppercase & 1 number
    $("input[type='password']").on("keypress", function () {

        let pass = $(this).val();

        // Regex
        let hasUppercase = /[A-Z]/.test(pass);
        let hasNumber = /[0-9]/.test(pass);

        // Check conditions
        if (!hasUppercase || !hasNumber) {
            $(".password-warning").text("Password must contain at least 1 uppercase letter and 1 number");
        } else {
            $(".password-warning").text("");
        }
    });

    // e. Focus Event - Highlight input on focus
    $("input").focus(function () {
        $(this).css({
            "box-shadow": "0 0 8px rgba(255, 175, 97, 0.5)"
        });

        $(this).siblings("label").css({
            "color": "#FFAF61"
        });
    });

    // Hilangkan efek saat blur
    $("input").blur(function () {
        $(this).css({
            "border-color": "transparent",
            "box-shadow": "none"
        });

        $(this).siblings("label").css({
            "color": "#e6cbb4"
        });
    });
});