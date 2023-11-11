'use strict';
console.log("loading in popup")

window.addEventListener( 'load', function(e){
	let buttone = document.getElementById('mybutton');
	buttone.addEventListener('click', function(e) {
		console.debug("mybutton clicked")

		let messagee = document.getElementById('message_area')
		messagee.textContent += "Hello "
	});
}, false);
