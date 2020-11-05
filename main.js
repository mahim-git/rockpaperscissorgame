const game = ()=>{
    let pScore = 0;
    let cScore = 0;
    
    const startGame = ()=>{
        const intro = document.querySelector('.intro');
        const startButton = document.querySelector('.intro button');
        const match = document.querySelector('.match');

        startButton.addEventListener('click', ()=>{
            intro.classList.add('fade-out');
            match.classList.add('fade-in');
        })
    }
    //Play Game
    const playGame = ()=>{
        const playButton = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hand = document.querySelectorAll('.hands img');


        hand.forEach(h=>{
            h.addEventListener('animationend', function(){
                this.style.animation= "";
            });
        })
        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissor'];
        playButton.forEach(option=>{
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(()=>{
                    //Here We compare all the hands
                    compareHand(this.textContent, computerChoice);
                    //Changing images
                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerChoice}.png`
                }, 1200)

                
                //shaker
                playerHand.style.animation ="playerShake 1.2s ease"
                computerHand.style.animation ="computerShake 1.2s ease"
            });
        })
        
    }
    //updateScore
    const updateScore= ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent  = cScore;
    }
    const compareHand = (playerChoice, computerChoice)=>{
        // Winner text change
        const winner = document.querySelector('.winner');
        //Compare Tie
        if(playerChoice===computerChoice){
            winner.textContent= 'It is tie';
            return;
        }
        //compare rock
        if(playerChoice==='rock'){
            if(computerChoice==='scissor'){
                winner.textContent= 'Player Wins';
                pScore++;
                updateScore();
                return;

            }
            else{
                winner.textContent= 'Computer Wins';
                
                cScore++;
                updateScore();
                return;
            }
        }
        //compare paper
        if(playerChoice==='paper'){
            if(computerChoice==='rock'){
                winner.textContent= 'Player Wins';
                
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                
                cScore++;
                updateScore();
                return;
            }
        }
        //compare scissor
        if(playerChoice==='scissor'){
            if(computerChoice==='paper'){
                winner.textContent = 'Player Wins';
                
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                
                cScore++;
                updateScore();
                return;
            }
        }
    }
    //all inner function execution
    startGame();
    playGame();
}
game();