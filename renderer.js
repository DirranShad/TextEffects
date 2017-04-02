var modeno;
const PythonShell = require('python-shell');
var script = 'resources/app/twspam.py';
cancelpython = 0

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
        $(".group").eq(x).append('<input type="text" id="input' + x + '" required><label>' + action[x] + '</label></div>');
    }
    if (title === 'Countdown') { $('#input0').attr("id", "input1"); }
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
    input0 = String($('#input0').val());
    input1 = String($('#input1').val());
    alert(input0)
    if (input0 == "" || input1 == "" || input1 == "." || input1 == "e") {
        if ($('.inputcheck').length >= 1) {
            $('.inputcheck').fadeOut(200)
            $('.inputcheck').fadeIn(200);
        } else {
            $('#backBtn').after('<h5 class="inputcheck" style="display:none;margin-top:-20px;">Please input properly into all text-fields.</h5>')
            $('.inputcheck').fadeIn(300)
        }
    } else {
        $('button').prop("disabled", true);
        $('#message').fadeOut(300);
        window.setTimeout(function() {
            modeScreen()
        }, 300)
        pythonset = window.setTimeout(function() {
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
    counter = window.setInterval(timer, 1000);

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            $("#timer").html('Inputting..');
            $("#cancelBtn").css('display', "none")
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
        pyshell = new PythonShell(script);
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
    modeno = 0;
    hide();
    setTimeout(function() {
        showOptions('Spam', 'Outputs a phrase a certain amount of times.', ['Your Message', 'No. of Times to Print'], 2);
    }, 300);
}

function uniqueSpam() {
    modeno = 1;
    hide();
    setTimeout(function() {
        showOptions('Number Spam', 'Outputs a phrase and ascending number a certain amount of times.', ['Your Message', 'No. of Times to Print'], 2);
    }, 300);
}

function countdown() {
    modeno = 2;
    hide();
    setTimeout(function() {
        showOptions('Countdown', 'Outputs a countdown.', ['Number to Countdown from'], 1);
    }, 300);
}

function samTalk() {
    modeno = 3;
    hide();
    setTimeout(function() {
        showOptions('Backwards Text', 'Outputs the phrase turned backwards.', ['Phrase to Translate'], 1);
    }, 300);
}

function weebTalk() {
    modeno = 4;
    hide();
    setTimeout(function() {
        showOptions('Weeb Talk', 'Outputs your text, but modified into weeb talk.', ['Phrase to Translate'], 1);
    }, 300);
}

function verticalText() {
    modeno = 5;
    hide();
    setTimeout(function() {
        showOptions('Vertical Text', 'Outputs text that has been turned vertically.', ['Phrase to Translate'], 1);
    }, 300);
}