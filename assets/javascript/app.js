var questions = ['What is the name of Will Smith’s character in Independence Day?', 'What year was Forrest Gump released?', 'Which 90’s movie featured the Looney Tunes on its soundtrack?',]
var choice1 = ['General George Patton', '1994', 'Space Jam'];
var choice2 = ['Major James Thompson', '1990', 'Like Mike'];
var choice3 = ['Captain Steven Hiller', '2000', 'Toy Story'];
var choice4 = ['Captain Mike Miller', '2004', 'Animaniacs'];




$(document).ready(function () {

    timePiece();


    var intervalID = setInterval(updateQuestion, 10000);
    var intervalID = setInterval(updateChoices1, 10000);
    var intervalID = setInterval(updateChoices2, 10000);
    var intervalID = setInterval(updateChoices3, 10000);
    var intervalID = setInterval(updateChoices4, 10000);

    var currentQuestion = 0;
    var currentChoices1 = 0;
    var currentChoices2 = 0;
    var currentChoices3 = 0;
    var currentChoices4 = 0;

    function updateQuestion() {
        if (currentQuestion > questions.length - 1) {
            currentQuestion = 0;
        }
        $('#question').text(questions[currentQuestion]);
        currentQuestion++;
    };



    function updateChoices1() {
        if (currentChoices1 > choice1.length - 1) {
            currentChoices1 = 0;
        }
        $('#choice1').text(choice1[currentChoices1]);
        currentChoices1++;
    };

    function updateChoices2() {
        if (currentChoices2 > choice2.length - 1) {
            currentChoices2 = 0;
        }
        $('#choice2').text(choice2[currentChoices2]);
        currentChoices2++;
    };

    function updateChoices3() {
        if (currentChoices3 > choice3.length - 1) {
            currentChoices3 = 0;
        }
        $('#choice3').text(choice3[currentChoices3]);
        currentChoices3++;
    };

    function updateChoices4() {
        if (currentChoices4 > choice4.length - 1) {
            currentChoices4 = 0;
        }
        $('#choice4').text(choice4[currentChoices4]);
        currentChoices4++;
    };

    function timePiece() {
        var seconds_left = 10;
        var interval = setInterval(function () {
            $('#timer').text(--seconds_left);
            if (seconds_left === 0) {
                $('#timer').text('Time has Expired');
                clearInterval(interval)
            }
        }, 1000);
    }


});
