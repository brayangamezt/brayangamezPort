'use strict'

const imagen=document.querySelector('#proyecto1');
const imagen1=document.querySelector('#proyecto2');
const imagen2=document.querySelector('#proyecto3');
const imagen3=document.querySelector('#proyecto4');
const cargarImagen = (entradas, observador)=>{
	//console.log(entradas);
	//console.log(observador);
	entradas.forEach((entrada)=>{
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		}/*else{
			entrada.target.classList.remove('visible');
		}*/
	});
}
const observador = new IntersectionObserver(cargarImagen, {
	root:null,
	rootMargin: '0px', //Sirve para asignar el rango del viewport
	threshold:1, //Esto indica que el codigo se va ejecutar cuando la mitad de la etiqueta que seleccionamos, este dentro del viewport
});
observador.observe(imagen);
observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);



/********************************** */
let tipo = new Typed('.typed',{
	strings:[
		'<i class= "my-information">Brayan Gamez</i>', 
		'<i class= "my-information">Web developer</i>',
		'<i class= "my-information">Brayan Gamez</i>'
	],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
})

/*****************************************/

AOS.init();