let btn = document.getElementsByClassName("accordion");
let info = document.getElementsByClassName("panel");


for(let i=0;i<btn.length;i++){
btn[i].addEventListener('click',()=>
    {{
   if( info[i].style.display=="none")
    {
    info[i].style.display="block";
   }
   else{
    info[i].style.display="none";
   }
 
    }})
}