var filler = "This is the Filller!"
var mode = ['start1()', 'start2()', 'start3()', 'start4()', 'start5()', 'start6()']
var modeno

function hide() {
  $('button').prop("disabled",true);
  $('#main').fadeOut(300);
}

function showOptions(title, desc, action, inputno) {
  $('#message').append('<h1 id="selectTitle">' + title + '</h1>');
  $('#selectTitle').after('<h3 id="subtitle">' + desc + '</h3>');
  $('#subtitle').after('<div id="inputs"></div>')
  var x;
  for (x = 0; x < inputno; x++) {
    $('#inputs').append('<div class="group">');
    $(".group").eq(x).append('<input type="text" required><label>' + action[x] + '</label></div>');
  }
  $('#inputs').after('<button id="backBtn" onclick="menu()">Back</button>');
  $('#inputs').after('<button id="submitBtn" onclick="submit()">Submit</button>');
  $('#message').fadeIn(300);
  $('button').prop("disabled",false);
  console.log(title + '\n' + desc);
}

function menu(){
  $('#message').fadeOut(300);
  window.setTimeout(function() {
    $('#message').empty();
    $('#main').fadeIn(300);
}, 300);
}

function submit(){
  $('#message').fadeOut(300);
  //TODO 
}

function spam() {
  var mode = 0;
  hide();
  setTimeout(function(){
    showOptions('Spam','Spams your chat with one word at a time.', ['Your Message', 'No. of Times to Print'], 2);
  }, 300);
}

function uniqueSpam() {
  var mode = 1;
  hide();
  setTimeout(function(){
    showOptions('Unique Spam', 'Spams your chat with one word and number at a time.', ['Your Message', 'No. of Times to Print'], 2);
  }, 300);
}

function countdown() {
  var mode = 2;
  hide();
  setTimeout(function(){
    showOptions('Countdown', 'Spams your chat with a countdown.', ['Number to Countdown from'], 1);
  }, 300);
}

function samTalk() {
  var mode = 3;
  hide();
  setTimeout(function(){
    showOptions('Klat Mas (Sam Talk)', 'Turns your text backwards.', ['Phrase to Translate'], 1);
  }, 300);
}

function weebTalk() {
  var mode = 4;
  hide();
  setTimeout(function(){
    showOptions('Unique Spam', 'Makes your text into weeb talk.', ['Phrase to Translate'], 1);
  }, 300);
}

function verticalText() {
  var mode = 5;
  hide();
  setTimeout(function(){
    showOptions('Vertical Text', 'Turns your text vertically in a chat.', ['Phrase to Translate'], 1);
  }, 300);
}
