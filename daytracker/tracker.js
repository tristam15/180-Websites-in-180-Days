$(document).ready(function() {
  var d = new Date();
  var   day = d.getDay();
  var   msg = ["Sunday! Go the Extra Mile",
              "Thank God it is Monday",
               "Another day to shine",
                "Boom, Wednesday!",
                 "Thirsty Thursday, yo",
                  "It is Friday, keep the hustle going",
                   "Partyyyyyyy"]
  $('#' + day).attr('id', 'today');
  $("#message").text(msg[day]);
});
