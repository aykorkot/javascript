
var cpt=0;
var setTimes;
var posIncrement=0;
var w = window.innerWidth;
console.log(w)
//operation
function setTime(){


	// deplacement du div
	if(posIncrement>w){
		posIncrement = 0;
		document.getElementById("div1").style.left=posIncrement+"px";
	}else{
		posIncrement = posIncrement + 10;
		document.getElementById("div1").style.left=posIncrement+"px";
		console.log(posIncrement);
	}

	//changement de couleur du div
	if(cpt==0){
  		document.getElementById('div1').style.background="blue";
  		cpt=1;
	}else{
   		document.getElementById('div1').style.background="red";
   		cpt=0;
	}
	console.log(posIncrement);
}

// lancer l'operation
document.getElementById('lancer').onclick = function () {
	var lancer = document.getElementById('lancer').value;

	if(lancer=="Lancer"){
		document.getElementById('lancer').value = "Pause";
		document.getElementById('lancer').className="btn stop btn-warning";
		setTimes = setInterval(setTime,50);
	}
	// faire pause a l'operation
	else{
		document.getElementById('lancer').value = "Lancer";
		document.getElementById('lancer').className = "btn lancer btn-success";
		clearInterval(setTimes);
	}

}

// arreter et reinitialiser l'operation a zero
document.getElementById('stop').onclick = function () {
	posIncrement = 0;
	document.getElementById('div1').style.background="red";
	document.getElementById('div1').style.left=0;
	document.getElementById('lancer').value = "Lancer";
	document.getElementById('lancer').className = "btn lancer btn-success";
	clearInterval(setTimes);
}




