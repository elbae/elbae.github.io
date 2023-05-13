// VARIABILI GLOBALI
	
	var offset = parseFloat(1000.00);
	
	// nuove
	
	var val1 = new Array(0,0,0,0,0,0,0,0,0,0);
	var val2 = new Array(0,0,0,0,0,0,0,0,0,0);
	var valoriVariabili = new Array(val1,val2);

	var tV1 = new Array("","","","","","","","","","");
	var tV2 = new Array("","","","","","","","","","");
	var testiVariabili=new Array(tV1, tV2 );

	// anno metafora rappresentato attualmente, 0 -> 2011 , 1 -> 2012
	var annoMetafore = new Array(1,1,1,1,1,1,1,1,1,1);
	
	// anno palazzi
	var annoScena=1;
	

	var initialMetScale= new Array("","","","","","","","","","");
	var initialMetTrans= new Array("","","","","","","","","","");
	
	var bidoni= new Array("","","");

	var altezze = new Array(1,1,1,1,1,1,1,1,1,1);
	
	var intro_str="Benvenuto nella Venezia della Sostenibilita' !\nClicca sui palazzi o sull'icona del tema scelto per scoprire la metafora posizionata all'interno del palazzo\nScegli con lo slider l'anno di rilevazione dei dati su cui si basa la scena";

	var help="Naviga la scena selezionando la telecamere qui sotto oppure clicca direttamente su un palazzo per avvicinarti e scoprire la metafora contenuta al suo interno\nClicca sulla metafora per visualizzare un layer contente la descrizione della metafora utilizzata e il suo valore\nScegli con lo slider in basso a destra della scena l'anno di rilevazione dei valori su cui si basa la scena";
	
	var info_buttons="<p align='center'><input type='button' value='Nascondi' onclick='hideit();'/><br/><input type='button' value='Cambia Anno' onclick='cambiaAnno("
	var info_buttonsP2 = ");'/></p>";

	
	/* FINE VARIABILI GLOBALI */
	 
	
			
	/* METAFORE */
	function cambiaAnnoScenaParam( anno ){
	
		hideit();
		
		for(i=0; i<10 ;i++){
			altezze[i]= - altezze[i];
		}
		
		inizializza(altezze); // riporto a zero palazzi
		
		annoScena=anno-2011;
		
		for(i=0; i<10 ;i++){ // porto tutte le metafore al nuovo anno della scena
			annoMetafore[i]= annoScena;
		}
		
		altezze=altezzePalazzi(annoScena);
		inizializza(altezze); // metto i palazzi alla nuova altezza
		
		//inizializza();
	}
	
	function cambiaAnnoScena(){
	
		hideit();
		
		for(i=0; i<10 ;i++){
			altezze[i]= - altezze[i];
		}
		
		inizializza(altezze); // riporto a zero palazzi
		
		if (annoScena == 1 ){
			annoScena=0;
		}
		else {
			annoScena=1;
		}
		
		for(i=0; i<10 ;i++){ // porto tutte le metafore al nuovo anno della scena
			annoMetafore[i]= annoScena;
		}
		
		altezze=altezzePalazzi(annoScena);
		inizializza(altezze); // metto i palazzi alla nuova altezza
		
		//inizializza();
	}
	
	function cambiaAnno(index){ // tasto cambia anno del popup
		
		if (annoMetafore[index]==1){
			annoMetafore[index]=0;
		}
		else
		{
			annoMetafore[index]=1;
		}
		
		hideit(); // altrimenti mi mostra il valore vecchio
		
		aggiornaMetafore(index);
				
		//alert("cambiaAnno(); " + index );
	}
	
	function aggiornaMetafore( index ){
			
		switch( index ) {
  
		  case 0:
			initMetafora0();
		  break;
		  
		  case 1:
			initMetafora1();
		  break;
		  
		  case 2:
			initMetafora2();
		  break;
		  
		  case 3:
			initMetafora3();
		  break;
		  
		  case 4:
			initMetafora4();
		  break;
		  
		  case 5:
			initMetafora5();
		  break;
		  
		  case 6:
			initMetafora6();
		  break;
		  
		  case 7:
			initMetafora7();
		  break;
		  
		  case 8:
			initMetafora8();
		  break;
		  
		  case 9:
			initMetafora9();
		  break;
		  
		  default: ;
		  
		

		}
		
		//alert("aggiornaMet di : "  + index);
	}

	function initMetafora0()
	{	// libri
		var valore = valoriVariabili[annoMetafore[0]][0];
				
		var transfLibri = document.getElementById("dad_libri");
		var img = transfLibri.getElementsByTagName("ImageTexture"); 
		
		var texture = img[0].getAttribute('url');
		texture=texture.replace( /(\d+)/ ,valore); 
		//texture='textures/libri'+ valore +'.png'
				
		img[0].setAttribute("url", texture );
	}
	
	function initMetafora1(){
		// checkbox
		var valore = valoriVariabili[annoMetafore[1]][1];
		
		var shapeSpunte = document.getElementById("spunte");
		var img = shapeSpunte.getElementsByTagName("ImageTexture"); 
		
		var texture = img[0].getAttribute('url');
		
		texture=texture.replace( /(\d+)/ ,valore); 
		/* servono texture da 0 a 10 */
		
			
		img[0].setAttribute("url", texture );	
		
		/*
			<Material DEF='Shiny_Green'
			containerField='material'
			ambientIntensity='.2'
			shininess='.1'
			diffuseColor='0 1 0'
			specularColor='0 1 0'/>
		*/
		
		/*
		var val = valoriVariabili[annoMetafore[1]][1];
			
		val = 10 - val;
		
		for(i=0; i<10 ;i++){
			
			var spuntaShape = document.getElementById("spunta" + i);
			var mat = spuntaShape.getElementsByTagName("Material");
			
			var appar = spuntaShape.getElementsByTagName("Appearance");
			
			var matParent = mat[0].parentNode;
			
		
			var newNode=document.createElement("Material");
			newNode.setAttribute("containerField", ('material'));
			newNode.setAttribute("ambientIntensity", ('.2'));
			newNode.setAttribute("shininess", ('.1'));
			
			//newNode.setAttribute("diffuseColor", ('1 0 0'));
			//newNode.setAttribute("specularColor", ('1 0 0'));
			
			
			if(i>=val){
				// modifica newNode per renderlo verde
				newNode.setAttribute("diffuseColor", ('0 1 0'));
				newNode.setAttribute("specularColor", ('0 1 0'));
								
			}
			else {
				// fallo rosso
				newNode.setAttribute("diffuseColor", ('1 0 0'));
				newNode.setAttribute("specularColor", ('1 0 0'));
								
			}
			
			
			// sostituisci il vecchio material con newnode
			
			matParent.replaceChild(newNode,mat[0]); 
			
			
			
			//appar.replaceChild(newNode,mat); 
			
			
			mat[0].parentNode.removeChild(mat[0]);
			
			//matParent
			appar[0].appendChild(newNode);
			
			
			//matParent.removeChild(mat);
			//matParent.appendChild(newNode);
			
			//alert('done');
			
			
		}
		*/
	}
		
	
	function initMetafora2()
	{
		var valore = valoriVariabili[annoMetafore[2]][2];
		
		var smileShape = document.getElementById("smile");
		var img = smileShape.getElementsByTagName("ImageTexture"); 
		
		var texture = img[0].getAttribute('url');
		
		//alert(texture);
		
		if (valore<3){ //0
		
			texture=texture.replace("1","0"); 
			texture=texture.replace("2","0");
		}
		else if (valore<6){ // 1 
		
			texture=texture.replace("0","1"); 
			texture=texture.replace("2","1"); 
		}
		
		else{ // 2
			
			texture=texture.replace("0","2"); 
			texture=texture.replace("1","2"); 
		}
		
		img[0].setAttribute("url", texture );
		
		//alert("val:" + valore + " \n texture: " +texture);
	}
	
	function initMetafora3()
	{
		// pacchi
			
		var valore = valoriVariabili[annoMetafore[3]][3];
		
		var paccoRosso="textures/pacco_rosso.png";
		var paccoVerde="textures/pacco_verde.png";
		
		var paccoTrans = document.getElementById('dad_pacco3');
		var img = paccoTrans.getElementsByTagName("ImageTexture"); 
		
		for(i=0; i<10 ;i++){
		
			paccoTrans = document.getElementById("dad_pacco"+i);
			img = paccoTrans.getElementsByTagName("ImageTexture"); 
				
			if( i < valore ){
				img[0].setAttribute("url", paccoVerde );
			}
			else{
				img[0].setAttribute("url", paccoRosso );
			}
	
		}
		
	}
	
	function initMetafora4()
	{	// monitor energia
		var valore = valoriVariabili[annoMetafore[4]][4];
		//valore=8; // test 8 e 4	
		
		// lancetta
				
		var shapeContatore = document.getElementById("sfondo_contatore");
		var img = shapeContatore.getElementsByTagName("ImageTexture"); 
		
		var texture = img[0].getAttribute('url');
		
		texture=texture.replace( /(\d+)/ ,valore); 
		//texture='textures/libri'+ valore +'.png'
			
		if (valore==0){
			//sfondoBilancia1
			texture=texture.replace( /(\d+)/ ,1); 
		}
		else if (valore == 10){
			//sfondoBilancia9
			texture=texture.replace( /(\d+)/ ,9); 
		}
		
		img[0].setAttribute("url", texture );		
		
		
		// monitor
		// id='schermo2'  0 - 4
		var lumSchermo=document.getElementById("luminosita_schermo"); // id='luminosita_schermo'
		lumSchermo.setAttribute('transparency', ''+(valore/10/2)); // [ 0 - 0.5 ]
		
	}
	
	function initMetafora5()
	{ // boccione
		var valore = valoriVariabili[annoMetafore[5]][5];
		
		//valore = 10 - valore;
			
		var transf_livello_acqua = document.getElementById("dad_liv_acqua");
		
		var scale_value = getValues( initialMetScale[5] );
				
		//scale_value[0]= scale_value[0] * (valore/10 );
		scale_value[1]= scale_value[1] * (valore/10 );
		//scale_value[2]= scale_value[2] * (valore/10 );
				
		var str= scale_value[0]+"  "+ scale_value[1] +" "+scale_value[2];
		transf_livello_acqua.setAttribute("scale", str );
		
		var translation_value = getValues( initialMetTrans[5] );
		translation_value[1]= translation_value[1] * (valore/10 );
		
		str=translation_value[0]+"  "+ translation_value[1] +" "+translation_value[2];
		transf_livello_acqua.setAttribute("translation", str );
		
		//alert("|"+str+"|");
	}
	
	function initMetafora6()
	{ // carta
	
		var valore = valoriVariabili[annoMetafore[6]][6];
			
		// lancetta
				
		var shapeBilancia = document.getElementById("sfondo_bilancia");
		var img = shapeBilancia.getElementsByTagName("ImageTexture"); 
		
		var texture = img[0].getAttribute('url');
		
		texture=texture.replace( /(\d+)/ ,valore); 
		//texture='textures/libri'+ valore +'.png'
			
		if (valore==0){
			//sfondoBilancia1
			texture=texture.replace( /(\d+)/ ,1); 
		}
		else if (valore == 10){
			//sfondoBilancia9
			texture=texture.replace( /(\d+)/ ,9); 
		}
		
		img[0].setAttribute("url", texture );		
		
		// uomo e liv carta
		
		var shapeOmino = document.getElementById("omino"); 
		var img = shapeOmino.getElementsByTagName("ImageTexture"); 
	
		var bene='textures/bene.png';
		var male='textures/male.png';
		var normale='textures/normale.png';
		
		if (valore<4){ //0
			// uomo
			img[0].setAttribute("url", male );
			// livello carta
			
			visualizzaMetafora("fogli2");
			visualizzaMetafora("fogli1");
			visualizzaMetafora("fogli0");
			
		}
		else if (valore<7){ // 1 
			img[0].setAttribute("url", normale);
			// livello carta
			
			nascondiMetafora("fogli2");	
			visualizzaMetafora("fogli1");
			visualizzaMetafora("fogli0");
			
		}
		
		else{ // 2
			img[0].setAttribute("url", bene );
			// livello carta
			
			nascondiMetafora("fogli2");
			nascondiMetafora("fogli1");
			visualizzaMetafora("fogli0");
			
			
		}
		
		nascondiMetafora("fogli2");
	}
	
	function initMetafora7()
	{	
	
		var valore = valoriVariabili[annoMetafore[7]][7]; 
		
		var transf_bidone = document.getElementById("dad_bidone0");
		
		//var old_scale=transf_bidone.getAttribute('scale');
	
		
		//old_scale = initialMetScale[7];
		//alert("old_scale |"+old_scale+"|");
		
		
		//var scale_value = getValues( old_scale )  ;
				
		var scale_value = getValues( initialMetScale[7] )  ;
		
		scale_value[0]= scale_value[0] * (valore/10 );
		scale_value[1]= scale_value[1] * (valore/10 );
		scale_value[2]= scale_value[2] * (valore/10 );
		
		var str= scale_value[0]+"  "+ scale_value[1] +" "+scale_value[2];
		
		transf_bidone.setAttribute("scale", str );
		
		var mat = transf_bidone.getElementsByTagName("Material");
		mat[0].setAttribute("diffuseColor", ( getColor(valore) ));
		
		
		transf_bidone = document.getElementById("dad_bidone1");
		
		scale_value = getValues( initialMetScale[1] )  ;
		
		scale_value[0]= scale_value[0] * (valore/10 );
		scale_value[1]= scale_value[1] * (valore/10 );
		scale_value[2]= scale_value[2] * (valore/10 );
		
		str= scale_value[0]+"  "+ scale_value[1] +" "+scale_value[2];
		transf_bidone.setAttribute("scale", str );
		
		mat = transf_bidone.getElementsByTagName("Material");
		mat[0].setAttribute("diffuseColor", ( getColor(valore) ));
		
		
		// test aggiunta e eliminazione nodi
		
		/* eliminazione
		var bidEliminare = document.getElementById("dad_bidone1");
		var parentBid= bidEliminare.parentNode;
		parentBid.removeChild(bidEliminare);
		
		
		
		// aggiungo nuovo bidone del secco
		
		var newNode=transf_bidone.cloneNode(true);
					
		newNode.setAttribute("scale", initialMetScale[1] );
		var nnTrans = newNode.getAttribute('translation');
		
		var nnTransValues = getValues( nnTrans );
		
		newNode.setAttribute('translation', (nnTransValues[0] + 3 ) + ' ' + (nnTransValues[1] +3) + ' ' + nnTransValues[2] );
		
		mat = newNode.getElementsByTagName("Material");
		mat[0].setAttribute("diffuseColor", ( '0 0 1') );
			
		parentBid.appendChild(newNode);
		
		*/
		
		
		//bidEliminare.parentNode.removeChild(bidEliminare); // funziona
		
		//bidEliminare.removeNode(true); 
		//var parentBid= bidEliminare.parent;
		//parentBid.removeChild(bidEliminare);
		
		
		//alert("|"+str+"|");
			
	}
	
	function initMetafora8()
	{
		//var val = valoriVariabili[annoMetafore[8]][8];
		
		var valore = valoriVariabili[annoMetafore[8]][8];
		//var valore = Math.round( valoriVariabili[annoMetafore[8]][8] / 3  ); 
			
		if(valore<3)
		{
			visualizzaMetafora("strada0");
			nascondiMetafora("strada1");
			nascondiMetafora("strada2");
		}
		else if(valore<6)
		{
			visualizzaMetafora("strada0");
			visualizzaMetafora("strada1");
			nascondiMetafora("strada2");
		}
		
		else
		{
			visualizzaMetafora("strada0");
			visualizzaMetafora("strada1");
			visualizzaMetafora("strada2");
		}
		
		// colore strisce
		/*
		var material17 = document.getElementById('material17');
			
		material17.setAttribute("diffuseColor", ('1 0 0'));
		material17.setAttribute("specularColor", ('1 0 0'));
		*/
				
		var transf_strada = document.getElementById("dad_metafora8");
		mat = transf_strada.getElementsByTagName("Material");
		mat[0].setAttribute("diffuseColor", ( getColor(valore) ));
		mat[0].setAttribute("specularColor", (getColor(valore)));
				
	}
	
	function initMetafora9()
	{
		var valore = valoriVariabili[annoMetafore[9]][9];
					
		for(k=0; k<4 ;k++){
						
			if(k==3){
				var transfSacco = document.getElementById("euro");
			}
			else{
			
				var transfSacco = document.getElementById("dad_sacco" + k);
				// scalo i sacchi

				var scale_value = getValues( initialMetScale[9] );
						
				scale_value[0]= scale_value[0] * (valore/10 *2); 
				scale_value[1]= scale_value[1] * (valore/10 *2);
				scale_value[2]= scale_value[2] * (valore/10 *2);
						
				var str= scale_value[0]+"  "+ scale_value[1] +" "+scale_value[2];
				transfSacco.setAttribute("scale", str );
								
				//var translation_value = getValues( initialMetTrans[9] );
				var translation_value = getValues( bidoni[k] );
				
				//translation_value[0]= translation_value[0] * (valore/10 );
				
				translation_value[1] += valore-3.3;
				//translation_value[1] -= 0.5;
				
				//translation_value[2]= translation_value[2] * (valore/10 );
				
				
				str=translation_value[0]+"  "+ translation_value[1] +" "+translation_value[2];
				transfSacco.setAttribute("translation", str ); // VALORI NEGATIVI !!
				
				//alert('scala e trasla sacco '+k);
		
				
			}
			
			var mat = transfSacco.getElementsByTagName("Material");
			
			var matParent = mat[0].parentNode;
			
			var newNode=document.createElement("Material");
			newNode.setAttribute("containerField", ('material'));
			newNode.setAttribute("ambientIntensity", ('.2'));
			newNode.setAttribute("shininess", ('.1'));
	
		
			if (valore<2){ //0
				newNode.setAttribute("diffuseColor", ('1 0 0'));
				newNode.setAttribute("specularColor", ('1 0 0'));
			}
			else if (valore<3){ // 1 
				newNode.setAttribute("diffuseColor", ('1 1 0'));
				newNode.setAttribute("specularColor", ('1 1 0'));
			}
		
			else{ // 2
				newNode.setAttribute("diffuseColor", ('0 1 0'));
				newNode.setAttribute("specularColor", ('0 1 0'));
			}
			
			

			// sostituisci il vecchio material con newnode
			matParent.replaceChild(newNode,mat[0]); 
			//alert('replace material '+k);
		}	
			//alert('done');
			
		// scala sacchi
	
		
	}
	
	function testAlert(){
		
		var num= parseFloat('.35')  ;
		
		alert('Hai cliccato su test alert\nNum= '+num);
	}
		
	// POPUP METAFORE
	
	function hideit()
	{
	var infowindow = document.getElementById("info");
	infowindow.style.display = "none";
	}
	
	function overlayLocation(event, index)
	{
	//Grad(); // aggiorna il valore !! attualmente la stringa testo
	
		//event.hitPnt
	xposition = event.layerX;
	yposition = event.layerY;
		
	var infowindow = document.getElementById("info");
	infowindow.style.display = "block";
	infowindow.style.left = xposition +'px';
	infowindow.style.top = (yposition -30 )+'px';
	
	//document.getElementById("info").innerHTML= testiVariabili[annoMetafore][index] + "<button>Nascondi</button>";
		
	//document.getElementById("info").innerHTML= testiVariabili[annoMetafore[index]][index] + info_buttons + index + info_buttonsP2;//"<button>Nascondi</button>";
	document.getElementById("info").innerHTML= testiVariabili[annoMetafore[index]][index] + "<p align='center'><input type='button' value='Nascondi' onclick='hideit();'/></p>";
	
	//alert('Hai cliccato in ' + xposition + ' ' + yposition);
        
        //return false;
	}
	
	// MODIFICA METAFORE
	
		
	function salvaScaleMet(){
		
		var transf_livello_acqua = document.getElementById("dad_liv_acqua");
		initialMetScale[5]= transf_livello_acqua.getAttribute('scale');
		initialMetTrans[5]= transf_livello_acqua.getAttribute('translation');
		
		var transf_bidone = document.getElementById("dad_bidone0");
		initialMetScale[7]= transf_bidone.getAttribute('scale');
		
		transf_bidone = document.getElementById("dad_bidone1");
		initialMetScale[1]= transf_bidone.getAttribute('scale'); // uso il posto dei checkbox
		
		var transf_sacco= document.getElementById("dad_sacco0");
		initialMetScale[9]= transf_sacco.getAttribute('scale');
		//initialMetTrans[9]= transf_sacco.getAttribute('translation');
		
		for(i=0;i<3;i++){
			transf_sacco= document.getElementById("dad_sacco"+i);
			
			//initialMetTrans[9]= transf_sacco.getAttribute('translation');
			
			bidoni[i]= transf_sacco.getAttribute('translation');
			
		}
		
		
			
	}
	
	 // UTILS
	 
	 function inizializzaTutto(){
		salvaScaleMet();
		
		aggiustaValori();
		altezze=altezzePalazzi(annoScena);
		inizializza(altezze);
	}
	
	function showHelp(){
		
		alert(help);	
	}
	
	function intro()
	{
	
	alert(intro_str);
	inizializzaTutto();
	
	}
	
	function getValues( str ){
		//var str="  1.23 .456 78.9 ";
		//var str='1.12827 1 1.15917 ';
							
		var res = new Array(0.0, 0.0, 0.0, 0.0);
		
		//funziona anche con spazii in piu' avanti e dietro
		str=str+" ";
		var j=0;
		var token="";
		for (i=0; i<str.length ; i++) {			
			if ( str.charAt(i) == ' ') {				
				if ( !( token === "") ){				
					res[j]= parseFloat( token) ;
					token="";
					j++;
				}
			} 
			else {
				token += str.charAt(i);
			}
		} 
				
		
		/*
		var strings= str.split(" ");
		
		for (i=0; i<strings.length ; i++) {
			res[i] = parseFloat( strings[i] ) ;
		}
		*/
				
		//alert("Primo: "+ res[0] + "\nSecondo: "+ res[1] + "\nTerzo: "+ res[2] +"\nPrimo + Secondo= "+ ( res[0] + res[1] ) );
		
		return res;
	}
	
	function getColor( val ){
		
		if(val < 3){
			return "1 0 0";
		}
		
		if (val < 6){
			return "1 1 0";
		}
		
		return "0 1 0";
	}
	
	// RICEZIONE DATI DB
	
	/* PARTE BUONA */

