//Initialize a new set of data
var questions = [
    new Question(
        "You see one of the passengers and a fellow cabin crew member engaged in an unpleasant conversation that has heated up.<br>How would you resolve this matter?", 
            ["Interfere while being polite, try to resolve the situation and apologise, if necessary.",
             "Let them resolve the matter as another person's involvement will be unnecessary.", 
             "Hear both parties, decide who is wrong and ask them to apologise to each other",
             "Interfere and get all the cabin crew members onto this matter"], 
        "Interfere while being polite, try to resolve the situation and apologise, if necessary."),
    
    new Question(
        "Which of the following best describes some of the roles and responsibilities of a cabin crew member?",
            ["Carrying out pre-flight duties, Welcoming passengers on board, briefing on aircraft safety procedures, Serving meals and refreshments, announcements (if any)",
             "Carrying out pre-flight duties, welcome passengers on board, stocking hand luggage safely", 
             "Carrying out pre-flight duties, welcome passengers on board, serving meals and refreshments", 
             "None of the above"],
        "Carrying out pre-flight duties, Welcoming passengers on board, briefing on aircraft safety procedures, Serving meals and refreshments, announcements (if any)"),
    
    new Question(
        "What are the characteristics of a pleasant Customer service?", 
            ["Always smile, look into their query and quickly answer them and move on to the next customer", 
             "Provide them with to the point answers. Extra care is not required", 
             "Always smile, respond to their query politely and patiently, no matter what the circumstances are", "Guide them to the right party who can solve their issue ASAP"],
        "Always smile, respond to their query politely and patiently, no matter what the circumstances are"),
    
    new Question(
        "Imagine you are working with someone you don’t like; how do you handle any uncomfortable situations?",
        ["Take matters to the upper management to relocate yourself to another branch",
         "Stay professional and be diplomatic",
         "Try to adjust to the person’s personality", 
         "Show the person who the right one is"],
        "Stay professional and be diplomatic"),
    
    new Question(
        "How do you feel about working with people from different cultures and backgrounds?", 
        ["It is just an added advantage",
         "It is good to learn about new cultures and understand the various backgrounds but it is not a necessity", 
         "Excited! An opportunity to learn from various cultures and improve my knowledge of the world", 
         "None of the above"],
        "Excited! An opportunity to learn from various cultures and improve my knowledge of the world")
];

//Intialize a new quiz
var quiz = new Quiz(questions);

function showScores()
{
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
    if(quiz.score > 3)
        {
            gameOverHtml += "<p>Congratulations! You may proceed to the next stage of the recruitment.</p>";
            gameOverHtml += "<a href='second-round.html' class='blue-orange-button'>Proceed</a>";
        }
    else
        {
            gameOverHtml += "<p>We are regretful not to have you in for this batch. Nonetheless, you could still try to re-apply in the next batch";
        }
    var element = document.getElementById("quiz-box");
    element.innerHTML = gameOverHtml;
}

function guessAns(id, guess)
{
    var button = document.getElementById(id);
    button.onclick = function()
    {
        quiz.guess(guess);
        startApp();
    }
}

function showProgress()
{
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function startApp()
{
    if(quiz.isEnded())
        {
            showScores();
        }
    else
        {
            //Push the Question
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().question;

            //showChoices();
            var choices = quiz.getQuestionIndex().choices;
            for (var i = 0; i < choices.length; i++)
                {
                    var element = document.getElementById("choice"+i);
                    element.innerHTML = choices[i];
                    guessAns("btn" + i, choices[i]);
                }
            showProgress();//Update the current Question Number
        }
}

startApp();
