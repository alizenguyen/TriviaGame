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


//START BUTTON

$('#start-button').on('click', function(){
	$(this).hide();
	newGame();
});

//QUESTION AND ANSWERS HTML 

function gameHTML() {
	$(".question").html("<p class='question-text'>" + triviaQA[questionNumber].question + "<p>")
	for (var i = 0; i < 4; i++){
		var answers = $('<div>');
		answers.text(triviaQA[questionNumber].answerChoices[i]);
		answers.addClass('answer-text');
		$(".answers").append(answers);
	}
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

setTimeout(//INSERT FUNCTION, 1000*30)

});

