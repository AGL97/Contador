 
 let cont = 0;

 document.querySelector(".increment").onclick = function () {
    cont+=1;
    document.querySelector(".num").innerHTML = cont;    
 };

 document.querySelector(".decrement").onclick = function () {
    cont-=1;
    document.querySelector(".num").innerHTML = cont;    
 };
