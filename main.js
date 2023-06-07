let info=prompt("Cual es tu nombre?");
let datos =Number (prompt("Ingresar edad"));
datos>=18
? alert("Ya eres mayor de edad!¡Bienvenid@!")
: alert("Eres menor de edad!¡Bienvenid@!");
localStorage.setItem("Nombre",info);
localStorage.setItem("Edad", datos);


