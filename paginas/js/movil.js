'use strict';

window.addEventListener('load', function(){


	var visible = document.querySelector('#visible');
	var oculto = document.querySelector('#oculto');
	var titulo = document.querySelectorAll('#imagenes div h2');
	var texto = document.querySelectorAll('#imagenes div p');
	var img = document.querySelectorAll('#imagenes div img');
	var btn = document.querySelectorAll('#imagenes div button');
	var modal = document.getElementsByClassName('modal');
	var salir = document.getElementById('salir');
	var imgModal = document.getElementById('imgModal');
	var tModal = document.querySelector('#tModal');

	visible.addEventListener('click', function(){

		for(let i in texto){
			if(typeof texto[i].innerHTML == "string"){
				texto[i].style.display = "block";
			}
		}

	});

	oculto.addEventListener('click', function(){

		for(let i in texto){
			if(typeof texto[i].innerHTML == "string"){
				texto[i].style.display = "none";
			}
		}

	});

	function fullImg(pos){
		btn[pos].addEventListener('click', function(){

			modal[0].style.display = 'block';
			tModal.innerHTML = titulo[pos].innerHTML;
			imgModal.src = img[pos].src;

		});
	}

	salir.addEventListener('click',  function(){

		modal[0].style.display = 'none';

	});


	for(let i in titulo){
		if(typeof titulo[i].innerHTML == "string"){
			fullImg(i);
		}
	}


});