var mode = ['start1()', 'start2()', 'start3()', 'start4()', 'start5()', 'start6()'];
var modeno;
var PythonShell = require('python-shell');
var script = 'twspam.py';
var pyshell = new PythonShell(script);

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
    $(".group").eq(x).append('<input type="text" id="input' + x + '" required><label>' + action[x] + '</label></div>');
  }
  $('#inputs').after('<button id="backBtn" onclick="menu()" style="left:50%;position:absolute;">Back</button>');
  $('#inputs').after('<button id="submitBtn" onclick="submit()" style="right:50%;position:absolute;">Submit</button>');
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

function submit() {
  var input0 = $('#input0').val();
  var input1 = $('#input1').val();
  if (input0 == "" || input1 == "") {
    if ( $('#inputcheck').length ) {
      ;
    }
    $('#backBtn').after('<h5 id="inputcheck" style="display:none;margin-top:-20px;">Please input something into all textboxes</h5>')
    $('#inputcheck').fadeIn(500);
  } //else if ( $('h5').length() == 1) {
    //;
  /*}*/ else {
    $('#message').fadeOut(500);
    window.input0 = input0;
    window.input1 = input1;
    window.setTimeout(function() {
      python();
    }, 5000);
   }
}

function python() {
  console.log(input0 + input1 + modeno)
  pyshell.send(JSON.stringify([input0,input1,modeno]));
  pyshell.end(function (err) {
      if (err){
          throw err;
      };
      console.log('Python Script Completed');
  });
}

pyshell.on('message', function (message) {
    console.log(message);
});

function spam() {
  var modeno = 0;
  hide();
  setTimeout(function(){
    showOptions('Spam','Spams your chat with one word at a time.', ['Your Message', 'No. of Times to Print'], 2);
  }, 300);
}

function uniqueSpam() {
  var modeno = 1;
  window.modeno = modeno;
  hide();
  setTimeout(function(){
    showOptions('Unique Spam', 'Spams your chat with one word and number at a time.', ['Your Message', 'No. of Times to Print'], 2);
  }, 300);
  console.log(modeno);
}

function countdown() {
  var modeno = 2;
  hide();
  setTimeout(function(){
    showOptions('Countdown', 'Spams your chat with a countdown.', ['Number to Countdown from'], 1);
  }, 300);
}

function samTalk() {
  var modeno = 3;
  hide();
  setTimeout(function(){
    showOptions('Klat Mas (Sam Talk)', 'Turns your text backwards.', ['Phrase to Translate'], 1);
  }, 300);
}

function weebTalk() {
  var modeno = 4;
  hide();
  setTimeout(function(){
    showOptions('Unique Spam', 'Makes your text into weeb talk.', ['Phrase to Translate'], 1);
  }, 300);
}

function verticalText() {
  var modeno = 5;
  hide();
  setTimeout(function(){
    showOptions('Vertical Text', 'Turns your text vertically in a chat.', ['Phrase to Translate'], 1);
  }, 300);
}
