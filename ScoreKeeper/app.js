
const p1 = {
    score : 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    wins: document.querySelector('#p1Wins')
}

const p2 = {
    score : 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    wins: document.querySelector('#p2Wins')
}

btnTable = document.querySelector('#btnTable')

let p1WinCount = 0;
let p2WinCount = 0;

const reset = document.querySelector('#reset');
let playingTo = document.querySelector('#winningScore');

let winningScore = parseInt(playingTo.value);
let gameOver = false;

playingTo.addEventListener('change',function(){
    winningScore = parseInt(playingTo.value); //moglo je se uraditi i sa this.value
    RESET();
})

p1.button.addEventListener('click', function(){
    if(!gameOver){ 
        p1.score++;

        if(p1.score === winningScore){
            gameOver = true;
            p1WinCount++;
            p1.display.style.color = "green"; //moglo se uraditi sa classList add
            p2.display.style.color = "red";
            p1.wins.textContent = p1WinCount;
        } 

        p1.display.textContent = p1.score;
    }
})

p2.button.addEventListener('click', function(){
    if(!gameOver){
        p2.score++;

        if(p2.score === winningScore){
            gameOver = true;
            p2WinCount++;
            p2.display.style.color = "green";
            p1.display.style.color = "red";
            p2.wins.textContent = p2WinCount;
        }

        p2.display.textContent = p2.score;
    }
})

function RESET(){
    gameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.style.color = "black";
    p2.display.style.color = "black";
}

reset.addEventListener('click', function(){
   RESET();
})

btnTable.addEventListener('click',function(){
        p1.wins.textContent = null;
        p2.wins.textContent = null; 

        rowPlayer1.textContent = null;
        p1.button.textContent = "";
        inputName.value = null;
        p2.button.textContent = "";
        rowPlayer2.textContent = null;
        RESET();    
})

const formName = document.querySelector('#formName');
const rowPlayer1 = document.querySelector('#rowPlayer1');
const rowPlayer2 = document.querySelector('#rowPlayer2');
const inputName = document.querySelector('#inputName');


formName.addEventListener('submit',function(e){
    e.preventDefault();
    
    rowPlayer1.textContent = inputName.value;
    p1.button.textContent = `+1 ${inputName.value}`;
})


//-----------------API forma-------------------------//

userBTN = document.querySelector('#userBTN');

userBTN.addEventListener('click',async () => {
    try{
        const res = await fetch("https://api.api-ninjas.com/v1/randomuser",{
            method: "GET",
            headers: {
                'X-Api-Key': 'xCko8X+UOk5NqpcqFQ0dUw==MLhcR4TGomUyAgnw'
            }
        });
        const data = await res.json();
        rowPlayer2.textContent = data.username;
        p2.button.textContent = `+1 ${data.username}`;
    }
    catch(e){
        console.log("Error",e);
    }
});




