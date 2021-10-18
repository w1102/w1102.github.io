function switchMenu(menu) {
	
	// remove menu if exits in mobile mode
	removeMenu()
	
	// URL handle routing in single page
	let urlHash = window.location.hash.substring(1)
	if 	(urlHash != menu) {
		let urlNew = '/#' + menu
		window.location.replace(urlNew);
	}
	
	// switching menu
	$('.body-container').animate({
		marginTop: -500,
		opacity: 0
		}, 400, function() {
				
		switchingMenuCallback(menu, function() {
			
			$('.body-container').animate({marginTop: 2000}, 0, function() {
				   $('.body-container').animate({
					   marginTop : 100,
					   opacity: 1
				   }, 300)
				   
				})
		})
			
		
		
		
	})
}



function switchingMenuCallback(menu, callback) {

	// set filter of all image is none
	let texts = document.querySelectorAll('.text')
	for(let i = 0; i < texts.length; i++) {
		
		texts[i].style.color = "black"
		
	}
	
	// change html data
	let content = document.querySelector('.body-container')
	let url = '/sub-page/' + menu + '.html'
	
	content.setAttribute("data-html", url) 
	includeHTML()
	
	// change current menu icon color        
	let textSelected = document.querySelector('#txt' + '-' + menu)
	try {
		
		textSelected.style.color = "white"
	}
	catch(err){}
	
	callback()
}


function switchingMenu(menu) {

	// set color of all item menu is black
	let texts = document.querySelectorAll('.text')
	for(let i = 0; i < texts.length; i++) {
		
		texts[i].style.color = "black"
		
	}
	
	// including html data to body-container
	let content = document.querySelector('.body-container')
	let url = '/sub-page/' + menu + '.html'
	
	content.setAttribute("data-html", url) 
	includeHTML()
	
	// change current menu icon color     
	let textSelected = document.querySelector('#txt' + '-' + menu)
	try {
		textSelected.style.color = "white"
	}
	catch(err){}

}

