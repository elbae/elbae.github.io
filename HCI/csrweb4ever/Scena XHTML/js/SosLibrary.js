// @Author: Tommaso Pellegrini
// Ver 0.1 02/05/2012

// IMPORTANTE: Cambiare url qui sotto in caso di cambio dominio
var Url="http://www.aprilsfools.it/sos/getvars.php"

/*
Blocked requests
/sos/getvars.php?
1)
action=rowsBetweenAandB&Nome=Gradimento+del+Personale&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC

2)
action=rowsBetweenAandB&Nome=Media+tra+Cancelleria%2C+Energia+Verde+e+Prodotti+Equosolidali&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC.

3)
action=rowsBetweenAandB&Nome=Cons.+Energetico+per+Utente&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC

4) 
action=rowsBetweenAandB&Nome=Partecipazione+a+eventi+sostenibili&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC

5)
action=rowsBetweenAandB&Nome=Kg+Carta+per+Utente&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC

6)
action=rowsBetweenAandB&Nome=Consumo+Idrico&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC

7)
action=rowsBetweenAandB&Nome=Utilizzo+dei+mezzi+pubblici&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC

8)
action=rowsBetweenAandB&Nome=Raccolta+differenziata&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC

9)
action=rowsBetweenAandB&Nome=Fondi+Sostenibili&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC

10)
action=rowsBetweenAandB&Nome=CFU+dedicati+al+sostenibile&DataA=2010-01-01&DataB=2013-12-31&Gruppo=Bellialbuio&Ordine=ASC

*/

/*
####################################################
############ Query restituzione Somme ##############
####################################################
*/

/*
######################################################
	Restituisce la SOMMA dei valori della variabile 
	dal PRIMO GIORNO del sistema alla DATA SPECIFICA

 Parametri: Nome - Nome Variabile (Stringa)
			DataX - Data Specifica (Stringa nel formato YYYY-MM-DD)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
######################################################
*/

function getSumFromVeryBeginningToDate(Nome, DataX, Gruppo, onSuccess, onError, params)
{
var args = []; 

for(i=5; i< arguments.length; i++)
{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'sumVeryBeginToX',
            	Nome: Nome,
				DataX: DataX,
				Gruppo: Gruppo,
           	},
		dataType: "xml",

		success: function(data)
				{ 
					onSuccess(data, args[0], args[1],args[2],args[3], args[4]);
				},
		error: function (jqXHR, textStatus, errorThrown){ 
alert(jqXHR);
alert(textStatus);
alert(errorThrown);
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		
		})

//Php case sumVeryBeginToX
}
	
/*
######################################################
	Restituisce la SOMMA dei valori della variabile 
	dal PRIMO GIORNO del sistema alla DATA ODIERNA
		
	Params: Nome - Nome Variabile (Stringa), 
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
######################################################
*/
function getSumFromVeryBeginningToNow(Nome, Gruppo, onSuccess, onError, params)
{
	var args = []; 

	for(i=4; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'sumVeryBeginToNow',
            	Nome: Nome,
				Gruppo: Gruppo
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, errorThrown){ 

			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		
		})
	
	//Php case sumVeryBeginToNow

}


