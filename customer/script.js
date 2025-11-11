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