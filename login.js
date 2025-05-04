function checkLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Bu yerda haqiqiy login/parolni o'rnating
    const validUsername = "sizni sevaman begim";
    const validPassword = "Laylo";

    if (username === validUsername && password === validPassword) {
        // login muvaffaqiyatli bo‘lsa — zakazlar sahifasiga yo‘naltiriladi
        window.location.href = "zakazlar.html";
    } else {
        // xatolik bo‘lsa — xabar ko‘rsatamiz
        document.getElementById("login-error").style.display = "block";
    }
}
