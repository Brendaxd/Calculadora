let G_Numero1=0;
let G_Numero2=0;
let G_Signo="";

function anadir(esto)//al presionar los numeros
{

	if(document.getElementById("caja").value==0){
		document.getElementById("caja").value=esto;
	}
	else
		document.getElementById("caja").value=document.getElementById("caja").value+esto;//se concatenan los digitos
}

function operacion(signo)
{
	G_Numero1=document.getElementById("caja").value;//se captura el primer digito ingresado
	G_Signo=signo;//se captura el signo
	document.getElementById("caja").value="";//se limpia el valor de la pantalla
}

function resultado()
{
	G_Numero2=document.getElementById("caja").value;//se captura el segundo valor
	let claseinstanciada=new Calculadora(G_Numero1,G_Numero2);//se llama a la clase y se envian los valores
	switch(G_Signo){

		case'+':
			document.getElementById("caja").value=claseinstanciada.sumar();
		break;

		case'-':
			document.getElementById("caja").value=claseinstanciada.restar();
		break;

		case'x':
			document.getElementById("caja").value=claseinstanciada.multiplicar();
		break;

		case'/':
			document.getElementById("caja").value=claseinstanciada.dividir();
		break;
	}
}

function vaciar()
{
	document.getElementById("caja").value="0";
}


class Calculadora
{
	constructor(_numero1,_numero2)
	{
		this.Numero1=_numero1;//this se refiere a la misma clase calculadora
		this.Numero2=_numero2;
	}

	sumar()
	{
		return parseInt(this.Numero1)+parseInt(this.Numero2);
	}

	restar()
	{
		return parseInt(this.Numero1)-parseInt(this.Numero2);
	}

	multiplicar()
	{
		return parseInt(this.Numero1)*parseInt(this.Numero2);
	}

	dividir()
	{
		return parseInt(this.Numero1)/parseInt(this.Numero2);
	}
}