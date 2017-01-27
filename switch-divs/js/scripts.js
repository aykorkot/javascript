



function switchDiv () {


   var d1 = document.getElementById("div1");

   var d2 = document.getElementById("div2");

   var d3 ;

   d3 = d1.innerHTML;
   console.log(d3)

   d1.innerHTML = d2.innerHTML;
   console.log(d1.innerHTML);

   d2.innerHTML = d3;
   console.log(d2.innerHTML)


  

   
}