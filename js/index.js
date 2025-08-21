const buttonMobileBurger = document.querySelector(".nav-mobile__burger-wrapper");
const mobileMenuModalWrapper = document.querySelector(".mobile-menu-modal-wrpapper");
const closeMobilemenu = document.querySelector(".mobile-menu-modal__button");
const heroSectionButton = document.querySelector(".hero-section__button");
const modalWrpapper = document.querySelector(".modal-wrpapper");
const mobileMenuModalButton = document.querySelector(".mobile-menu-modal__button");
const closeMenuForm = document.querySelector(".modal__button");

buttonMobileBurger.addEventListener("click", () => {
	mobileMenuModalWrapper.classList.toggle("is-open");
});
closeMobilemenu.addEventListener("click", () => {
	mobileMenuModalWrapper.classList.toggle("is-open");
});
heroSectionButton.addEventListener("click", () => {
	modalWrpapper.classList.toggle("is-open");
});
closeMenuForm.addEventListener("click", () => {
	modalWrpapper.classList.toggle("is-open");
});
