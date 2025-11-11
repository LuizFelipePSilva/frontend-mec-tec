function valid(event, path) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();

    const field = {
        "nome": name,
        "cpf": cpf,
        "telefone": phone,
        "email": email,
        "endereço": address,
    };

    const fieldBlank = Object.entries(field).filter(([_, valor]) => !valor);

    if (fieldBlank.length > 0) {
        alert(fieldBlank.map((s) => {
            return `${s[0]} está vazio`
        }).join("\n"));
        return;
    }

    window.location.assign(path);
}
