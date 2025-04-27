alert('este es mi ejercicio #6');
let numero = parseInt(prompt('digite un numero.'));
function esImpar(valor = 0){
    //return valor === 0 ? `el numero 0 no es par ni impar` : (valor % 2 1== 0 ? `el numero ${valor} es impar.` : `el numero ${valor} es par.`);
    if (valor === 0) return 'el número 0 no es par ni impar';
return valor % 2 === 0 ? `El número ${valor} es par` :  `El número ${valor} es impar`
}
alert(esImpar(numero));