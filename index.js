
let player1 = document.getElementById('name-0');
let player2 = document.getElementById('name-1');
let score0 = document.getElementById('score-0');
let score1 = document.getElementById('score-1');
let current1 = document.getElementById('current-1');
let current0 = document.getElementById('current-0');
let btnNew = document.querySelector('.btn-new');
let btnRol = document.querySelector('.btn-roll');
let btnHold = document.querySelector('.btn-hold');
let foto = document.querySelector('.dice')
let gamePlay;
let temp = 0;
let score = [0,0];
let roundScore;
let active = 0;

let rounds;



function start() {
    player1.textContent = 'player 1';
    player2.textContent = 'player 2';
    resetScore()

}



function resetScore() {
    score0.innerHTML = 0;
    score1.innerHTML = 0;
    current0.innerHTML = 0;
    current1.innerHTML = 0;
    foto.style.display = 'none'
    score[0] = 0;
    score[1] = 0;
    if(active===1){
        document.querySelector(`.player-1-panel`).classList.remove('active')
        document.querySelector(`.player-0-panel`).classList.add('active')
        
    }
}

function rollDice() {
        let dice =  Math.floor(Math.random() *6 +1) ;
        let img = document.querySelector('.dice');
        img.src = 'dice-' + dice + '.png';
        foto.style.display = 'block'
        if(dice === 1) {
            document.querySelector(`#current-${active}`).innerHTML = 0
           changePlayer()
        } else {
            temp+=dice
        }
        document.querySelector(`#current-${active}`).innerHTML = temp

        
        

      
    
}
console.log(img)



function changePlayer() {
    // active === 0 ? active = 1: active = 0;
    // foto.style.display = 'none'
    if(active === 0) {
        document.querySelector(`.player-0-panel`).classList.remove('active')
        document.querySelector(`.player-1-panel`).classList.add('active')
        active =1
    }else {
        
        document.querySelector(`.player-1-panel`).classList.remove('active')
        document.querySelector(`.player-0-panel`).classList.add('active')
        active = 0
    }
        
    
    temp = 0;

    

}


function holdScore() {
    score[active] += temp;
    document.querySelector(`#score-${active}`).innerHTML = score[active];

     if(score[active] >= 81)  {
        alert('WINNER')
    } 

    temp = 0;
    current0.innerHTML = 0;
    current1.innerHTML = 0;

    changePlayer()
}

document.querySelector('.btn-new').addEventListener('click',start);
document.querySelector('.btn-roll').addEventListener('click',rollDice);
document.querySelector('.btn-hold').addEventListener('click',holdScore);

