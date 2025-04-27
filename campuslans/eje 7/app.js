alert('este es mi ejercicio #7');
let tituloDeBachiller = prompt('¿tienes un titulo de bachiller? (si/no)').toLowerCase();
let puedesAcceder;

if(tituloDeBachiller === 'si'){
    puedesAcceder = true;
} else {
    let PruebaDeAcceso = prompt('¿ha superado la prueba de acceso? (si/no)').toLowerCase();
    puedesAcceder = PruebaDeAcceso.toUpperCase() === 'si';
}

if(puedesAcceder){
    alert('puedes acceder a un ciclo formativo de grado superior');
}else{
    alert('No puedes acceder a un ciclo formativo de grado superior');
}