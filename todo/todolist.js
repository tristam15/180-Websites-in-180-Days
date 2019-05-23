var todo=document.querySelector('#todo');
var btn=document.querySelector('#btn');
var ul=document.querySelector('#ul');

console.log(btn,todo);

btn.addEventListener('click',toDo);

window.addEventListener('keydown',(e)=>{
  console.log(e);
  if(e.key=="Enter") {
    toDo();
  }
})

function toDo() {
if (todo.value== "") return;
else {
  let val = todo.value;
  let li= document.createElement('li');
  li.textContent=val;
  ul.appendChild(li);
  todo.value="";
  console.log('inside add toDo',li);
}
}
