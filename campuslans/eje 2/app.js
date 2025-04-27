console.log('este es mi ejercicio #2');
// analisis en este ejercicio se me difilcilto en la suma ya que los valores no se sumaban si no se juntaban 
// ejemplo del error en ves de sumar 2 + 2 que es igual a 4 me daba 22
// arreglo busque por internet y tambien que me ayudara un IA y me indentifique el problema que era en prompt le tenia que agregar al inicio parseInt 
let num1 = parseInt(prompt('ingrese el valor 1'));
let num2 = parseInt(prompt('ingrese el valor 2'));
// variable suma 
let suma = num1 + num2;
// variable resta 
let resta = num1 - num2;
// variable de producto 
let producto = num1 * num2;
// variable de division
if(num2 !== 0){
    let division = num1 / num2;
    console.log('suma', suma);
    console.log('resta', resta);
    console.log('producto', producto);
    console.log('division', division);
}else {
    console.log('suma', suma);
    console.log('resta', resta);
    console.log('producto', producto);
    console.log('Error: division por 0');
}
