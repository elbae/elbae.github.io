	var solid = true;
	var offset = parseFloat(1000.00);
	var offsetMetafora = parseFloat(1000.0);
	
	altezze=new Array(-3,5,2,3,1,2,-2,1,-1,2);
	
	
	//*****************************************************
	//funzioni dedicate alle metafore
	function visualizzaMetafora(nome)
	{
		var metafora = document.getElementById("dad_"+nome);
		var tmp=metafora.getAttribute("translation");
		var coords = tmp.split(" ");
		var newY=0;
		var oldY = parseFloat(coords[1]);
		if(oldY>offset)
			newY=oldY-offset;
		else
			newY=oldY;
		metafora.setAttribute("translation",coords[0]+" "+newY+" "+coords[2]);
	}
	
	function nascondiMetafora(nome)
	{
		var metafora = document.getElementById("dad_"+nome);
		var tmp=metafora.getAttribute("translation");
		var coords = tmp.split(" ");
		var newY=0;
		var oldY = parseFloat(coords[1]);
		if(oldY>offset)
			newY=oldY;
		else
			newY=oldY+offsetMetafora;
		metafora.setAttribute("translation",coords[0]+" "+newY+" "+coords[2]);
	}
	
	function initMetafora0(valore)
	{
		alert(testiVariabili[0][0]  );
	}
	
	function initMetafora1(valore)
	{
		
	}
	
	function initMetafora2(valore)
	{
		
	}
	
	function initMetafora3(valore)
	{
		
	}
	
	function initMetafora4(valore)
	{
		
	}
	
	function initMetafora5(valore)
	{
		
	}
	
	function initMetafora6(valore)
	{
		
	}
	
	function initMetafora7(valore)
	{
		if(valore==1)
		{
			visualizzaMetafora("bidone0");
			nascondiMetafora("bidone1");
			nascondiMetafora("bidone2");
		}
		else if(valore==2)
		{
			visualizzaMetafora("bidone0");
			visualizzaMetafora("bidone1");
			nascondiMetafora("bidone2");
		}
		else if(valore==3)
		{
			visualizzaMetafora("bidone0");
			visualizzaMetafora("bidone1");
			visualizzaMetafora("bidone2");
		}
		else
		{
			visualizzaMetafora("bidone0");
			visualizzaMetafora("bidone1");
			visualizzaMetafora("bidone2");
		}
	}
	
	function initMetafora8(valore)
	{
		if(valore==1)
		{
			visualizzaMetafora("strada0");
			nascondiMetafora("strada1");
			nascondiMetafora("strada2");
		}
		else if(valore==2)
		{
			visualizzaMetafora("strada0");
			visualizzaMetafora("strada1");
			nascondiMetafora("strada2");
		}
		else if(valore==3)
		{
			visualizzaMetafora("strada0");
			visualizzaMetafora("strada1");
			visualizzaMetafora("strada2");
		}
		else
		{
			visualizzaMetafora("strada0");
			visualizzaMetafora("strada1");
			visualizzaMetafora("strada2");
		}
	}
	
	function initMetafora9(valore)
	{
		
	}
	//*****************************************************
	
	function inizializza(altezze)
	{
		console.log(`[AB]: inizializza(${altezze}) in functions.js `);
		//console.log('inizializzo le altezze');
		var i;
		for(i=0;i<10;i++)
		{
			//console.log('palazzo'+i);
			var palazzo = document.getElementById("dad_palazzo"+i);
			var tmp=palazzo.getAttribute("translation");
			var coords = tmp.split(" ");
			var y = parseFloat(coords[1]);
			y+=altezze[i];
			//console.log('palazzo'+i+':'+y);
			palazzo.setAttribute("translation",coords[0]+" "+y+" "+coords[2]);
		}
		var valore=2;
		
		initMetafora0(valore);
		initMetafora1(valore);
		initMetafora2(valore);
		initMetafora3(valore);
		initMetafora4(valore);
		initMetafora5(valore);
		initMetafora6(valore);
		initMetafora7(valore);
		initMetafora8(valore);
		initMetafora9(valore);
	}
	
	
	
	function visualizza(index)
	{
		//inizializza(altezze);
		//alert('nascondo la parete '+index);
		//console.log('nascondo la parete '+index);
		
		var i;
		for(i=0;i<10;i++)
		{
			var parete = document.getElementById("dad_parete"+i);
			var tmp=parete.getAttribute("translation");
			var coords = tmp.split(" ");
			var newY=0;
			var oldY = parseFloat(coords[1]);
			//se la parete e' posizionata molto in alto allora e' nascosta
			if(oldY>offset)
				newY=oldY-offset;
			else
				newY=oldY;
			parete.setAttribute("translation",coords[0]+" "+newY+" "+coords[2]);
		}
		
		//alert('nascondo la parete '+index);
		//document.getElementById('camera'+index).setAttribute('set_bind','true');
		var parete = document.getElementById("dad_parete"+index);
		var output = '';
		//alert(parete.getAttribute("translation"));
		var tmp=parete.getAttribute("translation");
		var coords = tmp.split(" ");
		var newY=0;
		var oldY = parseFloat(coords[1]);
		newY=oldY+offset;
		parete.setAttribute("translation",coords[0]+" "+newY+" "+coords[2]);
	}
	
	function resetScena()
	{
		var i;
		document.getElementById('telecameraBase').setAttribute('set_bind','true');
		//document.getElementById('telecameraBase').setAttribute('position','134.492 22.2842 205.828');
		for(i=0;i<10;i++)
		{
			var parete = document.getElementById("dad_parete"+i);
			var output = '';
			var tmp=parete.getAttribute("translation");
			var coords = tmp.split(" ");
			var newY=0;
			var oldY = parseFloat(coords[1]);
			if(oldY>offset)
				newY=oldY-offset;
			else
				newY=oldY;
			parete.setAttribute("translation",coords[0]+" "+newY+" "+coords[2]);
			
			var palazzo = document.getElementById("dad_palazzo"+i);
			var tmp=palazzo.getAttribute("translation");
			var coords = tmp.split(" ");
			var y = parseFloat(coords[1]);
			y=3.5;
			//console.log('palazzo'+i+':'+y);
			palazzo.setAttribute("translation",coords[0]+" "+y+" "+coords[2]);
		}
	}