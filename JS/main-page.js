document.addEventListener("DOMContentLoaded", () => {
    function getResult(mypick, comp, score) {
        let i = mypick;
        if (comp === 0) {
            if (i === 0) {
                return "Draw!";
            }
            if (i === 1) {
                //score.textContent = Number(score.nodeValue) + 1;  
                return "YOU WIN!";      
            }
            if (i === 2) {
                return "YOU LOSE!";
            }
        }
        if (comp === 1) {
            if (i === 0) {
                return "YOU LOSE!";
            }
            if (i === 1) {
                return "Draw!";
            }
            if (i === 2) {
                return "YOU WIN!";
            }
        }
        if (comp === 2) {
            if (i === 0) {
                return "YOU WIN!";
            }
            if (i === 1) {
                return "YOU LOSE!";
            }
            if (i === 2) {
                return "Draw!";
            }
        }
    }
    const options = ['rock', 'paper', 'scissors'];
    const choicesDiv = document.querySelector(".choices");
    const resultDiv = document.querySelector(".result-board-wrapper");
    const gameOptions = document.querySelectorAll(".choices .coin");

    const yourPick = resultDiv.querySelector(".pick01 .coin");
    const yourPickImages = yourPick.querySelectorAll("img");

    const result = resultDiv.querySelector(".result");
    const winner_text = result.querySelector(".winner-label");

    const computerPick = resultDiv.querySelector(".pick02 .coin");
    const computerPickSelected = resultDiv.querySelector(".pick02");
    const computerPickImages = computerPick.querySelectorAll("img");

    const score = document.querySelector(".score .val");
  
    const playAgain = resultDiv.querySelector(".custom-button");

    gameOptions.forEach((option) => {
        option.addEventListener("click", () => {
            choicesDiv.classList.add("hidden");
            resultDiv.classList.remove("hidden");
            let i;
            for (i = 0; i < 3; i++) {
                if (option.classList.contains(options[i])) {
                    yourPick.classList.add(options[i]);
                    yourPickImages[i].classList.remove("hidden");
                    break;
                }
            }

            let pickRandom = Math.floor(Math.random() * 9999999) % 3;
            computerPickSelected.classList.add("intermediate");
            
            setTimeout(() => {
                computerPickSelected.classList.remove("intermediate");
                computerPick.classList.add(options[pickRandom]);
                computerPickImages[pickRandom].classList.remove("hidden");
                
                
                winner_text.textContent = getResult(i, pickRandom, score);
                if (winner_text.textContent == "YOU WIN!") {
                    yourPick.parentElement.classList.add("winner");
                    score.textContent = Number(score.textContent) + 1;
                }
                else if (winner_text.textContent == "YOU LOSE!"){
                    computerPickSelected.classList.add("winner");
                }
                result.classList.remove("hidden");
            }, 00);
            
        });
    });

    playAgain.addEventListener("click", () => {

        result.classList.add("hidden");

        if (winner_text.textContent == "YOU WIN!") {
            yourPick.parentElement.classList.remove("winner");
        }
        else if (winner_text.textContent == "YOU LOSE!") {
            computerPickSelected.classList.remove("winner");
        }

        for (i = 0; i <3; i++) {
            if (yourPick.classList.contains(options[i])) {
                yourPickImages[i].classList.add("hidden");
                yourPick.classList.remove(options[i]);
                break;
            }
        }

        for (i = 0; i < 3; i++) {
            if (computerPick.classList.contains(options[i])) {
                computerPickImages[i].classList.add("hidden");
                computerPick.classList.remove(options[i]);
                break;
            }
        }

        resultDiv.classList.add("hidden");
        choicesDiv.classList.remove("hidden");
        
    });

    const rulesButton = document.querySelector(".rules");
    const rulesBook = document.querySelector(".rules-tab-wrapper");
    const rulesClose = document.querySelector(".rules-tab-wrapper .close img");
    
    rulesButton.addEventListener('click', () => {
        rulesBook.classList.remove("hidden");
    });

    rulesClose.addEventListener('click', () => {
        rulesBook.classList.add("hidden");
    });

});