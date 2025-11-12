function openEditModal(event) {
    event.preventDefault();
    document.getElementById("edit-modal").classList.remove("hidden");
}

function closeEditModal(event) {
    event.preventDefault();
    document.getElementById("edit-modal").classList.add("hidden");
}

function openDeleteModal(event) {
    event.preventDefault();
    document.getElementById("delete-modal").classList.remove("hidden");
}

function closeDeleteModal(event) {
    event.preventDefault();
    document.getElementById("delete-modal").classList.add("hidden");
}

document.getElementById("edit-modal").addEventListener("click", (event) => {
    closeEditModal(event)
});

document.getElementById("edit-modal-content").addEventListener("click", (event) => {
    event.stopPropagation();
});

document.getElementById("delete-modal").addEventListener("click", (event) => {
    closeDeleteModal(event)
});

document.getElementById("delete-modal-content").addEventListener("click", (event) => {
    event.stopPropagation();
});

function valid(event) {
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

    closeEditModal(event);
}
