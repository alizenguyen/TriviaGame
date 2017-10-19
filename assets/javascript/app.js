$(document).ready(function() {

//VARIABLES
var triviaQA = [
	{
		question: "What was Ash Ketchum's first pokemon?",
		answerChoices: ["Squirtle", "Charmander", "Bulbasaur", "Pikachu"],
		answer: 3
	},
	{
		question: "What was the first pokemon Ash caught?",
		answerChoices: ["Pidgey", "Caterpie", "Rattata", "Pikachu"],
		answer: 1
	},
	{
		question: "What legendary pokemon did Ash first see on his Pokemon Journey?",
		answerChoices: ["Articuno", "Moltres", "Ho-oh", "Zapdos"],
		answer: 2
	},
	{
		question: "This Pokemon has a flame on its tail, and if it goes out, it won't survive. Who's that Pokemon?",
		answerChoices: ["Flareon", "Charizard", "Charmander", "Rapidash"],
		answer: 2	
	},
	{
		question: "How many pokemon were there during the first generation?",
		answerChoices: ["150", "160", "155", "151"],
		answer: 0
	},
	{
		question: "What is the first region Ash explored during the first generation?",
		answerChoices: ["Kanto", "Johto", "Sinnoh", "Kalos"],
		answer: 0	
	},
	{
		question: "How many gym leaders were there?",
		answerChoices: ["5", "7", "9", "8"],
		answer: 3
	},
	{
		question: "Which gym leader specialized in the psychic element?",
		answerChoices: ["Misty", "Sabrina", "Giovanni", "Erika"],
		answer: 1
	},
];

var questionNumber = 0;
var correctAnswers;
var incorrectAnswers;
var noAnswer;
var answerChosen;
var counter = 20;
var countDown; 
var answered = false;


//START BUTTON

$(".timer").hide();

$('#start-button').on('click', function(){
	$(this).hide();
	$(".timer").show();
	gameHTML();
	timer();
	correctAnswers = 0;
	incorrectAnswers = 0;
	noAnswer = 0;
});

//QUESTION AND ANSWERS HTML 

function gameHTML() {
	$(".question").html("<p class='question-text'>" + triviaQA[questionNumber].question + "<p>");
	answerInput = "<p class='answerChoice'>" + triviaQA[questionNumber].answerChoices[0] + "</p><p class='answerChoice'>"+ triviaQA[questionNumber].answerChoices[1] +"</p><p class='answerChoice'>"+ triviaQA[questionNumber].answerChoices[2] +"</p><p class='answerChoice'>"+ triviaQA[questionNumber].answerChoices[3] +"</p>";
	$(".answers").html(answerInput);
};

//RESULT PAGE

function correctAnswer() {
	correctAnswers++;
	console.log(correctAnswers);
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").html("YOU GOT IT");
	setTimeout(questionAnswered, 1000*3);
};

function wrongAnswer() {
	incorrectAnswers++;
	console.log(incorrectAnswers);
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").html("YOU LOST");
	setTimeout(questionAnswered, 1000*3);
};

function timeoutAnswer() {
	noAnswer++;
	console.log(noAnswer);
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").html("TIME OUT");
	setTimeout(questionAnswered, 1000*3);
};

function reset() {
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").html("DONE");

	questionNumber = 0;
	correctAnswers = 0;
	incorrectAnswers = 0;
	noAnswer = 0;
	counter = 20;

	gameHTML();
	timer();
};

function gameOver() {
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").html("<p>Your Results:</p>" + "<p>Correct Answers: " + correctAnswers + "</p>" + "<p>Wrong Answers: " + incorrectAnswers + "</p>"+ "<p>Unanswered: " + noAnswer + "</p>");
};
//TIMER

function timer() {
	countDown = setInterval(quizCounter, 1000);
	function quizCounter () {
		if (counter === 0) {
			clearInterval(countDown);
			timeoutAnswer();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer-number").html(counter);
	};
};

function questionAnswered() {
	if (questionNumber < 7) {
		questionNumber++;	
		console.log(questionNumber);
		gameHTML();
		$(".result-page").empty();
		$(".timer").show();
		counter = 20;
		timer();
	} else {
		gameOver();
	}
};

//ONCLICK ANSWERS AND MOVES TO NEXT QUESTION

$(".answers").on("click", ".answerChoice", function(event) {
	answerChoice = $(this).text();
	rightAnswer = triviaQA[questionNumber].answerChoices[triviaQA[questionNumber].answer];
	console.log(answerChoice);
	console.log(rightAnswer);
	clearInterval(countDown)
	if (answerChoice === rightAnswer) {
		correctAnswer();
	} else if (answerChoice !== rightAnswer) {
		wrongAnswer();
	} 
});

});

