// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  var interests = [];
  var programming = [];
  var comics = [];

  $.ajax({
    url: "http://www.mattbowytz.com/simple_api.json?data=all",
    method: "GET"
  }).success(function(data) {
    interests.push(data.data.interests);
    programming.push(data.data.programming);
  }).fail(function(data) {
    console.log(data);
  });

  $.ajax({
    url: "http://www.mattbowytz.com/simple_api.json?data=comics",
    method: "GET"
  }).success(function(data) {
    comics.push(data.data);
  }).fail(function(data){
    console.log(data);
  });

  console.log(interests);
  console.log(comics);
  console.log(programming);

  for (var i = 0; i < comics.length; i++) {
    console.log(comics[i]);
    allSearchPossiblities.push(comics[i]);
  }

  $('.flexsearch-input').on('keyup', function() {
    var current_input = [];
    current_input.push($('.flexsearch-input').val());

    var current_word1 = interests.toString();
    var current_word2 = programming.toString();
    var current_word3 = programming.toString();


    console.log(current_input[0]);

    for (var i = 0; i < current_input.length; i++) {

      if (current_input[i] == current_word1[i]) {
        $('#slideDownContent').show();
        $('#slideDownContent').html(current_word1.split(",")[i]);
      }
      else if(current_input[i] == current_word2[i]) {
        $('#slideDownContent').show();
        $('#slideDownContent').html(current_word2.split(",")[i]);
      }
      else if (current_input[i] == current_word3[i]) {
        $('#slideDownContent').show();
        $('#slideDownContent').html(current_word3.split(",")[i]);
      }
      else if ($('.flexsearch-input').val() == ''){
        $('#slideDownContent').hide();
      }
    }
  });

  console.log('Keepin\'n it clean with an external script!');
})();
