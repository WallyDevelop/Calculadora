// Le da la bienvenida al usuario.
alert ('Bienvenido y bienvenida a la calculadora');

// Hace la introduccion de la persona que realizó la calculadora. 
alert ('Esta calculadora ha sido desarrollada por el Aprendiz en Analisis y Desarrollo de Software Walberto Aguilar Asprilla');

// Le solicita al usuario que ingrese un numero que desee. 
var numero1 = parseFloat(prompt('Por favor ingresa un numero del 0 al infinito'));

// Notifica a la persona el numero que ha seleccionado. 
alert('Has elegido el numero ' + numero1);

// Le pide por segunda vez al usuario que ingrese un numero entreo o en decimal. 
var numero2 = parseFloat(prompt('Por favor ingresa un segundo numero del 0 al infinito'));

// Notifica al usuario el numero que ha seleccionado. 
alert('Has elegido el numero ' + numero2);

// Le muestra a manera de recordatorio al usuario los numeros que ha elegido de momento. 
alert('Elige la operación que deseas hacer con los números ' + numero1 + ' y ' + numero2);

// Le brinda la opción al usuario de escoger la operacion matematica que desea realizar. 
var operaciones = parseInt(prompt('Elige una opcion \n1 Suma \n2 Resta \n3 Multiplicación \n4 Divición'));

// Almacena el resultado de las operaciones realizadas. 
var resultado;

// Se encarga de mostrar el resultado con una informacion clara y detallada 
var nombre='';

// Verifica la operacion elegida por el usuario y la realiza de manera correcta. 
if (operaciones == 1){
    resultado = numero1 + numero2;
    nombre = ' la suma es ' + resultado;
}else if (operaciones == 2){
    resultado = numero1 - numero2;
    nombre = ' la resta es ' + resultado;
}else if (operaciones == 3){
    resultado = numero1 * numero2;
    nombre = ' la multiplicación es ' + resultado;
}else if (operaciones == 4)
    if(numero2 !== 0){
    resultado = numero1 / numero2;
    nombre = 'la divición es ' + resultado;
}else{
    nombre='no se puede divivir por cero';
} else{
    nombre='operacion no valida';
}

// Muestra el resultado de la operacion.
alert(nombre);

// Muestra los numeros ingresados por el usuario y el resultado de la operacion. 
document.write('los numeros que ingresastes fueron ' + numero1 + ' y ' + numero2 + ' y el resultado de la operacion de' + nombre);
