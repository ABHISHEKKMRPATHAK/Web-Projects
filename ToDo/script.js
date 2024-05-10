let spanOne = document.getElementsByClassName("add-btn");

function newElement() {
console.log([...spanOne]);
spanOne[0].createElement("p");
}