
var cpt=0;
var set;

//operation
function setTime(){
	if(cpt==0){
		document.getElementById('div1').style.display="block";
  		document.getElementById('div2').style.display="none";
  		cpt=1;
	}else{
		document.getElementById('div2').style.display="block";
   		document.getElementById('div1').style.display="none";
   		cpt=0;
	}
}

//lancer l'operation
document.getElementById('lancer').onclick = function () {
	set = setInterval(setTime,1000);
}

//stoper l'operation
document.getElementById('stop').onclick = function () {
	clearInterval(set);
}