function prime() {
  var limit=document.getElementById('limit').value;

  for (var i=2; i<=limit;i++) {

    var notPrime=false;

    for (var y=2; y<=i;y++) {

      if (i%y===0 && y!==i) {
        notPrime=true;
      }
    }
    if (notPrime===false) {
      document.getElementById('result').insertAdjacentHTML('beforeend', i+"    ")
    }
  }
}
prime();
