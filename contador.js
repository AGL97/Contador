 
 let cont = 0;

 document.querySelector(".increment").addEventListener("click",function () {
    cont+=1;
    document.querySelector(".num").innerHTML = cont;    
 });

 document.querySelector(".decrement").addEventListener("click",function () {
   cont-=1;
   document.querySelector(".num").innerHTML = cont;    
});
