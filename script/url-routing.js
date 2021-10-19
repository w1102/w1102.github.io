var urlFull = [{"id":"home","urlHash":"home"},{"id":"target","urlHash":"muc-tieu"},{"id":"standard","urlHash":"chuan-dau-ra"},{"id":"method","urlHash":"pp-giang-day"},{"id":"rate","urlHash":"pp-danh-gia"},{"id":"time-table","urlHash":"tiet-hoc"},{"id":"location","urlHash":"phong-hoc"}]

function FirstUrlRouting() {
	let currentUrlHash = window.location.hash.substring(2)
	if (currentUrlHash == '') {
		window.location.replace('/#/home');
		switchingMenu('home')
	} else {
		switchingMenu(getID(currentUrlHash))
	}
}

function getID(urlHash) {
	for (let url of urlFull) {
		if (url.urlHash == urlHash) {
			return url.id
		}
	}
	return ''
}

function setUrl(id) {
	let currentUrlHash = window.location.hash.substring(2)
	if (getID(currentUrlHash) != id) {
		for (let url of urlFull) {
			if (url.id == id) {
				window.location.replace('/#/' + url.urlHash)
			}
		}
	}
}