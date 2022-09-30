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
randQues()

//Randomize andswers
questOn=0
function randAnsQuestOn() {
    randAnsEnd = []
    randAnsStart = []
    randAnsStart = randArrEnd[questOn][1]
    for( i=0 ; i < Answers1.length;i++){
    randAns = Math.floor(Math.random() * randAnsStart.length)
    randAnsEnd.push(randAnsStart[randAns])
    randAnsStart.splice(randAns, 1)
    }
}

randAnsQuestOn()
console.log(randAnsEnd)

// when start is pressed


//compare choice to correct

//dispaly score

//display time

// view highscore

