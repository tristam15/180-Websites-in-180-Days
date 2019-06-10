$(document).ready(function() {
  function randomColor() {
    var k = '#' + Math.random().toString(16).slice(2,8);
    console.log(k);
    var m = '#' + Math.random().toString(16);
    console.log(m);
    var g = '#' + Math.random();
    console.log(g);
    return k;
  };

  $("#button").on("click" , function () {
    $('body').css('background', randomColor());
  });
});
