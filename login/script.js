function valid(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const field = {
        "username": username,
        "senha": password,
    };

    const fieldBlank = Object.entries(field).filter(([_, valor]) => !valor);

    if (fieldBlank.length > 0) {
        alert(fieldBlank.map((s) => {
            return `${s[0]} está vazio`
        }).join("\n"));
        return;
    }

    window.location.assign("/");
}
