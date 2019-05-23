$(document).ready(function() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var total = getScore();
    var message;

    if (total< 4) {
      message = "You're a Meh Hyderabadi";
    }
    else if (total<=6) {
      message = "You're a Hyderabadi";
    }
    else if (total>6) {
      message= "You're a true Hyderabadi";
    }

    var your_score= '<div id="score"> Your score is '+ total + '</div>';
    message= '<div id="message"> ' + message + '</div>';
    $('#container').html(your_score+message);
    function getScore() {
      var score=0;
      for(var i=1; i<4;i++) {
        var question= i;

        var answer = $('input[name=q' + i + ']:checked').val();

        if (answer) {
					score += parseInt(answer);
				}
			}
			return score;
    };
  	});
  });
