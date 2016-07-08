var questions = [{
		question: "In which treaty was the name 'The European Union' first used?",
		choices: ["Paris", "Maastricht", "Amsterdam", "Germany"],
		qNum : 0,
		correct : 1,
		fact: "The term 'Union' was introduced in the text which came out of the Maastricht Conference."
		},
		{
		question: "How many members did the Union count when the Euro began circulation in January 2000?",
		choices: ["15", "18", "9", "20"],
		qNum : 1,
		correct : 0,
		fact: "Austria, Belgium, Denmark, Finland, France, Germany, Greece, Ireland, Italy, Luxembourg, Portugal, Spain, Sweden, The Netherlands and the United Kingdom."
		},
		{
		question: "When you cross the border from Germany to the Netherlands without showing your passport you do so due to:",
		choices: ["The Masstricht Treaty", "The Schengen Agreement", "The Thomas Crown Affair", "The Brussels Agreement"],
		qNum : 2,
		correct : 1,
		fact: "The Schengen Agreement is a treaty signed on June 14, 1985 near the town of Schengen in Luxembourg, between five of the ten member states of the European Economic Community." 
		},
		{
		question: "What was the former name of the currency for Europe, now known as the Euro?",
		choices: ["E-Mark", "ECU", "EU", "Sterling"],
		qNum : 3,
		correct : 1,
		fact: "Before the Economic and Monetary Union (EMU) was founded, the Economic Monetary Cooperation was founded in 1978. This included a European Currency Unit, the ECU."
		},
		{
		question: "In terms of population, what is the largest city in the EU?",
		choices: ["London, UK", "Berlin, Germany", "Madrid, Spain", "Dublin, Ireland"],
		qNum : 4,
		correct : 0,
		fact: "London has a population of 8.674 million"	
		},
		{
		question: "Who is regarded as the 'chief architect' of European Unity?",
		choices: ["Robert Schuman", "Jean Monnet", "Winston Churchill", "Sean Connery"],
		qNum : 5,
		correct : 1,
		fact: "Jean Omer Marie Gabriel Monnet (9 November 1888 – 16 March 1979) is regarded by many as a chief architect of European Unity and is regarded as one of its founding fathers. Never elected to public office, Monnet worked behind the scenes of American and European governments as a well-connected pragmatic internationalist."	
		},
		{
		question: "Which country voted to leave the European Union shocking investors and financial markets on June 23, 2016?",
		choices: ["Northern Ireland", "Scotland", "Great Britain", "United Kingdom"],
		qNum : 6,
		correct : 2,
		fact: "Unfortunately the British campaign featured assertions and allegations tossed around with little regard to the facts. Both sides played to emotion, and the most common emotion played upon was fear.",
				}]

  		var numberCorrect = 0;
    	var currentQuestion = 0;

 		console.log(jQuery);
		jQuery(document).ready(function() {
    
    $("#question_wrapper").on("click", "#submit", function () {
        
        nextQuestion();
    });
    $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        $(".score_cup").css("display", "none");
        $("#score_cup0").css("display", "inline");
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });
 function nextQuestion() {
        if (currentQuestion < 6) {
            $(".question").remove();
            checkAnswer();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").hide();
			currentQuestion++;
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
        }
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			//$("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1];
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 7) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $("#answer_holder").html(finalScore);
            }
        }
    }  
});
 function checkAnswer() {
 	var userGuess = $("input[type='radio']:checked").val();
 	var correctAnswer = questions[currentQuestion].correct;
 	console.log(correctAnswer);
 	console.log(userGuess);
 	if (userGuess == correctAnswer) {
 		console.log(correctAnswer);
 		numberCorrect++;
 	}
 	console.log(numberCorrect);
 }

















