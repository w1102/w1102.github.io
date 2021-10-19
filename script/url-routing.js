var urlFull = [{"id":"home","urlHash":"home"},{"id":"target","urlHash":"muc-tieu"},{"id":"standard","urlHash":"chuan-dau-ra"},{"id":"method","urlHash":"pp-giang-day"},{"id":"rate","urlHash":"pp-danh-gia"},{"id":"time-table","urlHash":"tiet-hoc"},{"id":"location","urlHash":"phong-hoc"}]

function FirstUrlRouting() {
	let currentUrlHash = window.location.hash.substring(1)
	if (currentUrlHash == '') {
		window.location.replace('/#home');
		switchingMenu('home')
	} else {
		switchingMenu(getID(currentUrlHash))
	}
}

function getID(hash) {
	for (let i = 0; i < urlFull.length; i++) {
		if (urlFull[i].urlHash == hash) {
			return urlFull[i].id
			console.log(urlFull)
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