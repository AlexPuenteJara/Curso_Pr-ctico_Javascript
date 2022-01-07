console.log("Hello World")
//código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado=5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

function perimetroCuadrado(lado){
    return lado*4;
}

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado+"cm" )

function AreaCuadrado(lado){
    return lado*lado;
}
//const AreaCuadrado=ladoCuadrado*ladoCuadrado;
//console.log("El área del cuadrado es: " + AreaCuadrado+"cm^2" )

console.groupEnd();
console.group("Triángulo");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo =4;
const alturaTriangulo=5.5;
console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 +"cm, "+
    + ladoTriangulo2 +"cm y "
    + baseTriangulo +"cm"
    );
console.log("La altura del triángulo es de: " + alturaTriangulo)
    

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}
console.log("El perímetro del triángulo es")

//const areaTriangulo=alturaTriangulo*baseTriangulo/2;
function areaTriangulo(base,altura){
    return base*altura/2;
}
console.log("El área del triángulo es: " + areaTriangulo+" cm" );
console.groupEnd();

console.group("Círculos")
//Radio
const radioCirculo=4;
console.log("el radio del círculo es "+radioCirculo+ " cm");
//Diámetro 
const diametroCirculo=radioCirculo*2;
console.log("el diametro del círculo es "+ diametroCirculo+ " cm");
//PI
const PI=Math.PI;
//console.log("La medida de PI es" + PI + " cm");
//Circunferencia

//const perimetroCirculo=diametroCirculo*PI;
//console.log("El perímetro del círculo es: " + perimetroCirculo+" cm" );
function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio); 
    return diametro*PI;
}
//Área 

const AreaCirculo=radioCirculo*radioCirculo*PI;
console.log("")
console.groupEnd();

//AQUÍ INTERACTUAMOS CON HTML
function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;

    const perimetro=perimetroCuadrado(value);
    alert(perimetro);


}
function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;

    const area=AreaCuadrado(value);
    alert(area);
}
