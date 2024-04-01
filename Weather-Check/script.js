const add = document.getElementById('btn1').value;
const first = document.getElementById('inp1').value;
const second = document.getElementById('inp2').value;

const container = document.querySelector('.container')

add.addEventListener('click',function(){
  console.log(first+second)
})