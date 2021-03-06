let G_Numero1=0;
let G_Numero2=0;
let G_Signo="";

function anadir(esto)//al presionar los numeros
{

	if(document.getElementById("caja").value==0)
	{
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
	switch(G_Signo)//se determina a que funcion debe ir
	{

		case'+':
			claseinstanciada.sumarasinc().then(function(response)//then, cuando se pueda hacer. Se llama a la funcion, se almacena el resultado en response
			{
				document.getElementById("caja").value=response;
			},function(error)//funcion por si hay algun error
			{
				document.getElementById("caja").value="ERROR";
			});
		break;

		case'-':
			claseinstanciada.restarasinc().then(function(response)
			{
				document.getElementById("caja").value=response;
			},function(error)
			{
				document.getElementById("caja").value="ERROR";
			});
		break;

		case'x':
			claseinstanciada.multiplicarasinc().then(function(response)
			{
				document.getElementById("caja").value=response;
			},function(error)
			{
				document.getElementById("caja").value="ERROR";
			});
		break;

		case'/':
			claseinstanciada.dividirasinc().then(function(response)
			{
				document.getElementById("caja").value=response;
			},function(error)
			{
				document.getElementById("caja").value="ERROR";
			});
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
		return parseInt(this.Numero1)+parseInt(this.Numero2);//parseint para que no lo tome como texto
	}


	sumarasinc()//funcion asincrona
	{
		var objeto=this;//se almacena la calse calculadora
		return new Promise(function(resolve,reject)//promise, en algun momento va a devolver algo
		{
			try
			{
				resolve(parseInt(objeto.Numero1)+parseInt(objeto.Numero2));//lo que va a devolver, al ir a objeto se va a la clase porque objeto es this
			}
			catch(err)
			{
				reject(err.message);//envia un mensaje de eroor si algo sale mal
			}
		});//se cierra la promesa

	}


	restar()
	{
		return parseInt(this.Numero1)-parseInt(this.Numero2);
	}


	restarasinc()
	{
		var objeto=this;
		return new Promise(function(resolve,reject)
		{
			try
			{
				resolve(parseInt(objeto.Numero1)-parseInt(objeto.Numero2));
			}
			catch(err)
			{
				reject(err.message);
			}
		});	

	}


	multiplicar()
	{
		return parseInt(this.Numero1)*parseInt(this.Numero2);
	}


	multiplicarasinc()
	{
		var objeto=this;
		return new Promise(function(resolve,reject)
		{
			try
			{
				resolve(parseInt(objeto.Numero1)*parseInt(objeto.Numero2));
			}
			catch(err)
			{
				reject(err.message);
			}
		});

	}


	dividir()
	{
		return parseInt(this.Numero1)/parseInt(this.Numero2);
	}


	dividirasinc()
	{
		var objeto=this;
		return new Promise(function(resolve,reject)
		{
			try
			{
				resolve(parseInt(objeto.Numero1)+parseInt(objeto.Numero2));
			}
			catch(err)
			{
				reject(err.message);
			}
		});

	}
}