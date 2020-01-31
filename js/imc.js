
/*alert("olá mundo");
função ligar
autor:Fernando
descrição: apresenta o nome do usuário e liga a lampada.
*/
/*
	function ligar(){
		var nome="ricardo\n fernando";//string
		var idade =31;//int
		var casado = true;//boolean
		document.getElementById("tokyo").href="http://www.google.com.br";
		alert(nome);
		}
*/
/*botão de interacao*/
/*
function ligar(){
		var nome= prompt("qual o seu nome?");//string
		alert("Prazer em conhecer você " + nome);
		document.getElementById("tokyo");
		
		}
		*/
/* variablename = (condition) ? value1:value2	
voteable = (age < 18) ? "Too young":"Old enough";	
*/		
/* 
Pessoa = {
	nome:"fulano"
}		
alert(Pessoa.nome);
delete Pessoa.nome;
alert(Pessoa.nome);
*/
/*
Pessoa = {
	nome:"fulano"
}		
alert("nome" in Pessoa);
alert("telefone" in Pessoa);
*/
function calcularIMC(){
	var formulario = document.getElementById("formulario");
	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;
	var altura = (metros *100 + centimetros)/100;
	var imc = kilos / (altura * altura);
	formulario.imc.value=imc.toFixed(2);
}



