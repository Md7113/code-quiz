//Arrays 
var Question1 = ('1')
var Question2 = ('2')
var Question3 = ('3')
var Question4 = ('4')
var Question5 = ('5')
var Question6 = ('6')
var Question7 = ('7')
var Question8 = ('8')
var Question9 = ('9')
var Question10 = ('10')
var Answers1 = ['correct','incorrect','incorrect','incorrect']
var Answers2 = ['correct','incorrect','incorrect','incorrect']
var Answers3 = ['correct','incorrect','incorrect','incorrect']
var Answers3 = ['correct','incorrect','incorrect','incorrect']
var Answers4 = ['correct','incorrect','incorrect','incorrect']
var Answers5 = ['correct','incorrect','incorrect','incorrect']
var Answers6 = ['correct','incorrect','incorrect','incorrect']
var Answers7 = ['correct','incorrect','incorrect','incorrect']
var Answers8 = ['correct','incorrect','incorrect','incorrect']
var Answers9 = ['correct','incorrect','incorrect','incorrect']
var Answers10 = ['correct','incorrect','incorrect','incorrect']
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


//Randomize andswers

function randAnsQuestOn() {
    randAnsEnd = []
    randAnsStart = []
    randAnsStart = randArrEnd[questOn][1]
    for( i=0 ; i < 4;i++){
    randAns = Math.floor(Math.random() * randAnsStart.length)
    randAnsEnd.push(randAnsStart[randAns])
    randAnsStart.splice(randAns, 1)
    }
}

var next = document.querySelector("#next")

function nextQues(){
    askQues()
    questOn = questOn + 1
}

function askQues(){
    randAnsQuestOn()
    document.querySelector("#questionHead").innerHTML = randArrEnd[questOn][0]
    document.querySelector("#ans1").innerHTML = randAnsEnd[0]
    document.querySelector("#ans2").innerHTML = randAnsEnd[1]
    document.querySelector("#ans3").innerHTML = randAnsEnd[2]
    document.querySelector("#ans4").innerHTML = randAnsEnd[3]
}



function startQuiz(){
    questOn=0
    randQues()
    askQues()
    console.log(document)
    questOn = questOn + 1
    document.getElementById("next").setAttribute("style" ,"visibility: visible;");
    document.getElementById("QAnswer").setAttribute('style', 'visibility: visible;');
    document.getElementById("questionHead").setAttribute('style', 'visibility: visible;');
    document.getElementById("start").setAttribute("style" ,"visibility: hidden;");
}


// var questionNextDisplay = document.getElementById("#next")
// console.log(questionNextDisplay.style)


// when start is pressed
var startQ = document.querySelector("#start");
startQ.addEventListener("click", startQuiz);
next.addEventListener("click", nextQues)
//compare choice to correct

//dispaly score

//display time

// view highscore

