function validateForm(){
    var uname =document.forms["myForm"]["uname"].value;
    if(uname.length>6){
        alert("User needs to be 6 characters long");
        return false;
    }
}

let oneFunction = arg => {
return new Promise(resolve=>{

    setTimeout(()=>{
        var returnVal = arg;
        console.log("one function produces :" , returnVal);
        resolve(returnVal);
    },2000)  
})
}

let twoFunction = arg =>{
    return new Promise(resolve=>{
       
        setTimeout(()=>{
          var  returnVal=arg+"two";
          console.log("two function produces : ",returnVal);
        },1000)
    })
}

oneFunction("hello").then(()=>{
    twoFunction("world");
});
