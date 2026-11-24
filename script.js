// START QUIZ//
const STARTQUIZ= document.getElementById("startQuiz");
const startbtn=document.getElementById("START");
const DARKBTN=document.querySelectorAll(".Darkbtn");
DARKBTN.forEach(function(btn){
    btn.addEventListener("click",
        function(){
            document.body.classList.toggle("dark-mode");
        }
    )
})


//QUIZ//
const QUIZ=document.getElementById("Quiz");
const Question=document.getElementById("question");
const answerContainer=document.getElementById("answers");
let selectedAnswer="";
let SCORE=document.getElementById("score");
let correctanswer=0;
const Nextbtn=document.getElementById("NEXT");
let currentQuestion=0;
let questionnum=document.getElementById("questionnumber");
let num=1;

let questions=[
    {
        question:"Which country won the first FIFA World Cup in 1930?",
        answers:["Brazil","Uruguay","Italy","Argentina"],
        correct:"Uruguay"  
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Jupiter", "Mercury"],
        correct: "Mars"
    },
    {
        question: "Who scored the famous 'Hand of God' goal?",
        answers: ["Pelé", "Maradona", "Messi", "Ronaldo"],
        correct: "Maradona"
    },
    {
        question: "In which year did World War II end?",
        answers: ["1939", "1942", "1945", "1950"],
        correct: "1945"
    },
    {
        question: "Which club did Cristiano Ronaldo join after leaving Manchester United in 2009?",
        answers: ["Real Madrid", "Juventus", "Barcelona", "Bayern Munich"],
        correct: "Real Madrid"
    },
    {
        question: "Which civilization built the Colosseum?",
        answers: ["Ancient Greeks", "Ancient Romans", "Ancient Egyptians", "Persians"],
        correct: "Ancient Romans"
    },
    {
        question: "Which national team has reached the most FIFA World Cup finals?",
        answers: ["Germany", "Argentina", "Brazil", "Italy"],
        correct: "Germany"
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        answers: ["Silver", "Gold", "Aluminium", "Copper"],
        correct: "Gold"
    },
    {
        question: "Who was the first emperor of Rome?",
        answers: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
        correct: "Augustus"
    },
    {
        question: "Who is the best football player in history?",
        answers: [ "Cristiano Ronaldo🐐🐐","Messi"],
        correct: "Cristiano Ronaldo🐐🐐",
    }

];
Question.textContent=questions[currentQuestion].question;
questionnum.textContent="Question"+num;




questions[currentQuestion].answers.forEach(function(answer){
let answersbtn=document.createElement("button");
answersbtn.textContent=answer;
answersbtn.addEventListener("click",
    function(){
    selectedAnswer=answer;

    answerContainer.querySelectorAll("button").forEach(function(allbtn){
    allbtn.classList.remove("selected");
    })
    answersbtn.classList.add("selected");
   
        

    }
)
answerContainer.appendChild(answersbtn);

})

//NEXTBUTTON//
Nextbtn.addEventListener("click",
    function(){
        if(selectedAnswer===""){
            return;
        }

           if(selectedAnswer==questions[currentQuestion].correct){
    correctanswer++
           }
           
        answerContainer.textContent="";
        selectedAnswer="";
        currentQuestion++;

           if(currentQuestion==10){
        QUIZ.style.display=("none");
        resultscreen.style.display=("block");

        if(correctanswer < 6){
    SCORE.textContent = "Your Score: " + correctanswer + " | Try Again 💪";
}

if(correctanswer >= 6 && correctanswer < 9){
    SCORE.textContent = "Your Score: " + correctanswer + " | Good Job! 👍";
}

if(correctanswer === 9){
    SCORE.textContent = "Your Score: " + correctanswer + " | Excellent! 🔥";
}

if(correctanswer === 10){
    SCORE.textContent = "Your Score: " + correctanswer + " | Perfect! 🏆";
}
    }

        if(currentQuestion>10){
           return;
        }

        num++;
        if(num>10){
            return;
        }
        questionnum.textContent="Question"+num

        Question.textContent=questions[currentQuestion].question;
        questions[currentQuestion].answers.forEach(function(answer){
            let answerbtn=document.createElement("button");
            answerbtn.textContent=answer;
            answerContainer.appendChild(answerbtn);

            answerbtn.addEventListener("click",
                function(){
                    selectedAnswer=answer;
                    answerContainer.querySelectorAll("button").forEach(function(allbtn){
                        allbtn.classList.remove("selected");
                    })
                    answerbtn.classList.add("selected");
                     
                }
            )



        })
     
    })
    
        
    


//result screen//
const resultscreen=document.getElementById("ResultScreen")
const againbtn=document.getElementById("playagain");
const Backtohome=document.getElementById("backtohome");
QUIZ.style.display="none";
resultscreen.style.display="none";


 
startbtn.addEventListener("click",
    function(){
        QUIZ.style.display="block";
        STARTQUIZ.style.display="none";

    }
)

Backtohome.addEventListener("click",
    function(){
        resultscreen.style.display="none"
        STARTQUIZ.style.display="block";
        QUIZ.style.display="none";
    }
)

againbtn.addEventListener("click",
    function(){
        resultscreen.style.display="none";
        QUIZ.style.display="block";
        STARTQUIZ.style.display="none";

        Question.textContent="";
        answerContainer.textContent="";
        correctanswer=0;
        num=1
        currentQuestion=0;


        selectedAnswer=""
        Question.textContent=questions[currentQuestion].question;
questionnum.textContent="Question"+num;




questions[currentQuestion].answers.forEach(function(answer){
let answersbtn=document.createElement("button");
answersbtn.textContent=answer;
answersbtn.addEventListener("click",
    function(){
    selectedAnswer=answer;

    answerContainer.querySelectorAll("button").forEach(function(allbtn){
    allbtn.classList.remove("selected");
    })
    answersbtn.classList.add("selected");
   
        

    }
)
answerContainer.appendChild(answersbtn);

})



    }
)
