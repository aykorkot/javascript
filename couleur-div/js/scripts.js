
var cpt=0;
var set;


//operation
/*function setTime(){
	if(cpt==0){
		document.getElementById('div1').style.display="block";
  		document.getElementById('div2').style.display="none";
  		cpt=1;
	}else{
		document.getElementById('div2').style.display="block";
   		document.getElementById('div1').style.display="none";
   		cpt=0;
	}
}*/

//lancer l'operation
/*document.getElementById('lancer').onclick = function () {
	set = setInterval(setTime,1000);
}*/

//stoper l'operation
/*document.getElementById('stop').onclick = function () {
	clearInterval(set);
}
*/

var posIncrement = 0;
function setTime(){
	posIncrement = posIncrement + 10;
	document.getElementById("div1").style.left=posIncrement+"px";
}

document.getElementById('lancer').onclick = function () {
	set = setInterval(setTime,1000);
}

document.getElementById('stop').onclick = function () {
	clearInterval(set);
}

