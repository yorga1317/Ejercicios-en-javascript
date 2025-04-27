console.log('este es mi ejercicio #4');
let niños = parseInt(prompt('dijite la cantidad de estudiante hombres hay en la escuela'));
let niñas = parseInt(prompt('dijite la cantidad de estudiante mujeres hay en la escuela'));
console.log('en la escula hay', niños,'hombres y tambien hay', niñas, 'mujeres en total son', niños + niñas, 'estudiante');
//porcentaje de hombre y mujeres
console.log('porcentaje de niños:', Math.round((niños / (niños + niñas) * 100)) + '%');
console.log('porcentaje de niñas:', Math.round((niñas / (niños + niñas) * 100)) + '%');