function MostraErrore(textStatus, parametro1)
{	
	// Gestisci l'errore
    	alert("Errore di tipo "+textStatus);
		alert("Consolati con il parametro " + parametro1);
}


function getAllVariables(){

	getRowsInTimeBetween(
		"CFU dedicati al sostenibile", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal,
		MostraErrore,
		0 ); // indice nell'array
		
	getRowsInTimeBetween(
		"Partecipazione a eventi sostenibili", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal,
		MostraErrore, 
		1 ); //Parametro Aggiuntivo
		
	getRowsInTimeBetween(
		"Gradimento del Personale", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal,
		MostraErrore, 
		2);	//Parametro Aggiuntivo
		
	getRowsInTimeBetween(
		"Media tra Cancelleria, Energia Verde e Prodotti Equosolidali", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal,
		MostraErrore, 
		3);	//Parametro Aggiuntivo
		
	getRowsInTimeBetween(
		"Cons. Energetico per Utente", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal, 
		MostraErrore, 
		4);	//Parametro Aggiuntivo	
		
	getRowsInTimeBetween(
		"Consumo Idrico", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal,
		MostraErrore, 
		5);	//Parametro Aggiuntivo
		
	getRowsInTimeBetween(
		"Kg Carta per Utente", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal,
		MostraErrore, 
		6);	//Parametro Aggiuntivo
		
	getRowsInTimeBetween(
		"Raccolta differenziata", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal,
		MostraErrore, 
		7);	//Parametro Aggiuntivo	
	
	getRowsInTimeBetween(
		"Utilizzo dei mezzi pubblici", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal,
		MostraErrore, 
		8);	//Parametro Aggiuntivo
	
	getRowsInTimeBetween(
		"Fondi Sostenibili", 
		"2010-01-01", 
		"2013-12-31", 
		"Bellialbuio", 
		"ASC", 
		salvaVal,
		MostraErrore, 
		9);	//Parametro Aggiuntivo
			
	//alert("fatto\n" + testiVariabili[0][0]);
	
}


