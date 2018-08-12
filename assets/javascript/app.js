$(document).ready(function () {


    var question1 = {
        asking: 'What is the name of Will Smith’s character in Independence Day?',
        choices: ['General George Patton', 'Major James Thompson', 'Captain Steven Hiller', 'Captain Mike Miller']
    };

    var question2 = {
        asking: "What year was Forrest Gump released?",
        choices: ['1994', '1990', '2000', '2004']
    };

    var question3 = {
        asking: "Which 90’s movie featured the Looney Tunes on its soundtrack?",
        choices: ['Space Jam', 'Like Mike', 'Toy Story', 'Animaniacs']
    };

    var question4 = {
        asking: "What was the first Arnold Schwarzenegger movie to win four Academy Awards?",
        choices: ['Terminater 2', 'Rambo', 'Mission Impossible', 'Minority Report']
    };

    let question5 = {
        asking: "Who sang 'Things Go Better With Coke' in 1969 before switching to Pepsi in the 1980's?",
        choices: ['Stevie Wonder', 'Eric Clapton', 'Jimi Hendrix', 'Ray Charles']
    };

    let question6 = {
        asking: "What movie earned Tom Hanks his third straight Oscar nomination, in 1996?",
        choices: ['Big', 'Philadelphia', 'Apollo 13', 'Saving Private Ryan']
    };

    let question7 = {
        asking: "What Francis Ford Coppola movie sees Marlon Brando blather: 'Horror has a face, and you must make a friend of horror'?",
        choices: ['Apocolypse Now', 'American Sniper', 'Apocolypse Later', 'Saving Private Ryan']
    };

    // takes a question, throws it on page
    function renderQuestion(questy) {
        let questionElement = $('#question');
        questionElement.text(questy.asking);

        let looseFragment = $([]);
        let choicesArray = questy.choices;
        choicesArray.forEach(function (value, idx, arr) {
            var choice = $('<li>');
            choice.text(value);
            looseFragment = looseFragment.add(choice);

        })
        $('.choice-container').html(looseFragment);

    }

    renderQuestion(question1);
    renderQuestion(question5);




    console.log(questionBank)

});



// var questionBank = [question1.asking, question2.asking, question3.asking]

// var currentQuestion = 0;
// var currentChoices1 = 0;
// var currentChoices2 = 0;
// var currentChoices3 = 0;
// var currentChoices4 = 0;


// var seconds_left = 10;
// var interval = setInterval(function () {
//     $('#timer').text(--seconds_left);
//     if (seconds_left === 0) {
//         $('#timer').text('Time has Expired');
//         clearInterval(interval)
//     }
// }, 1000);

// if (currentQuestion > questions.length - 1) {
//     currentQuestion = 0;
// }

// console.log("37", questions[currentQuestion]);
// $('#question').text(questions[currentQuestion]);
// currentQuestion++;
// var intervalID = setInterval(showFirstQuestionAndAddToCurrentQuestion, 10000);


// var intervalID = setInterval(updateChoices1, 10000);
// var intervalID = setInterval(updateChoices2, 10000);
// var intervalID = setInterval(updateChoices3, 10000);
// var intervalID = setInterval(updateChoices4, 10000);

// function updateChoices(count, array) {
//     if (count > array.length - 1) {
//         count = 0;
//     }
//     var firstChoice = $('#choice1');

//     var textToSet = choice1[currentChoices1];

//     firstChoice.text(textToSet);
//     currentChoices1++;
// };

// function updateChoices2() {
//     if (currentChoices2 > choice2.length - 1) {
//         currentChoices2 = 0;
//     }
//     $('#choice2').text(choice2[currentChoices2]);
//     currentChoices2++;
// };

// function updateChoices3() {
//     if (currentChoices3 > choice3.length - 1) {
//         currentChoices3 = 0;
//     }
//     $('#choice3').text(choice3[currentChoices3]);
//     currentChoices3++;
// };

// function updateChoices4() {
//     if (currentChoices4 > choice4.length - 1) {
//         currentChoices4 = 0;
//     }
//     $('#choice4').text(choice4[currentChoices4]);
//     currentChoices4++;
// };


// // });
