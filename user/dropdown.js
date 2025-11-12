function toggleDropDown(event) {
    event.preventDefault();
    document.getElementById("dropdown-menu").classList.toggle("hidden");
}

function openChangePasswordModal(event) {
    event.preventDefault();
    document.getElementById("change-password-modal").classList.remove("hidden");
}

function closeChangePasswordModal(event) {
    event.preventDefault();
    document.getElementById("change-password-modal").classList.add("hidden");
}

document.getElementById("change-password-modal").addEventListener("click", (event) => {
    closeChangePasswordModal(event)
});

document.getElementById("change-password-modal-content").addEventListener("click", (event) => {
    event.stopPropagation();
});

window.addEventListener("click", (event) => {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const dropdownButton = document.getElementById("dropdown-button");
    if (!dropdownMenu.contains(event.target)
        && !dropdownButton.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
    }
})

function valid(event) {
    event.preventDefault();

    const oldPassword = document.getElementById("old-password").value.trim();
    const newPassword = document.getElementById("new-password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    const field = {
        "senha antiga": oldPassword,
        "nova senha": newPassword,
        "confirma": confirmPassword
    };

    const fieldBlank = Object.entries(field).filter(([_, valor]) => !valor);

    if (fieldBlank.length > 0) {
        alert(fieldBlank.map((s) => {
            return `${s[0]} está vazio`
        }).join("\n"));
        return;
    }

    closeChangePasswordModal(event);
}