/*
######################################################
	Restituisce la SOMMA dei valori della variabile 
	dal PRIMO GIORNO dell'ANNO CORRENTE 
	alla DATA SPECIFICA

	Params: Nome - Nome Variabile (Stringa) 
			DataX - Data Specifica (Stringa nel formato YYYY-MM-DD)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
######################################################
*/
function getSumFromYearBeginningToDate(Nome, DataX, Gruppo, onSuccess, onError, params)
{
	var args = []; 

	for(i=5; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'sumYearBeginToX',
            	Nome: Nome,
				DataX: DataX,
				Gruppo: Gruppo
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
//Php case sumYearBeginToX

}

/*
######################################################
	Restituisce la SOMMA dei valori della variabile 
	dal PRIMO GIORNO dell'ANNO CORRENTE 
	alla DATA ODIERNA

	Params: Nome - Nome Variabile (Stringa)
			DataX - Data Specifica (Stringa nel formato YYYY-MM-DD)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
######################################################
*/
function getSumFromYearBeginningToNow(Nome, Gruppo, onSuccess, onError, params)
{
var args = []; 

	for(i=4; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'sumYearBeginToNow',
            	Nome: Nome,
				Gruppo: Gruppo
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
//Php case sumYearBeginToNow

}

/*
######################################################
	Restituisce la SOMMA dei valori della variabile da
	una DATA SPECIFICA alla DATA ODIERNA
	
	Params: Nome - Nome Variabile (Stringa)
			DataX - Data Specifica (Stringa nel formato YYYY-MM-DD)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
######################################################
*/
function getSumFromDateToNow(Nome, DataX, Gruppo, onSuccess, onError, params)
{
var args = []; 

	for(i=5; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'sumFromDataToNow',
            	Nome: Nome,
				DataX: DataX,
				Gruppo: Gruppo
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
		
//Php case sumFromDataToNow

}

/*
######################################################
	Restituisce la SOMMA dei valori della variabile 
	dalla DATA SPECIFICA (A) alla DATA SPECIFICA (B)
	
	Params: Nome - Nome Variabile (Stringa),
			DataA - Data Specifica Iniziale (Stringa nel formato YYYY-MM-DD)
			DataB - Data Specifica Finale (Stringa nel formato YYYY-MM-DD)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
######################################################
*/
function getSumInTimeBetween(Nome, DataA, DataB, Gruppo, onSuccess, onError, params)
{
	var args = []; 

	for(i=6; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'sumBetweenAandB',
            	Nome: Nome,
				DataA: DataA,
				DataB: DataB,
				Gruppo: Gruppo
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
		
	//Php case sumBetweenAandB

}



















/*
####################################################
############ Query restituzione Righe ##############
####################################################
*/

/*
######################################################
	Restituisce la LISTA dei valori della variabile 
	dal PRIMO GIORNO del sistema alla DATA SPECIFICA
	in ordine cronologico crescente/decrescente 

	Params: Nome - Nome Variabile (Stringa)
			DataX - Data Specifica (Stringa nel formato YYYY-MM-DD)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
			Ordine - Ordine Crescente ("ASC") o 
						Decrescente ("DESC")(Stringa) 
######################################################
*/
function getRowsFromVeryBeginningToDate(Nome, DataX, Gruppo, Ordine, onSuccess, onError, params)
{
	
	var args = []; 

	for(i=6; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'rowsVeryBeginToX',
            	Nome: Nome,
				DataX: DataX,
				Gruppo: Gruppo,
				Ordine: Ordine
           	},
		dataType: "xml",
		success: function(data)
				{ 

					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
//Php case rowsVeryBeginToX

}

/*######################################################
	Restituisce la LISTA dei valori della variabile 
	dal PRIMO GIORNO del sistema alla DATA ODIERNA
	in ordine cronologico crescente/decrescente 
		
	Params: Nome - Nome Variabile (Stringa)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError,
			Ordine - Ordine Crescente ("ASC") o 
						Decrescente ("DESC")(Stringa) 
######################################################
*/
function getRowsFromVeryBeginningToNow(Nome, Gruppo, Ordine, onSuccess, onError, params)
{
	var args = []; 

	for(i=5; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'rowsVeryBeginToNow',
            	Nome: Nome,
				Gruppo: Gruppo,
				Ordine: Ordine
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
	//Php case rowsVeryBeginToNow

}

/*
######################################################
	Restituisce la LISTA dei valori della variabile 
	dal PRIMO GIORNO dell'ANNO CORRENTE alla DATA SPECIFICA
	in ordine cronologico crescente/decrescente 

	Params: Nome - Nome Variabile (Stringa)
			DataX - Data Specifica (Stringa nel formato YYYY-MM-DD)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
			Ordine - Ordine Crescente ("ASC") o 
						Decrescente ("DESC")(Stringa) 
######################################################
*/
function getRowsFromYearBeginningToDate(Nome, DataX, Gruppo, Ordine, onSuccess, onError, params)
{

	var args = []; 

	for(i=6; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'rowsYearBeginToX',
            	Nome: Nome,
				DataX: DataX,
				Gruppo: Gruppo,
				Ordine: Ordine
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
//Php case rowsYearBeginToX
}

/*######################################################
	Restituisce la LISTA dei valori della variabile 
	dal PRIMO GIORNO dell'ANNO CORRENTE alla DATA ODIERNA
	in ordine cronologico crescente/decrescente 
		
	Params: Nome - Nome Variabile (Stringa)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError,
			Ordine - Ordine Crescente ("ASC") o 
						Decrescente ("DESC")(Stringa) 
######################################################
*/
function getRowsFromYearBeginningToNow(Nome, Gruppo, Ordine, onSuccess, onError, params)
{
	var args = []; 

	for(i=5; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'rowsYearBeginToNow',
            	Nome: Nome,
				Gruppo: Gruppo,
				Ordine: Ordine
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
	//Php case rowsYearBeginToNow
}

/*
######################################################
	Restituisce la LISTA dei valori della variabile da
	una DATA SPECIFICA alla DATA ODIERNA in ordine 
	cronologico crescente/decrescente 
	
	Params: Nome - Nome Variabile (Stringa)
			DataX - Data Specifica (Stringa nel formato YYYY-MM-DD),
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
			Ordine - Ordine Crescente ("ASC") o 
						Decrescente ("DESC")(Stringa) 
######################################################
*/
function getRowsFromDateToNow(Nome, DataX, Gruppo, Ordine, onSuccess, onError, params)
{
	var args = []; 

	for(i=6; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'rowsFromDataToNow',
            	Nome: Nome,
				DataX: DataX,
				Gruppo: Gruppo,
				Ordine: Ordine
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
//Php case rowsFromDataToNow
}

/*
######################################################
	Restituisce la LISTA dei valori della variabile 
	dalla DATA SPECIFICA (A) alla DATA SPECIFICA (B)
	in ordine cronologico crescente/decrescente 
	
	Params: Nome - Nome Variabile (Stringa)
			DataA - Data Specifica Iniziale (Stringa nel formato YYYY-MM-DD)
			DataB - Data Specifica Finale (Stringa nel formato YYYY-MM-DD)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
			Ordine - Ordine Crescente ("ASC") o 
						Decrescente ("DESC")(Stringa)
######################################################
*/
function getRowsInTimeBetween(Nome, DataA, DataB, Gruppo, Ordine, onSuccess, onError, params)
{
	/* 
		Custom parte ab 13.05.2023
	*/
	var Valore1 = 3;
	var Valore2 = 6;
	var Data1 = DataA;
	var Data2 = DataB;
	var Unita1 = "Valore di Unita";
	var Unita2 = "Valore di Unita";

	switch(Nome){
		case "Gradimento del Personale":
			// code block
			break;
		case "Media tra Cancelleria, Energia Verde e Prodotti Equosolidali":
			// code block
			break;
		case "Cons. Energetico per Utente":
			// code block
			break;
		case "Partecipazione a eventi sostenibili":
			// code block
			break;
		case "Kg Carta per Utente":
			// code block
			break;
		case "Consumo Idrico":
			// code block
			break;
		case "Utilizzo dei mezzi pubblici":
			// code block
			break;
		case "Raccolta differenziata":
			// code block
			break;
		case "Fondi Sostenibili":
			// code block
			break;
		case "CFU dedicati al sostenibile":
			// code block
			break; 
	}

	data = `<?xml version="1.0"?>
	<Riga>
		<Nome>
			${Nome}
		</Nome>
		<Valore>
			${Valore1}
		</Valore>
		<Data>
			${Data1}
		</Data>
		<Unita>
			${Unita1}
		</Unita>
	</Riga>
	<Riga>
		<Nome>
			${Nome}
		</Nome>
		<Valore>
			${Valore2}
		</Valore>
		<Data>
			${Data2}
		</Data>
		<Unita>
			${Unita2}
		</Unita>
	</Riga>`
	return(data);

	/*
		Can't use this code anymore
	*/

	/*
	var args = []; 

	for(i=7; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'rowsBetweenAandB',
            	Nome: Nome,
				DataA: DataA,
				DataB: DataB,
				Gruppo: Gruppo,
				Ordine: Ordine
           	},
		dataType: "xml",
		success: function(data)
				{ 
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
				
		error: function (xhr, textStatus, thrownError){ 
			
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		
		})
	//Php case rowsBetweenAandB
	*/
}


/*
######################################################
	Restituisce la LISTA di tutte le variabili dalla 
	DATA SPECIFICA (A) alla DATA SPECIFICA (B) 
	raggruppate per TIPO e in ordine cronologico 
	crescente/decrescente 
	
	Params: Nome - Nome Variabile (Stringa)
			DataA - Data Specifica Iniziale (Stringa nel formato YYYY-MM-DD)
			DataB - Data Specifica Finale (Stringa nel formato YYYY-MM-DD)
			Gruppo - Nome Gruppo (Stringa)
			onSuccess - Funzione in caso di successo
			onError - Funzione in caso di errore
			params - parametri aggiuntivi per le funzioni
					onSuccess e onError
			Ordine - Ordine Crescente ("ASC") o 
						Decrescente ("DESC")(Stringa)
######################################################
*/
function getRowsInTimeBetweenPerType(Tipo, DataA, DataB, Gruppo, Ordine, onSuccess, onError, params)
{
	var args = []; 

	for(i=7; i< arguments.length; i++)
	{	args.push(arguments[i]);}

	  $.ajax({
        url: Url,
        type: 'GET',
        data: {
				action: 'rowsInTimeBetweenAandBperType',
            	Tipo: Tipo,
				DataA: DataA,
				DataB: DataB,
				Gruppo: Gruppo,
				Ordine: Ordine
           	},
		dataType: "xml",
		success: function(data)
				{ 	
					onSuccess(data, args[0],args[1],args[2],args[3], args[4]);
				},
		
		error: function (xhr, textStatus, thrownError){
		
			onError(textStatus, args[0],args[1],args[2],args[3], args[4]);
		}
		})
		
	//Php case rowsInTimeBetweenAandBperType

}
