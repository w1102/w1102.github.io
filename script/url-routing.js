const urlFull = [{"id":"home","urlHash":"home","title":"Sinh viên CTU"},{"id":"target","urlHash":"muc-tieu","title":"Mục tiêu học phần"},{"id":"standard","urlHash":"chuan-dau-ra","title":"Chuẩn đầu ra"},{"id":"method","urlHash":"pp-giang-day","title":"Phương pháp giảng dạy"},{"id":"rate","urlHash":"pp-danh-gia","title":"Phương pháp đánh giá"},{"id":"time-table","urlHash":"tiet-hoc","title":"Phân bố tiết học"},{"id":"location","urlHash":"phong-hoc","title":"Địa điểm phòng học"}]


function FirstUrlRouting() {
	let currentUrlHash = window.location.hash.substring(2)
	if (currentUrlHash == '') {
		// window.location.replace('/#/home');
		history.pushState('', '', '/#/home/');
		switchingMenu('home')
	} else {
		let currentID = getID(currentUrlHash)
		setTitle(currentID)
		switchingMenu(currentID)
	}
}

function urlRounting(id) {
	let currentUrlHash = window.location.hash.substring(2)
	if (getID(currentUrlHash) != id) {
		for (let url of urlFull) {
			if (url.id == id) {
				// window.location.replace('/#/' + url.urlHash)
				history.pushState('', '', '/#/' + url.urlHash);
			}
		}
	}
}

function setTitle(id) {
	let titleNote = document.querySelector('title')
	for (let url of urlFull) {
		if (url.id == id) {
			titleNote.innerHTML = url.title
		}
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



