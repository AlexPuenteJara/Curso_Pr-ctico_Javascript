console.log("Hello World")
//código del cuadrado
console.group("Cuadrado");
const ladoCuadrado=5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

const perimetroCuadrado=4*ladoCuadrado;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado+"cm" )

const AreaCuadrado=ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: " + AreaCuadrado+"cm^2" )

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
    
const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo+" cm" );

const areaTriangulo=alturaTriangulo*baseTriangulo/2;
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
console.log("La medida de PI es" + PI + " cm");
//Circunferencia

const perimetroCirculo=diametroCirculo*PI;
console.log("El perímetro del círculo es: " + perimetroCirculo+" cm" );
//Área 

const AreaCirculo=radioCirculo*radioCirculo*PI;
console.log("")
console.groupEnd();
