let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Hora del Desafío'


function botonClicado() {
    alert('El botón fue clicado');
}

function botonPromtClick(){
    let ciudad = prompt('Dime un nombre de alguna ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function alertaJs(){
    alert('Yo amo Js');
}

function suma() {
    let botonSuma1 = parseInt(prompt('Escribe 1 numero'));
    let botonSuma2 = parseInt(prompt('Escribe 1 numero'));
    let resultado = botonSuma1 + botonSuma2;
    alert(`El Resultado de los numeros ingresados es: ${resultado}`);
}