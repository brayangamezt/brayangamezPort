'use strict'

const imagen=document.querySelector('#proyecto1');
const imagen1=document.querySelector('#proyecto2');
const imagen2=document.querySelector('#proyecto3');
const cargarImagen = (entradas, observador)=>{
	//console.log(entradas);
	//console.log(observador);
	entradas.forEach((entrada)=>{
		if(entrada.isIntersecting){
			console.log('la imagen esta en el viewport')
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