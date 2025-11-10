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