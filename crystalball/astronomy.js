
function predict() {
  var k = document.getElementById('result');
  var prime;
  var num=document.getElementById('num').value;
  function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
  if (isPrime(num)) {
    k.insertAdjacentHTML('beforeend',"<p>Your life is full of mysteries, you have a very unique plan for life and you will go on to achieve great things.</p>")
  }
  else if(num%2===0) {
    k.insertAdjacentHTML('beforeend',"<p>You have an even taste on life. This week will bring you a simple life.</p>")
  }
  else if (num%3===0) {
    k.insertAdjacentHTML('beforeend',"<p>A beautiful way of life will come to you in this week.</p>")
  }
else if (num%4===0) {
  k.insertAdjacentHTML('beforeend',"<p>Things will multiply in your life, your wealth will quadruple this year.</p>")
}
else if (num%5===0) {
  k.insertAdjacentHTML('beforeend',"<p>A life full of magic awaits you. Keep opening new doors.</p>")
}
else {
  k.insertAdjacentHTML('beforeend',"<p>I have no prediction for you, you are very special and I don't have permission to view your future.</p>")
}
}