function salvaVal( xml, index ){

	var anno=0;

	$(xml).find('Riga').each(
	
		function(){
	
		var str="";
			
		var Nome = $(this).find('Nome').text();
		var Valore = $(this).find('Valore').text();
		var Data = $(this).find('Data').text();
		var Unita = $(this).find('Unita').text();
		
		//str="<strong>Variabile:</strong> "+ Nome + "<br/><strong>Valore:</strong> " + Valore + "<br/><strong>Unita:</strong> " + Unita + "<br/><strong>Data:</strong> "+ Data;
		str="<strong>Variabile:</strong> "+ Nome + "<br/><strong>Valore:</strong> " + Valore + " " + Unita + "<br/><strong>Data:</strong> "+ Data;
		//str="<strong>Variabile:</strong> <span class='blu'>"+ Nome + "</span><br/><strong>Valore:</strong> <span class='blu'>" + Valore + " " + Unita + "</span><br/><strong>Data:</strong> <span class='blu'>"+ Data+"</span>";
		valoriVariabili[anno][index] = parseInt(Valore,10);
		testiVariabili[anno][index] = str;
		anno++;
		
		//alert( str + "\n anno:" + (anno -1 ) + "\n index: " +index);			
		}
	)
		
	//alert( str );	
}

function aggiustaValori(){
	var str=""; // TEST
	
	for (anno=0; anno< 2 ; anno++) {
	
		for (i=0; i< 10 ; i++) {
			
			if( (i>3) && (i<7) ){
				
				if(i==4) {
					valoriVariabili[anno][i] = 10 - parseInt( valoriVariabili[anno][i] / 60 ,10); //  0 - 600 energia
				}
				
				if(i==5) {
					valoriVariabili[anno][i] = 10 - valoriVariabili[anno][i] * 3;  // 0 - 3 acqua
				}
				
				if(i==6) {
					valoriVariabili[anno][i] = 10 - valoriVariabili[anno][i] * 2; // 0 - 5 kg carta
				}
				
			}
			else{		
				valoriVariabili[anno][i] = parseInt( (valoriVariabili[anno][i] / 10) ,10);
			}
			
		
			str= str +"\n" +valoriVariabili[anno][i];	// TEST
		}

		str += "\n\n";	// TEST
		
	}	
	
	//alert(str);	// TEST

}


