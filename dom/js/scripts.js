
// alert au chargement de la page
window.onload = function (){

	alert("debut chargement page");

};


// alerte en cliquant sur une touche
window.onkeyup = function(event) {
 
      alert("This is a test.");

};

// change color body onclick
function changeColor()
{
	document.body.style.backgroundColor="red"
	document.getElementById("changeBackground").style.opacity = "0.5";
}

// retourner la couleur du body 
function retournWhite()
{
	document.body.style.backgroundColor="white"
	document.getElementById("changeBackground").style.opacity = "";
}

// change image on hover
function changeimage(imag1)
{
	document.image1.src = imag1
}

