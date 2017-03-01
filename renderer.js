var modeno;
const PythonShell = require('python-shell');
var script = 'twspam.py';
var cancelpython = 0
window.cancelpython = cancelpython;

function works() {
    $('#main').slideToggle(800);
    $('#works').slideToggle(800);
}

function hide() {
    $('button').prop("disabled", true);
    $('#main').fadeOut(300);
    $('#worksbtn').fadeOut(300);
}

function showOptions(title, desc, action, inputno) {
    $('#message').append('<h1 id="selectTitle">' + title + '</h1>');
    $('#selectTitle').after('<h3 id="subtitle">' + desc + '</h3>');
    $('#subtitle').after('<div id="inputs"></div>');
    var x;
    for (x = 0; x < inputno; x++) {
        $('#inputs').append('<div class="group">');
        $(".group").eq(x).append('<input type="text" min="1" max="40" step="1" id="input' + x + '" required><label>' + action[x] + '</label></div>');
    }
    $('#inputs').after('<button id="backBtn" onclick="menu()" style="left:50%;position:absolute;">Back</button>');
    $("#input1").attr({
        "type": "number",
        "min": "1",
        "max": "50",
        "step": "1"
    });
    $('#inputs').after('<button id="submitBtn" onclick="submit()" style="right:50%;position:absolute;">Submit</button>');
    $('#message').fadeIn(300);
    $('button').prop("disabled", false);
    console.log(title + '\n' + desc);
}

function menu() {
    $('#message').fadeOut(300);
    window.setTimeout(function() {
        $('#message').empty();
        $('#main').fadeIn(300);
        $('#worksbtn').fadeIn(300);
    }, 300);
}

function submit() {
    cancelpython = 0
    var input0 = $('#input0').val();
    var input1 = $('#input1').val();
    if (input0 == "" || input1 == "") {
        if ($('.inputcheck').length >= 1) {
            $('.inputcheck').fadeOut(200)
            $('.inputcheck').fadeIn(200);
        } else {
            $('#backBtn').after('<h5 class="inputcheck" style="display:none;margin-top:-20px;">Please input properly into all textboxes</h5>')
            $('.inputcheck').fadeIn(300)
        }
    } else {
        $('button').prop("disabled", true);
        $('#message').fadeOut(300);
        window.input0 = input0;
        window.input1 = input1;
        window.pythonset = pythonset;
        window.setTimeout(function() {
            modeScreen()
        }, 300)
        var pythonset = window.setTimeout(function() {
            python();
        }, 5300);
    }
}

function end() {
    $('button').prop("disabled", false);
    $('#modeScreen').fadeOut(500);
    window.setTimeout(function() {
        $('#message').empty();
        $('#modeScreen').empty();
        $('#main').fadeIn(500);
        $('#worksbtn').fadeIn(300);
    }, 500);
}

function modeScreen() {
    $('#modeScreen').append('<h1 id="modeTitle">Typing into selected textfield in:</h1>');
    $('#modeTitle').after('<span id="timer">5</span>')
    $('#timer').after('<br><button style="margin:16px;" id="cancelBtn" onclick="cancel()">Cancel</button>');
    $('#modeScreen').fadeIn(500);
    var count = 5;
    var counter = window.setInterval(timer, 1000); //1000 will run it every 1 second
    window.counter = counter;

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            $("#timer").html('Inputting..');
            return;
        }
        $("#timer").html(count);
    }
}

function cancel() {
    $('button').prop("disabled", false);
    cancelpython = 1
    window.clearTimeout(pythonset);
    window.clearInterval(counter);
    $('#modeScreen').fadeOut(500);
    window.setTimeout(function() {
        $('#modeScreen').empty();
        $('#message').fadeIn(500);
    }, 500);
}

function python() {
    if (cancelpython == 0) {
        var pyshell = new PythonShell(script);
        //window.pyshell = pyshell;
        pyshell.send(JSON.stringify([input0, input1, modeno]));
        pyshell.end(function(err) {
            if (err) {
                throw err;
            };
            console.log('Python Script Completed');
            end()
        });
        pyshell.on('message', function(message) {
            console.log(message);
        });
    }
}

function spam() {
    var modeno = 0;
    window.modeno = modeno;
    hide();
    setTimeout(function() {
        showOptions('Spam', 'Outputs a phrase a certain amount of times.', ['Your Message', 'No. of Times to Print'], 2);
    }, 300);
}

function uniqueSpam() {
    var modeno = 1;
    window.modeno = modeno;
    hide();
    setTimeout(function() {
        showOptions('Number Spam', 'Outputs a phrase and ascending number a certain amount of times.', ['Your Message', 'No. of Times to Print'], 2);
    }, 300);
}

function countdown() {
    var modeno = 2;
    window.modeno = modeno;
    hide();
    setTimeout(function() {
        showOptions('Countdown', 'Outputs a countdown.', ['Number to Countdown from'], 1);
    }, 300);
}

function samTalk() {
    var modeno = 3;
    window.modeno = modeno;
    hide();
    setTimeout(function() {
        showOptions('Backwards Text', 'Outputs the phrase turned backwards.', ['Phrase to Translate'], 1);
    }, 300);
}

function weebTalk() {
    var modeno = 4;
    window.modeno = modeno;
    hide();
    setTimeout(function() {
        showOptions('Unique Spam', 'Outputs your text, but modified into weeb talk.', ['Phrase to Translate'], 1);
    }, 300);
}

function verticalText() {
    var modeno = 5;
    window.modeno = modeno;
    hide();
    setTimeout(function() {
        showOptions('Vertical Text', 'Outputs text that has been turned vertically.', ['Phrase to Translate'], 1);
    }, 300);
}