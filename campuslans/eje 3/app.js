console.log('este es mi ejercicio #3')
alert('ingrese un valor ya sea negativo o positivo');
let num1 = parseFloat(prompt('ingrese el primer valor'));
let num2 = parseFloat(prompt('ingrese el segundo valor'));
let num3 = parseFloat(prompt('ingrese el tercer valor'));
console.log('los numeros que elejistes son:');
console.log(num1);
console.log(num2);
console.log(num3);
if(num1 < 0){
    console.log('el producto es', num1 * num2 * num3 );
}else{
    console.log('la suma es', num1 + num2 + num3);
}
