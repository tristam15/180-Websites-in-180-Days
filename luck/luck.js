  var lucky=["You will do a Fabulous Job","You are the best and will do your best","Others better fear because you are here","You are unstoppable, just do it.","You have done the work, now you need to wait for the result.","Keep calm, you will be the winner."];


  var kk= (lucky[Math.floor(Math.random()* 6)]);
  console.log(kk);

  function wishMeLuck() {
    document.getElementById('result').innerHTML=kk;
  }
