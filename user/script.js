function openResetModal(event) {
    event.preventDefault();
    document.getElementById("reset-modal").classList.remove("hidden");
}

function closeResetModal(event) {
    event.preventDefault();
    document.getElementById("reset-modal").classList.add("hidden");
}

function openDeleteModal(event) {
    event.preventDefault();
    document.getElementById("delete-modal").classList.remove("hidden");
}

function closeDeleteModal(event) {
    event.preventDefault();
    document.getElementById("delete-modal").classList.add("hidden");
}

document.getElementById("delete-modal").addEventListener("click", (event) => {
    closeDeleteModal(event)
});

document.getElementById("delete-modal-content").addEventListener("click", (event) => {
    event.stopPropagation();
});

document.getElementById("reset-modal").addEventListener("click", (event) => {
    closeResetModal(event)
});

document.getElementById("reset-modal-content").addEventListener("click", (event) => {
    event.stopPropagation();
});