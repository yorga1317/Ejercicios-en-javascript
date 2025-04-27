alert('Este es mi ejercicio #5')
//variables de mi ejercicio.
let mes = prompt('Ingrese el mes:');
let importe = parseFloat(prompt('ingrese el importe').replace(/\./g,''))

// la funcion que debe hacer 
 function calcularDescuento(mes, importe){
    if(mes === 'octubre'){
        let descuento = importe * 0.15;
        return importe - descuento;
    }else{
        return importe
    }
 }

alert('El importe a cobrar es:' + calcularDescuento(mes, importe).toLocaleString('es-ES'));