async function switchMenu(menu) {
	// remove menu if exits in mobile mode
	removeMenu()

	// URL handle routing in single page
	if (window.location.hash.substring(1) != menu) {
		window.location.replace('/#' + menu)
	}

	$('.body-container').slideToggle('fast', async function() {
		await switchingMenu(menu)
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

	let textSelected = document.querySelector(`#txt-${menu}`)
	try {
		textSelected.style.color = "white"
	} catch (err) {}
}

async function includeHTML(elementNote, file) {
	let note = document.querySelector(elementNote)
	if (note) {
		note.innerHTML = await makeRequest('GET', file)
	}
}

function makeRequest(method, url) {
	return new Promise(function(resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = function() {
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr.response);
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function() {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		xhr.send();
	});
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