function onRefreshQuiz() {
    document.getElementById("question1Choice1").checked=false;
    document.getElementById("question1Choice2").checked=false;
    document.getElementById("question1Choice3").checked=false;
    document.getElementById("question1Choice4").checked=false;

    document.getElementById("question2Choice1").checked=false;
    document.getElementById("question2Choice2").checked=false;
    document.getElementById("question2Choice3").checked=false;
    document.getElementById("question2Choice4").checked=false;

    document.getElementById("question3Input").value='';

    document.getElementById("question4Input").value='';

    document.getElementById("question5Input").value='';

    document.getElementById("question6Input1").value='';
    document.getElementById("question6Input2").value='';

    document.getElementById("question7Choice1").checked=false;
    document.getElementById("question7Choice2").checked=false;
    document.getElementById("question7Choice3").checked=false;
    document.getElementById("question7Choice4").checked=false;

    document.getElementById("question8Choice1").checked=false;
    document.getElementById("question8Choice2").checked=false;
    document.getElementById("question8Choice3").checked=false;
    document.getElementById("question8Choice4").checked=false;

    document.getElementById("question9Input").value='';

    document.getElementById("question10Choice1").checked=false;
    document.getElementById("question10Choice2").checked=false;
    document.getElementById("question10Choice3").checked=false;
    document.getElementById("question10Choice4").checked=false;
}

function onSubmit(event) {
    event.preventDefault();
    let iCorrectAnswers = 0;

    if(document.getElementById("question1Choice1").checked===true && document.getElementById("question1Choice2").checked ===false && document.getElementById("question1Choice3").checked===false && document.getElementById("question1Choice4").checked===false){
        iCorrectAnswers++;
    }

    if(document.getElementById("question2Choice1").checked===false && document.getElementById("question2Choice2").checked ===false && document.getElementById("question2Choice3").checked===false && document.getElementById("question2Choice4").checked===true){
        iCorrectAnswers++;
    }

    if(document.getElementById("question3Input").value==='Object' || document.getElementById("question3Input").value==='object'){
        iCorrectAnswers++;
    }

    if(document.getElementById("question4Input").value==='<Input/>'){
        iCorrectAnswers++;
    }

    if(document.getElementById("question5Input").value==='SDK' || document.getElementById("question5Input").value==='the SDK'){
        iCorrectAnswers++;
    }

    if(document.getElementById("question6Input1").value==='user input' && document.getElementById("question6Input2").value==='interactions'){
        iCorrectAnswers++;
    }

    if(document.getElementById("question7Choice1").checked===false && document.getElementById("question7Choice2").checked ===true && document.getElementById("question7Choice3").checked===false && document.getElementById("question7Choice4").checked===false){
        iCorrectAnswers++;
    }

    if(document.getElementById("question8Choice1").checked===true && document.getElementById("question8Choice2").checked ===false && document.getElementById("question8Choice3").checked===false && document.getElementById("question8Choice4").checked===false){
        iCorrectAnswers++;
    }

    if(document.getElementById("question9Input").value==='descriptor' || document.getElementById("question9Input").value==='the descriptor'){
        iCorrectAnswers++;
    }

    if(document.getElementById("question10Choice1").checked===false && document.getElementById("question10Choice2").checked ===true && document.getElementById("question10Choice3").checked===false && document.getElementById("question10Choice4").checked===false){
        iCorrectAnswers++;
    }

    document.getElementById('score').innerHTML = iCorrectAnswers + "/10";
    
    document.getElementById("scorePopup").classList.add("openScorePopup");
};

function closePopup(){
    document.getElementById("scorePopup").classList.remove("openScorePopup");
};

export {
    onRefreshQuiz,
    onSubmit,
    closePopup
};