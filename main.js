const openModalBtn = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.dot');

function openModal(buttonId) {
    modalOverlay.classList.add('active');
    setTimeout(() => {
        modal.classList.add('modal_show');
    }, 10);
}

function closeModal() {
    modal.classList.remove('modal_show');
    setTimeout(() => {
        modalOverlay.classList.remove('active');
    }, 300);
}

openModalBtn.addEventListener('click', function(event) {
    const buttonId = event.currentTarget.id;
    openModal(buttonId);
});

closeBtn.addEventListener('click', function() {
    closeModal();
});

modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});