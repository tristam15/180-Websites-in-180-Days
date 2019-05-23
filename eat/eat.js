var foods = [];

function add() {

  var kk=document.getElementById('food').value;
  foods.push(kk);

  document.getElementById('foodlist').innerHTML= foods[0]+"<br> <small>or</small> <br>"+foods[1]+"<br> <small>or</small> <br>"+foods[2];
  document.getElementById('food').value= '';
}

function eat() {

  var uk=foods[Math.floor(Math.random() * 3)];
  document.getElementById('result').innerHTML= "The Food You Should Eat Today is "+uk;
}
