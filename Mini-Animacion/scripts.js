
window.onload = function(){

	let elem_uno = document.getElementById("uno");
	let elem_dos = document.getElementById("dos");
	let elem_tre = document.getElementById("tres");
	let cambio_color = "rgb("+ parseInt(Math.random()*255) + "," + parseInt(Math.random()*255)+ "," + parseInt(Math.random()*255) + ")";
	let x1=1,x2=1,x3=1;
	

	setInterval(function(){

		let	coordenadas = elem_tre.getBoundingClientRect();
		let coordenadas_colision = coordenadas.right; //Distancia del borde derecho al final de la pantalla
		mover();
		if(coordenadas_colision < window.innerWidth-10){
			x1 = x1 + 5;
			x2 = x2 + 5;
			x3 = x3 + 5;
		} else { 
			x1 = 0;
			x2 = 0;
			x3 = 0;
		}
	},100);

	setInterval(function(){

		cambio_color = "rgb("+ parseInt(Math.random()*255) + "," + parseInt(Math.random()*255)+ "," + parseInt(Math.random()*255) + ")";
		document.getElementsByTagName("body")[0].style.backgroundColor = cambio_color;
	}, 20000);

	function mover(){
		
		elem_uno.style.transform = "translate("+x1+"px"+", 0px)";
		elem_dos.style.transform = "translate("+x2+"px"+", 0px)";
		elem_tre.style.transform = "translate("+x3+"px"+", 0px)";
	}

};
