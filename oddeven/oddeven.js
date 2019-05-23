
function oddeven(e) {
  e.preventDefault();
  var num = document.getElementById('num').value;

  if (num % 2 == 0){
    document.getElementById('result').innerHTML= num +" is an even number.";
  }
  else {
    document.getElementById('result').innerHTML= num +" is an odd number.";
  }
}

document.querySelector('.btn').addEventListener('click', oddeven);
