//Arrays 
var Question1 = ('finish the word... Java-----')
var Question2 = ('the peramiters for a for loop are?')
var Question3 = ('Which bear is best?')
var Question4 = ('what is the word for setting a variable')
var Question5 = ('which symbol is used to symbolize an id')
var Question6 = ('what is an array')
var Question7 = ('what are the two types of loops')
var Question8 = ('what language is used for styling webpages')
var Question9 = ('what is the proper syntax for leaving comments in javaScript')
var Question10 = ('in a time interval in javaScript, what is the time counted in?')
var Answers1 = ['script','tea','core','time']
var Answers2 = ['an initializing value & a peramiter to persist until','It has no peramiters','a variable & a function','a time interval, a function, and a speed in milliseconds']
var Answers3 = ['False....Black bear','polor bear','koala bear','brown bear']
var Answers4 = ['all of these are','let','const','var']
var Answers5 = ['#','%','$','!']
var Answers6 = ['a set of variables or values set up in an orrdered list','a single value connected to a word','the first child in an object','an html term for a list']
var Answers7 = ['for and while','for and let','while and until','until and let']
var Answers8 = ['CSS','HTML','JAvaScript','Python']
var Answers9 = ['//','/!','/*','**/']
var Answers10 = ['Milliseconds','seconds','cycles','months/10000']
var q1 = [Question1,Answers1]
var q2 = [Question2,Answers2]
var q3 = [Question3,Answers3]
var q4 = [Question4,Answers4]
var q5 = [Question5,Answers5]
var q6 = [Question6,Answers6]
var q7 = [Question7,Answers7]
var q8 = [Question8,Answers8]
var q9 = [Question9,Answers9]
var q10 = [Question10,Answers10]
var questionNum = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]
//Randomize question
function randQues() {
    randArrEnd = []
    randArrStart = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]
    for( i=0 ; i < questionNum.length;i++){
    randOrder = Math.floor(Math.random() * randArrStart.length)
    randArrEnd.push(randArrStart[randOrder])
    randArrStart.splice(randOrder, 1)
    }
    
}
var answerSelect = document.querySelectorAll(".answerSelect")


timeLeft = 0
//Randomize andswers
var correct = 0 
function randAnsQuestOn() {
  
    randAnsEnd = []
    randAnsStart = []
    for(i = 0;i<4;i++){
        randAnsStart.push(randArrEnd[questOn+1][1][i])
    }
    for( i=0 ; i < 4;i++){
    randAns = Math.floor(Math.random() * randAnsStart.length)
    randAnsEnd.push(randAnsStart[randAns])
    randAnsStart.splice(randAns, 1)

    }
}

function endGame(){
    playName = prompt("What are your initials?")
    playScore = Math.round(correct * (timeLeft/10))
    scoreCard =  document.createElement("li")
    scoreCard.textContent = playName + ":" + playScore
    document.getElementById("scoreList").append(scoreCard)
    document.getElementById("QAnswer").setAttribute('style', 'visibility: hidden;');
    document.getElementById("questionHead").setAttribute('style', 'visibility: hidden;');
    document.getElementById("start").setAttribute("style" ,"visibility: visible;");
    document.getElementById("Score").setAttribute("style" ,"visibility: visible;");
}
function Highscore(){
    clearInterval(timerInt)
    document.getElementById("QAnswer").setAttribute('style', 'visibility: hidden;');
    document.getElementById("questionHead").setAttribute('style', 'visibility: hidden;');
    document.getElementById("start").setAttribute("style" ,"visibility: visible;");
    document.getElementById("Score").setAttribute("style" ,"visibility: visible;");
}



var next = document.querySelector("#next")

function nextQues(event){
    if(event.target.innerText === randArrEnd[questOn][1][0]){
        correct++
        document.getElementById(questOn-1).setAttribute("style","color: green;")
    }
    if(event.target.innerText != randArrEnd[questOn][1][0]){
        timeLeft = timeLeft - 15
        if(timeLeft < 0){
            endGame()
        }
        document.getElementById("timer").innerHTML = "Time Left:"+timeLeft
        document.getElementById(questOn-1).setAttribute("style","color: red;")
    }
    if (questOn < 9){
    askQues()
    }
    questOn = questOn + 1
    if (questOn > 9){
        clearInterval(timerInt)
        endGame()
    }
}

function askQues(){
    randAnsQuestOn()
    document.querySelector("#questionHead").innerHTML = randArrEnd[questOn+1][0]
    document.querySelector("#ans1").innerHTML = randAnsEnd[0]
    document.querySelector("#ans2").innerHTML = randAnsEnd[1]
    document.querySelector("#ans3").innerHTML = randAnsEnd[2]
    document.querySelector("#ans4").innerHTML = randAnsEnd[3]
}
var questOn = 0


function startQuiz(){
    questOn=0
    randQues()
    askQues()
    
    questOn = questOn + 1
    // document.getElementById("next").setAttribute("style" ,"visibility: visible;");
    document.getElementById("QAnswer").setAttribute('style', 'visibility: visible;');
    document.getElementById("questionHead").setAttribute('style', 'visibility: visible;');
    document.getElementById("start").setAttribute("style" ,"visibility: hidden;");
    document.getElementById("Score").setAttribute("style" ,"visibility: hidden;");
    timeLeft = 100
    timerInt = setInterval(function(){
        timeLeft--
        document.getElementById("timer").innerHTML = "Time Left:"+timeLeft
        if(timeLeft < 0 ){
            clearInterval(timerInt)
            endGame() 
        }
    },1000)
    for(i=0; i<9;i++){
        document.getElementById(i).setAttribute("style","color: black;")
    }
}




// var questionNextDisplay = document.getElementById("#next")
// console.log(questionNextDisplay.style)
// for (i = 0; i < answerSelect.length; i++){
//     answerSelect[i].addEventListener("click", checkAnswer)
//     }

// when start is pressed
var startQ = document.querySelector("#start");
startQ.addEventListener("click", startQuiz);
// next.addEventListener("click", nextQues)
var scoreBtn = document.querySelector("#highscore")
scoreBtn.addEventListener("click", Highscore)

for (i = 0; i < answerSelect.length; i++){
answerSelect[i].addEventListener("click", nextQues)
}




//dispaly score



// view highscore

