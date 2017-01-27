



function civilite () {
  	
  	var civ = document.getElementById("selectCivilite");
  	var selectVal = civ.options[civ.selectedIndex].value;

    document.getElementsByClassName("mr")[0].style.display ="none";
    document.getElementsByClassName("mr")[1].style.display ="none";


 	  if (selectVal == "monsieur"){
    	document.getElementsByClassName("mr")[0].style.display ="block";
    }

    if(selectVal == "madame"){
    	document.getElementsByClassName("mr")[1].style.display ="block";
    }

}