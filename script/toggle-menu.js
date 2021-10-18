const header = document.querySelector('.header-container')
const toggle = header.querySelector(".toggle");
const menu = header.querySelector(".menu");

function removeMenu() {
	if (menu.classList.contains('active')) {
		menu.classList.remove('active')
		toggle.querySelector('img').src =
			"/img/header/menu.svg"
	}
}

function toggleMenu() {
	if (menu.classList.contains('active')) {
		menu.classList.remove('active')
		toggle.querySelector('img').src =
			"/img/header/menu.svg"
	} else {
		menu.classList.add('active');
		toggle.querySelector('img').src =
			"/img/header/close.svg"
	}
}

toggle.addEventListener("click", toggleMenu, false);