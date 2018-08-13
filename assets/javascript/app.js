$(document).ready(function () {
    let currentQuestion;
    let questionOrder = [{
        asking: 'What is the name of Will Smith’s character in Independence Day?',
        choices: ['General George Patton', 'Major James Thompson', 'Captain Steven Hiller', 'Captain Mike Miller'],
        correctAnswer: 'Captain Steven Hiller'
    },
    {
        asking: "What year was Forrest Gump released?",
        choices: ['1994', '1990', '2000', '2004'],
        correctAnswer: '1994'
    },
    {
        asking: "Which 90’s movie featured the Looney Tunes on its soundtrack?",
        choices: ['Space Jam', 'Like Mike', 'Toy Story', 'Animaniacs'],
        correctAnswer: 'Space Jam'
    },
    {
        asking: "What was the first Arnold Schwarzenegger movie to win four Academy Awards?",
        choices: ['Terminater 2', 'Rambo', 'Mission Impossible', 'Minority Report'],
        correctAnswer: 'Terminater 2'
    },
    {
        asking: "Who sang 'Things Go Better With Coke' in 1969 before switching to Pepsi in the 1980's?",
        choices: ['Stevie Wonder', 'Eric Clapton', 'Jimi Hendrix', 'Ray Charles'],
        correctAnswer: 'Ray Charles'
    },
    {
        asking: "What movie earned Tom Hanks his third straight Oscar nomination, in 1996?",
        choices: ['Big', 'Philadelphia', 'Apollo 13', 'Saving Private Ryan'],
        correctAnswer: 'Apollo 13'
    },
    {
        asking: "What Francis Ford Coppola movie sees Marlon Brando blather: 'Horror has a face, and you must make a friend of horror'?",
        choices: ['Apocolypse Now', 'American Sniper', 'Apocolypse Later', 'Saving Private Ryan'],
        correctAnswer: 'Apocolypse Now'
    }];

    // takes a question object, throws it on page
    function renderQuestion(questy) {
        currentQuestion = questy;

        //asking
        let questionElement = $('#question');
        questionElement.text(questy.asking);

        //choices
        let looseFragment = $([]);
        questy.choices.forEach(function (value, idx, arr) {
            let mySpecificId = "item" + idx;
            var choice = $('<li>');
            var inny = $(`<input type="radio" name="answers" value="${value}" id="${mySpecificId}">`);
            var labely = $(`<label for="${mySpecificId}">${value}</label>`);

            choice.append(inny);
            choice.append(labely);

            looseFragment = looseFragment.add(choice);

        });
        $('.choice-container').html(looseFragment);

    }

    var currentQ = 1;
    var count = 11;
    var counter = setInterval(timer, 1000);
    $('button').click(function () {

        clearInterval(counter);

        setTimeout(function () {
            renderQuestion(questionOrder[currentQ++]);
            $('.message').text('');
            count = 11;
            counter = setInterval(timer, 1000);
        }, 3000)

        // find what the user checked
        var checked = $('input:checked').val();
        if (checked === currentQuestion.correctAnswer) {
            $('.message').text('Answer is correct.');
            var right = $('<img>');
            right.attr('src', 'assets/images/checkmark.jpg');
            $('.message').append(right)
        } else {
            $('.message').text('Answer is not correct.');
            var wrong = $('<img>');
            wrong.attr('src', 'assets/images/wrong.png');
            $('.message').append(wrong)

        }

        // find and what the correct answer is
        var correctValue = currentQuestion.correctAnswer;
        //select all input values
        let allInputs = $('input');
        //filter wrong answers
        let justCorrectInput = allInputs.filter(function (idx, el) {
            el = $(el);
            let valVal = el.val();
            let isEqualToCorrectAnswer = valVal === correctValue;
            return isEqualToCorrectAnswer;
        })
        justCorrectInput.addClass("show-correct");
    })

    renderQuestion(questionOrder[0]);

    function timer() {
        count = count - 1;
        $('#timer').text(count);
        if (count <= 0) {
            clearInterval(counter);
            $('#timer').text('Time has expired');
            $('.gameBoard').text('');
            var gameOver = $('<img>');
            gameOver.attr('src', 'assets/images/gameOver.jpg');
            gameOver.attr('class', 'over')
            $('.gameBoard').append(gameOver)
            $('button').remove()
        }

        var checked = $('input:checked').length;
        console.log(checked)
        if (checked === 1) {
        }

    }
});