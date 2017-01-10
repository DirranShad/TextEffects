function hide() {
  $('#main').fadeOut(500);
}

function showOptions(title, desc/* TODO:, action, inputno */) {
  $('#message').append('<h1 id="selectTitle">' + title + '</h1>');
  $('#selectTitle').after('<h3 id="subtitle">' + desc + '</h3>')
  $('#subtitle').after('<button onclick="menu()">Back</button>')
  $('#message').fadeIn(500);
  console.log(title + '\n' + desc);
}

function menu(){
  $('#message').fadeOut(500);
  window.setTimeout(function() {
    $("#message").empty();
    $('#main').fadeIn(500);
}, 500);
}

function spam() {
  hide();
  setTimeout(function(){
    showOptions('Spam','Spams your chat with one word at a time.' /* TODO: Create the other two things for all modes. */);
  }, 500);
};

function uniqueSpam() {
  hide();
  setTimeout(function(){
    showOptions('Unique Spam', 'Spams your chat with one word and number at a time.');
  }, 500);
}

function countdown() {
  hide();
  setTimeout(function(){
    showOptions('Countdown', 'Spams your chat with a countdown.');
  }, 500);
}

function samTalk() {
  hide();
  setTimeout(function(){
    showOptions('Klat Mas (Sam Talk)', 'Turns your text backwards.');
  }, 500);
}

function weebTalk() {
  hide();
  setTimeout(function(){
    showOptions('Unique Spam', 'Makes your text into weeb talk.');
  }, 500);
}

function verticalText() {
  hide();
  setTimeout(function(){
    showOptions('Vertical Text', 'Turns your text vertically in a chat.');
  }, 500);
}
