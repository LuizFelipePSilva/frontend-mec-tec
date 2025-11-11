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
