function validateForm(){
    var uname =document.forms["myForm"]["uname"].value;
    if(uname.length>6){
        alert("User needs to be 6 characters long");
        return false;
    }
}
