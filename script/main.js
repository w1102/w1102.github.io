


function switchMenu(menu) {
	
	// Handle Routing in Single Page
	let urlHash = window.location.hash.substring(1)
	
	if 	(urlHash != menu) {
		let urlNew = '/#' + menu
		window.location.replace(urlNew);
	}
	
	// switching menu
	$('.body-container').animate({
		marginTop: -500,
		opacity: 0
		}, 300, function() {
		
		switchingMenu(menu)
			
		$('.body-container').animate({marginTop: 2000}, 0, function() {
		   $('.body-container').animate({
			   marginTop : 85,
			   opacity: 1
		   }, 300)
		   
		})
		
		
	})
}


function switchingMenu(menu) {

	// set filter of all image is none
	let texts = document.querySelectorAll('.text')
	for(let i = 0; i < texts.length; i++) {
		
		texts[i].style.color = "black"
		
	}
	
	// change html data
	let content = document.querySelector('.body-container')
	let url = '/sub-page/' + menu + '.html'
	
	console.log(url)

	content.setAttribute("data-html", url) 
	includeHTML()
	
	// change current menu icon color        
	let textSelected = document.querySelector('#txt' + '-' + menu)
	try {
		
		textSelected.style.color = "white"
	}
	catch(err){}
}