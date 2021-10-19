var LOGGING = true

function switchMenu(menu) {
	// remove menu if exits in mobile mode
	removeMenu()

	// URL handle routing in single page
	if (window.location.hash.substring(1) != menu) {
		window.location.replace('/#' + menu)
	}
	
	$('.body-container').slideToggle('fast', function() {
		switchingMenu(menu)
		$(this).slideToggle('slow')
	})
}

async function switchingMenu(menu) {

	// set color of all item menu is black
	let texts = document.querySelectorAll('.text')
	for (let i = 0; i < texts.length; i++) {
		texts[i].style.color = "black"
	}

	await includeHTML('.body-container', `/sub-page/${menu}.html`)
	
	console.log('next step\n\n\n')
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

async function includeHTML(classSelect, file) {
	if (LOGGING) {console.log('including html')}
	let note = document.querySelector(classSelect)
	if (note) {
		note.innerHTML = await makeRequest('GET', file)
		if (LOGGING) {console.log('included html')}
	}
}


function makeRequest(method, url) {
	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = function () {
			if (LOGGING) {console.log('get html')}
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr.response);
				if (LOGGING) {console.log('get successfull html')}
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		xhr.send();
	});
}