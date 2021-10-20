async function switchMenu(id) {
	// remove menu if display in mobile screen
	removeMenu()

	// set url in url bar
	setUrl(id)

	$('.body-container').slideToggle('fast', async function() {
		await switchingMenu(id)
		$(this).slideToggle('slow')
	})
}

async function switchingMenu(id) {

	// set color of all item menu is black
	let texts = document.querySelectorAll('.text')
	for (let i = 0; i < texts.length; i++) {
		texts[i].style.color = "black"
	}

	let textSelected = document.querySelector(`#text-${id}`)
	try {
		textSelected.style.color = "white"
	} catch (err) {}

	await includeHTML('.body-container', `/sub-page/${id}.html`)
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

function addMenuItem(id, name, img) {

	let item = document.createElement("LI")
	item.setAttribute('class', 'item')
	item.innerHTML =
	`
		<ul>
			<li>
				<p onclick='switchMenu("${id}")'>
					<img src="${img}" alt="" width="25" height="25">
				</p>
			</li>
			<li>
				<p class="text" id="text-${id}" onclick='switchMenu("${id}")'>${name}</p>
			</li>
		</ul>            
	`
	let menu = document.querySelector('.menu')
	menu.appendChild(item);
}