const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const audio = document.getElementById('myaudio');
var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    var dummyAnswer1 = Math.floor(Math.random() * 13);
    var dummyAnswer2 = Math.floor(Math.random() * 13);
    var allAnswers = [];
    var switchAnswers = [];

    // if(num1 == 0){
    //     answer = 0;
    // }
    // else if(num2 == 0){
    //     answer = "DNE";
    // }
    // // else{
    // answer = num1 / num2;
    // answer.toFixed(1);
    // }

    if(num1 != 0 && num2 != 0){
        answer = num1 / num2;
        answer.toFixed(1);        
    }
    else{
        if(num1 == 0){
            answer = 0;
        }
        else{
            answer = "DNE";
        }
    };

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for(i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i+1)),1) [0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];


}

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.onplay();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.onplay();
    }
});

generate_equation();