
var secret1=document.querySelector('.secret1').innerHTML;

var secret1split= secret1.split("");

for (var i=0; i < secret1split.length;i++) {
  if(i%2==0) {
    secret1split[i]= '<span class="hidden">'+ secret1split[i] + '</span>';
  }
}
var secretjoined = secret1split.join('');

document.querySelector('.secret1').innerHTML = secretjoined;

//Second div

var secret2 = document.querySelector('.secret2').innerHTML;

var secret2split = secret2.split("");

for (var i=0 ; i < secret2split.length; i++) {
  if (i%2!=0) {
    secret2split[i]='<span class="hidden">'+ secret2split[i] + '</span>';
  }
}
var secret2joined = secret2split.join('');
document.querySelector('.secret2').innerHTML = secret2joined;
