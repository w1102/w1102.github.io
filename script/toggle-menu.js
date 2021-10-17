const header = document.querySelector('.header-container')

const toggle = header.querySelector(".toggle");
console.log(toggle)
const menu = header.querySelector(".menu");

function removeMenu() {
	if (menu.classList.contains('active')) {
		menu.classList.remove('active')                
		toggle.querySelector('a').innerHTML = 
		'<i class="fas fa-bars"></i>'
	}
	
}
 
function toggleMenu() {
	if (menu.classList.contains('active')) {
		menu.classList.remove('active')                
		toggle.querySelector('a').innerHTML = 
		'<i class="fas fa-bars"></i>'
	}
	else {
		menu.classList.add('active');
		toggle.querySelector('a').innerHTML = 
		'<i class="fas fa-times"></i>'
	}
}

toggle.addEventListener("click", toggleMenu, false);