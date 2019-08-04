'use strict'

window.addEventListener('load', function(){

	var formulario = document.querySelector("#formulario");
	var tabTd = document.querySelectorAll("#tabla tr td");
	var tabTr = document.querySelectorAll("#tabla tr");

	for(let i in tabTr){
		if(typeof tabTr[i] == "object" && i != 0){
			if((i%2) != 0){
				tabTr[i].style.background = "rgba(46,134,193)";
				tabTr[i].style.color = "white";
			}else{
				tabTr[i].style.background = "#eee";
			}
		}
	}

	formulario.addEventListener('submit', function(){

		var materia = document.querySelector("#materia").value;
		var dia = document.querySelector("#dia").value;
		var hora = document.querySelector("#hora").value;
		var aula = document.querySelector("#aula").value;

		if(materia.length >= 1){
			var posKey = ((parseInt(hora)-1)*7)+parseInt(dia); 
			
			if(tabTd[posKey].textContent == ""){
				crearHorario(materia, dia, hora, aula);
			}else{
				var confirmar = confirm("Este horario ya esta ocupado, ¿deseas reemplazarlo?");
				if(confirmar){
					crearHorario(materia, dia, hora, aula);
				}
			}

		}else{
			alert("Asigna Alguna materia");
		}

	});

 	var horarioArray = new Array();

	for(let i in localStorage){
		if(typeof localStorage[i] == "string"){ 
			horarioArray.push(JSON.parse(localStorage[i]));
		}
	}

	var pos;var boton;
	for(let j in horarioArray){
		pos = ((parseInt(horarioArray[j].h)-1)*7)+parseInt(horarioArray[j].d);
		tabTd[pos].innerHTML = horarioArray[j].m+"<br/>"+horarioArray[j].cur+"<br/>";
		boton = document.createElement("button");
		boton.innerHTML = '<i class="fas fa-trash-alt"></i>';
		boton.addEventListener('click', function(){
			localStorage.removeItem(horarioArray[j].d+"-"+horarioArray[j].h);
			location.reload();
		});

		tabTd[pos].append(boton);
		boton.style.display = "none";
	}

	function crearHorario(materia, dia, hora, aula){
		var horario = {
				m: materia,
				d: dia,
				h: hora,
				cur: aula
		}

		let horario_key = horario.d+"-"+horario.h;
		localStorage.setItem(horario_key, JSON.stringify(horario));
		location.reload();
	}

	var borrarAll = document.querySelector("#borrarAll");
	var borrar = document.querySelector("#borrar");

	borrarAll.addEventListener('click', function(){

		localStorage.clear();
		location.reload();

	});

	boton = document.querySelectorAll("#tabla button");

	borrar.addEventListener('click', function(){

		if(boton.length == 0){
			alert("Agrega alguna materia");
		}else{
			for(let i in boton){
				if(typeof boton[i] == "object"){
					boton[i].style.display = "inline-block";
				}
			}
		}

	});

});