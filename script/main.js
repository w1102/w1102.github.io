function switchMenu(menu) {
	// remove menu if exits in mobile mode
	removeMenu()

	// URL handle routing in single page
	if (window.location.hash.substring(1) != menu) {
		window.location.replace('/#' + menu)
	}

	// switching menu
	$('.body-container').animate({ marginTop: -500, opacity: 0 }, 400, function() {
		switchingMenu(menu)
		$('.body-container').animate({ marginTop: 2000 }, 0, function() {
			$('.body-container').animate({ marginTop: 100, opacity: 1 }, 300)
		})
	})
}

function switchingMenu(menu) {

	// set color of all item menu is black
	let texts = document.querySelectorAll('.text')
	for (let i = 0; i < texts.length; i++) {
		texts[i].style.color = "black"
	}

	includeHTML('.body-container', `/sub-page/${menu}.html`)

	let textSelected = document.querySelector(`#txt-${menu}`)
	try {
		textSelected.style.color = "white"
	}
	catch (err) {}
}

function addMenuItem(hash, name, img) {

	let item = document.createElement("LI")
	item.setAttribute('class', 'item')
	item.innerHTML =
	`
		<ul>
			<li>
				<p onclick='switchMenu("${hash}")'>
					<img id="img-${hash}" src="${img}" alt="">
				</p>
			</li>
			<li>
				<p class="text" id="txt-${hash}" onclick='switchMenu("${hash}")'>${name}</p>
			</li>
		</ul>            
	`
	let menu = document.querySelector('.menu')
	menu.appendChild(item);

}

function getHTML(file, callback) {
	let xhttp = new XMLHttpRequest()
	xhttp.onreadystatechange = function() {
		if (this.status == 200) { callback(this.responseText) }
		if (this.status == 404) { callback(`<h1>Page not found</h1>`) }
	}
	xhttp.open("GET", file, true)
	xhttp.send()
}

function includeHTML(classSelect, file) {
	let note = document.querySelector(classSelect)
	if (note) {
		getHTML(file, function(html) {
			note.innerHTML = html
		})
	}
}