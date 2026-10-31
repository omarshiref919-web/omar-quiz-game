let question= document.getElementById("question");
let answers=document.getElementById("answers");
let button=document.getElementById("nextButton");
let result=document.createElement("p");
answers.appendChild(result);
question.textContent=" What is the capital of egypt?";
let answersList=["Ciro","Paris","London"];
answersList.forEach(function(answer) {
    let answerButton=
    document.createElement("button")
    answerButton.textContent=answer;
    answerButton.onclick=function(){
        if(answer==="Ciro"){
            result.textContent="Correct Answer!";
        }else{result.textContent="Incorrect"
        }let allButtons =
        answers.querySelectorAll("button");
        allButtons.forEach(function(btn){
            btn.disabled=true;
        })
    }
    answers.appendChild(answerButton)
    })
