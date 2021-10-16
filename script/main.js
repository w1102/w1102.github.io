


function switchMenu(menu) {
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

	content.setAttribute("data-html", url) 
	includeHTML()
	
	// change current menu icon color        
	let textSelected = document.querySelector('#txt' + '-' + menu)
	try {
		
		textSelected.style.color = "white"
	}
	catch(err){}
}