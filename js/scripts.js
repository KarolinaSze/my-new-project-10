// plik scripts.js


var lista = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {

	var all = document.getElementsByTagName('li');
	
	console.log(all.length);
	lista.innerHTML += '<li>item '+all.length+'</li>';

});







	

	