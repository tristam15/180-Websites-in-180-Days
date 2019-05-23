function drinkingAge() {

    var age=document.getElementById('age').value;

    if (age>=18) {
      document.getElementById('result').innerHTML= "<span>Sweet!</span> What Do You Want to Drink?";
    }
    else {
      document.getElementById('result').innerHTML= "No Drinking for you Young Man.";
    }
}
