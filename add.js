const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")

const audio = document.getElementById("myaudio")

var answer = 0


function generate_equation() {


    var num1 = Math.floor(Math.random() * 13)
    var num2 = Math.floor(Math.random() * 13)
    var DummyAnswer1 = Math.floor(Math.random() * 13)
    var DummyAnswer2 = Math.floor(Math.random() * 13)

    var allAnswer = []

    var SwitchAnswer = []

    answer = num1 + num2

    document.getElementById("num1").innerHTML = num1
    document.getElementById("num2").innerHTML = num2

    allAnswer = [answer, DummyAnswer1, DummyAnswer2]

    for (i = allAnswer.length; i--;) {
        SwitchAnswer.push(allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0])
    }

    option1.innerHTML = SwitchAnswer[0]
    option3.innerHTML = SwitchAnswer[1]
    option2.innerHTML = SwitchAnswer[2]


}


option1.addEventListener("click", function () {
    if (option1.innerHTML == answer) {
        generate_equation()
    } else {
        audio.play()
    }
})



option2.addEventListener("click", function () {
    if (option2.innerHTML == answer) {
        generate_equation()
    } else {
        audio.play()
    }
})



option3.addEventListener("click", function () {
    if (option3.innerHTML == answer) {
        generate_equation()
    } else {
        audio.play()
    }
})

generate_equation()