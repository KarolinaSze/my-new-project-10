// plik scripts.js


var register = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {

	var all = document.getElementsByTagName('li');
	
	console.log(all.length);
	register.innerHTML += '<li>item '+all.length+'</li>';

});







	

	