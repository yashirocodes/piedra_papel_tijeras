// Le pediremos al Cliente que ingrese una opcion
let numGames = parseInt(prompt("¿Cuantos juegos deseas jugar?"));
/*
Acá declaramos el ciclo
 Con la variable numGames el cual almacena el numero de juegos que ingreso el usuario
 luego le decimos que para que se cumpla la condicion de entrada el numero tiene que ser
 mayor a 0 , si se cumple entra al ciclo.
palabra reservada 'While' (variable -> condición -> valor )*/
while (numGames > 0) {
  // En este caso sera escribir [Piedra] [Papel] [Tijeras]
  let opcionUsuario = parseInt(
    prompt(`
          [ Bienvenido a Piedra, Papel o Tijeras ]
          Escribe el numero de tu jugada :
          1 - Piedra ✊🏼
          2 - Papel ✋🏼
          3 - Tijeras ✌🏼
      `)
  );
  // max  - min + 1
  let opcionMaquina = Math.floor(Math.random() * (4 - 1)) + 1;
  console.log(opcionMaquina); // Nos mostrara el numero de la maquina con propositos academicos .
  /*Con la funcion console.log mostraremos por consola el resultado del juego
    llamando a nuestra funcion la cual tiene la respuesta para dar el resultado del juego
  */
  console.log(winner(opcionMaquina, opcionUsuario));
  /*
      Para poder terminar el ciclo se tiene que cumplir una condicion
      en este caso le decimos que la variable que contiene el numero de 
      jugadas tendrá que ser menor al numero de la condición de entrada .
      el contador resta a la variable - 1 hasta que se cumpla la declaración de entrada .
  */
  numGames = numGames - 1;
}
/* Creamos una funcion con la logica del juego en donde determinamos en que situaciones ganará la maquina
  y cuando gana el suario 
*/
// funcion 'nombre que le daremos a la funcion (acá almacenara los datos que le estamos enviando )'  
function winner(machineChoice, userChoice) {
  if (machineChoice === 1 && userChoice === 3) { // si esteValor es estrictamente igual a esteOtroValor "Y" esteValor es estrictamente igual a esteOtroValor devuelveme esta respuesta 
    return "Perdiste";
  }
  if (machineChoice === 2 && userChoice === 1) {
    return "Perdiste";
  }
  if (machineChoice === 3 && userChoice === 1) {
    return "Perdiste";
  }
  if (machineChoice === userChoice) {
    return "Es un Empate";
  }
  return "ganaste";
}


// fin del script .