function altezzePalazzi(annoS){
	// valoriVariabili di 1 perche' i palazzi sono sempre alti come l'ultimo anno
	var res = new Array(1,1,1,1,1,1,1,1,1,1);
	
	for (i=0; i< 10 ; i++) {
		//res[i] = valoriVariabili[1][i] - 5 ;
		res[i] = valoriVariabili[annoS][i] - 5 ;
		
		// per visualizzare anche i palazzi nei 2 anni diversi mettere tutti gli annometaofra a 1 o 0 e poi
		//res[i] = valoriVariabili[ annoMetafore[0]][i] - 5 ; 
		// no!! manca decrementare del veccio valore
	}
	
	return res;
}

// TEST

function visTesti() {
	
	var str="Testi";
	//str = str + " " + testiVariabili[0][0] ;
	
	for (i=0; i< 10 ; i++) {
		str= str +"\n"+testiVariabili[0][i];
		}

	str += "\n\nSecondo Anno: \n";
	
	for (i=0; i< 10 ; i++) {
		str= str +"\n" + testiVariabili[1][i];
		}
		
	//str= testiVariabili[0][0] + testiVariabili[0][1] + testiVariabili[1][0] + testiVariabili[1][1];
	
	alert(str);	
		
} 


function visValori() {
	var str="Valori";
	
	for (i=0; i< 10 ; i++) {
		str= str +"\n" +valoriVariabili[0][i];
		}

			str += "\n\nSecondo Anno: \n";
	
	for (i=0; i< 10 ; i++) {
		str= str +"\n" +valoriVariabili[1][i];
		}
		
	alert(str);	
	//alert(" val: " + valoriVariabili[0][0] + " " + valoriVariabili[0][1] + " " + valoriVariabili[1][0] + " " + valoriVariabili[1][1] + " ");
}

function visAltezze() {
	var str="Altezze";
	
	for (i=0; i< 10 ; i++) {
		str= str +"\n" +altezze[i];
		}
		
	alert(str);	
	//alert(" val: " + valoriVariabili[0][0] + " " + valoriVariabili[0][1] + " " + valoriVariabili[1][0] + " " + valoriVariabili[1][1] + " ");
}

	
	/* INIZIALIZZAZIONI VANNO FATTE DOPO LA SCENA X3D */
	
	/*
	getAllVariables();
	
	intro();
	*/
	