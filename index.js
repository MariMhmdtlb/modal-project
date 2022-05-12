const showModalBtn = document.querySelectorAll(".show-modal");
const closeModalBtn = document.querySelectorAll(".close-modal");

const modals = document.querySelectorAll(".modal");
const backDrop = document.querySelector(".backdrop");
showModalBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        takeModal(btn);
        console.log(modal);
        modal.style.display = "block";
        modal.style.transform = "scale(1)";
        backDrop.style.display = "block";
    })
);
closeModalBtn.forEach((btn) => {
    btn.addEventListener("click", closingModal);
});

backDrop.addEventListener("click", closingModal);

function closingModal() {
    modals.forEach((modal) => {
        modal.style.display = "none";
        modal.style.transform = "scale(1)";
        backDrop.style.display = "none";
    });
}

function takeModal(btn) {
    let modalId = btn.getAttribute("data-modal");
    return (modal = document.querySelector(modalId));
}