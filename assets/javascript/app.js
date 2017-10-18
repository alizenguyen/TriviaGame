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
var answered = false;


//START BUTTON

$('#start-button').on('click', function(){
	$(this).hide();
	newGame();
	timer();
});

//QUESTION AND ANSWERS HTML 

function gameHTML() {
	$(".question").html("<p class='question-text'>" + triviaQA[questionNumber].question + "<p>");
	gameHTML = "<p class='answerChoice'>A. " + triviaQA[questionNumber].answerChoices[0] + "</p><p class='answerChoice'>B. "+ triviaQA[questionNumber].answerChoices[1] +"</p><p class='answerChoice'>C. "+ triviaQA[questionNumber].answerChoices[2] +"</p><p class='answerChoice'>D. "+ triviaQA[questionNumber].answerChoices[3] +"</p>";
	$(".answers").html(gameHTML);
}

//NEW GAME

function newGame() {
	$(".result-page").empty();
	correctAnswers = 0;
	incorrectAnswers = 0;
	noAnswer = 0;

	gameHTML();
}

//TIMER

function timer() {
	countDown = setInterval(quizCounter, 1000);
	function quizCounter () {
		if (counter === 0) {
			clearInterval(countDown);
			//insert funtion for loss by timeout
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html("Time Remaining : " + counter);
	};
}

//ONCLICK ANSWERS AND MOVES TO NEXT QUESTION



//RESULT PAGE



});

