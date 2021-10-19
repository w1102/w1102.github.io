var urlFull
$.getJSON('/json/urlMap.json', function(data) {
	urlFull = data
	
	let currentUrlHash = window.location.hash.substring(1)
	if (currentUrlHash == '') {
		window.location.replace('/#home');
		switchingMenu('home')
	} else {
		switchingMenu(getID(currentUrlHash))
	}
})

function getID(hash) {
	for (let i = 0; i < urlFull.length; i++) {
		if (urlFull[i].urlHash == hash) {
			return urlFull[i].id
		}
	}
	return ''
}

function setUrl(id) {
	let currentUrlHash = window.location.hash.substring(1)
	if (getID(currentUrlHash) != id) {
		for (let i = 0; i < urlFull.length; i++) {
			if (urlFull[i].id == id) {
				window.location.replace('/#' + urlFull[i].urlHash)
			}
		}
		
	}
}
