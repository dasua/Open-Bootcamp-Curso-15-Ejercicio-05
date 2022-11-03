/*
Crea un archivo JS que contenga las siguientes líneas
    - [X] Una variable que contenga tu altura en centímetros (entero)
    - [X] Una variable que contenga tu altura en metros (número de coma flotante)
    - [X] Una variable que contenga tu peso en kilogramos (número de coma flotante)
    - [X] Una variable que contenga tu altura en metros redondeada hacia arriba
    - [X] Una variable que contenga tu peso en kilogramos redondeado hacia abajo
    - [X] Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
 */

let alturaEnCentimetros = 183;
let alturaEnMetros = 1.83;
let pesoEnKilos = 98.3;
let alturaEnMetrosRedondeadaAlAlza = Math.ceil(alturaEnMetros);
let alturaEnMetrosRedondeadaALaBaja = Math.floor(alturaEnMetros);
let iguales = Number.MAX_VALUE === (Number.MAX_VALUE + 1);

console.log(alturaEnCentimetros);
console.log(alturaEnMetros);
console.log(pesoEnKilos);
console.log(alturaEnMetrosRedondeadaAlAlza);
console.log(alturaEnMetrosRedondeadaALaBaja);
console.log(iguales);
