var inputElement = document.getElementById('resposta');

function checkAnswer1(){
    var answer = 'Bebedouro'
    if(inputElement.value == answer){
        window.location.href = "Journal.html";
    }else{
        alert('Resposta incorreta. Se esforce mais um pouco...');
    }
    
}
function checkAnswer2(){
    var answer = 'Sherlock'
    if(inputElement.value == answer){
        alert('Resposta Correta!');
    }else{
        alert('Resposta incorreta. Se esforce mais um pouco...');
    }
    
}
