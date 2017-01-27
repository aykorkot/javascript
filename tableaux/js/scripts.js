var index = 0;
var keyIndex;

document.getElementById('ajouter').onclick = function () {

	var nom = document.getElementById('nom').value;
	var prenom = document.getElementById('prenom').value;

	if(nom == "" || prenom == "") {
		alert("Les champs sont obligatoires.");
		return false;
	}

	var row = "";

	row += "<tr id='montr_" + index + "'>"
		row += "<td>" + nom + "</td>"
		row += "<td>" + prenom + "</td>";
		row += "<td>";
			row += "<button type='button' class='btn btn-danger btn-md' style='width:20%' onclick='supprimer(" + index + ");'>";
				row += "Supprimer";
			row += "</button>";
			row += "<button type='button' class='btn btn-warning btn-md' style='width:20%;margin-left:10px;' onclick='modifier(" + index + ");'>";
				row += "Modifier";
			row += "</button>";
		row += "</td>";
	row += "</tr>";


	index++;
 
							 
	var table = document.getElementById('table');
	var tbody = table.getElementsByTagName('tbody');

	tbody[0].innerHTML = tbody[0].innerHTML + row; 

	clearInputs();

}


function supprimer(param_index) {
	var monTr = document.getElementById("montr_" + param_index); 
	monTr.remove(); 
}	

function modifier(param_index) {

	keyIndex = param_index;

	document.getElementById("btns").innerHTML = "<button type='button' id='update' class='btn btn-danger btn-md' style='width:20%' onclick='update();'>Update</buttons"; 

	var monTr = document.getElementById("montr_" + keyIndex);

	var tdNom = monTr.getElementsByTagName("td")[0].innerHTML;
	var tdPrenom = monTr.getElementsByTagName("td")[1].innerHTML;
	

	document.getElementById("ajouter").style.display="none";
	
	document.getElementById("nom").value = tdNom;
	document.getElementById("prenom").value = tdPrenom


}	


function update() {

	document.getElementById("ajouter").style.display="block";
	document.getElementById("update").style.display="none";

	var monTr = document.getElementById("montr_" + keyIndex);

	var nom = document.getElementById('nom').value;
	var prenom = document.getElementById('prenom').value;

	
	monTr.getElementsByTagName("td")[0].innerHTML = nom;
	monTr.getElementsByTagName("td")[1].innerHTML = prenom;

	clearInputs();

}

function clearInputs(){
	var nom = document.getElementById('nom');
	var prenom = document.getElementById('prenom');
	nom.value = "";
	prenom.value = "";	
}