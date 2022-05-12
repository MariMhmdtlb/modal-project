const showModalBtn = document.querySelector(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");
const confirmModalBtn = document.querySelector(".confirm-modal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
showModalBtn.addEventListener("click", () => {
    modal.style.opacity = 1;
    modal.style.transform = "translateY(0)";
    backDrop.style.display = "block";
});
closeModalBtn.addEventListener("click", closingModal);
confirmModalBtn.addEventListener("click", () => {
    modal.style.opacity = "";
    modal.style.transform = "";
    backDrop.style.display = "";
    alert("Confirmed!");
});
backDrop.addEventListener("click", closingModal);

function closingModal() {
    modal.style.opacity = "";
    modal.style.transform = "";
    backDrop.style.display = "";
}