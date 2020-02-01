function calcularIMC(){
	var formulario = document.getElementById("formulario");
	
	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var imc = kilos / (metros * metros);
	formulario.imc.value=imc.toFixed(2);
	
		if(kilos <=0){
			alert("entre com um valor positivo para kilos");
		}
	
		if(metros <=0){
			alert("entre com um valor positivo para altura");
			formulario.imc.value="erro!";
		}
	
	if(imc <=0){
		formulario.resultado.value = "erro!";
	}else if(imc<20){
		formulario.resultado.value = "abaixo do peso";
	}else if (imc>20 && imc <=25){
		formulario.resultado.value = "peso ideal";
	}else if (imc>25 && imc<=30){
		formulario.resultado.value = "sobrepeso";
	}else if (imc>30 && imc<=35){
		formulario.resultado.value = "obesidade moderada";
	}else if (imc>35 && imc<=40){
		formulario.resultado.value = "obesidade Mórbida";
	}else if(imc>40 && imc<=50){
		formulario.resultado.value = "super obesidade";
	}else
	{
		alert("dados incorretos");
	}
}
