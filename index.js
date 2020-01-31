console.log("message"); //Imprimiendo en consola.

// Declaraciones en javascript
var uno;
let dos;
const x=2;//No se puede cambiar el valor es definido

//Declaracón de un objeto
var Persona={
    nombre:"luis",
    edad:function(){
        return 3;
    }
}

//Llamada a un objeto
console.log(Persona.nombre);

//Imprimir
console.log(Persona["nombre"]);

//Acceder al tipo de dato y sus propiedades
console.log(x.__proto__)

/*Hay tres tipos de literales de string:
El primero es con comilla ""
el segundo es con ' y 
el  tercero es ``
*/

console.log("mensaje");
console.log('mensaje');
console.log(`mensaje`);//Solo con estas funciona la interpolación

//Interpolacion de cadenas:Meter expresiones dentro de un string

console.log(`La constante x tiene el valor de ${x}`);
console.log(`Esta personase llama ${Persona.nombre} y su edad es ${Persona.edad()}`);

//Creando un arreglo 
var arreglo=[67,8];
arreglo.push(6);
arreglo.push(0);
console.log(arreglo);
console.log(`El tamaño del arreglo es: ${arreglo.length}`);
console.log(`Se elimina el valor ${arreglo.pop()}`);//Quita el ultimo en ser insertado y lo regresa
console.log(`El tamaño del arreglo es: ${arreglo.length}`);


//Creación d eun for

//For i contador

for (let i=0;i<3;i++){
    console.log(`Variable i con valor ${i}`)
}

//for in para arreglos: Extrae la posicion o el indice  de cada elemento
for (let elemento in arreglo){
    console.log(`EL enesimo elemento contiene ${elemento}`)
}

//for of extra el  valor de cada elemento
for (let elemento of arreglo){
    console.log(`EL enesimo elemento contiene ${elemento}`)
}

//For con uso de objetos

//for in para objetos: Extrae la posicion o el indice  de cada elemento(recorrer atributos del objeto)
for (let elemento in Persona){
    console.log(`EL enesimo clave o propiedad contiene ${elemento}`)
}

//Funciones

function nombreFuncion(){
    alert('pizzas')
    return "Quiero pizza"
    
}
otronombre = nombreFuncion
console.log(otronombre);//Guardo una referencia
console.log(otronombre()); //Ejecuto la funcion

function suma( number1,numero2){
    return number1+numero2;
}
console.log(suma(1,2));


//Funcion anonima

//Guarde la referencia de una funcion anonima

fAnonima=function(){
    return true;
}

// Valor
console.log(fAnonima());



// Referenci o apuntador a una funcion
console.log(fAnonima);

let otra= fAnonima; //Guardo la referencia en una variable
otra();


//arrow functions

//Para una sola linea de codigo

let funcionDeFlecha = () => false;

// valor
console.log(funcionDeFlecha());


// referencia
console.log(funcionDeFlecha);

