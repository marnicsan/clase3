/*Debera poder ingresar 2 valores
Debera poder ingresar que operacion quiere realizar
Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
Debera mostrar el resultado de la operacion en consola*/

var resOperacion=function(){
	var valorA="";
	var valorB="";
	var operacion="";
	var res="";
	do{
		valorA=prompt("Ingrese el primer valor: ");
	}while(valorA.length<=0 || isNaN(valorA))
	do{
		valorB=prompt("Ingrese el segundo valor: ");
	}while(valorB.length<=0 || isNaN(valorB))
	do{
		operacion=prompt("Operación a realizar (SUMAR / RESTAR / MULTIPLICAR / DIVIDIR): ");
	}while(operacion!="SUMAR" && operacion!="sumar" && operacion!="RESTAR" &&
			operacion!="restar" && operacion!="MULTIPLICAR" && operacion!="multiplicar" &&
			operacion!="DIVIDIR" && operacion!="dividir")
	switch(operacion){
		case "SUMAR": res=suma(valorA,valorB);
						break;
		case "sumar": res=suma(valorA,valorB);
						break;
		case "RESTAR": res=resta(valorA,valorB);
						break;
		case "restar": res=resta(valorA,valorB);
						break;
		case "MULTIPLICAR": res=producto(valorA,valorB);
						break;
		case "multiplicar": res=producto(valorA,valorB);
						break;
		case "DIVIDIR","dividir": res=division(valorA,valorB);
						break;
		case "dividir": res=division(valorA,valorB);
						break;
	}
	return res;
}();

function suma(val1,val2){
	var res=parseInt(val1)+parseInt(val2);
	return res;
}

function resta(val1,val2){
	var res=parseInt(val1)-parseInt(val2);
	return res;
}

function producto(val1,val2){
	var res=parseInt(val1)*parseInt(val2);
	return res;
}

function division(val1,val2){
	var res=parseInt(val1)/parseInt(val2);
	return res;
}

console.log("El resultado obtenido es: "+resOperacion);

