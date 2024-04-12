var list = document.querySelectorAll("li");
var i;

for(i=0;i<list.length;i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className='close';
    span.appendChild(txt);
    list[i].appendChild(span);
}
 