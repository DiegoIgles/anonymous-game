// ==========================
// ELEMENTOS DEL DOM
// ==========================

const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");
const gameOverScreen = document.getElementById("game-over-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const playerNameInput = document.getElementById("player-name");
const playerDisplay = document.getElementById("player-display");


// ==========================
// DATOS DEL JUGADOR
// ==========================

let player = {
    name: "Anonymous"
};


// ==========================
// EVENTOS
// ==========================

startBtn.addEventListener(
    "click",
    startGame
);

restartBtn.addEventListener(
    "click",
    restartGame
);


playerNameInput.addEventListener(
    "keypress",
    (e)=>{

        if(e.key==="Enter"){
            startGame();
        }

    }
);


// ==========================
// INICIAR JUEGO
// ==========================

function startGame(){

    let playerName =
        playerNameInput.value.trim();

    if(playerName===""){
        playerName="Anonymous";
    }

    player.name=playerName;

    playerDisplay.textContent=
        player.name;

    savePlayerName();

    startScreen.classList.add(
        "hidden"
    );

    gameOverScreen.classList.add(
        "hidden"
    );

    gameContainer.classList.remove(
        "hidden"
    );

    // iniciar lógica principal
    initializeGame();

}



// ==========================
// REINICIAR
// ==========================

function restartGame(){

    gameOverScreen.classList.add(
        "hidden"
    );

    gameContainer.classList.remove(
        "hidden"
    );

    resetGame();

}



// ==========================
// GAME OVER
// ==========================

async function showGameOver(
    finalScoreValue
){

    const finalScore =

    document.getElementById(
        "final-score"
    );

    finalScore.textContent =
    finalScoreValue;

    gameContainer.classList.add(
        "hidden"
    );

    gameOverScreen.classList.remove(
        "hidden"
    );

    await loadRanking();

}



// ==========================
// LOCAL STORAGE
// ==========================

function savePlayerName(){

    savePlayer(
        player.name
    );

}


function loadPlayerName(){

    const savedName=
loadPlayer();

    if(savedName){

        player.name=savedName;

        playerNameInput.value=
            savedName;

    }

}



// ==========================
// CARGA INICIAL
// ==========================

window.addEventListener(
"load",
()=>{
    loadPlayerName();

    loadRanking();
});

async function loadRanking(){

    const rankingList =

    document.getElementById(
        "ranking-list"
    );

    if(!rankingList){

        return;

    }

    const players =

    await getTopPlayers();

    rankingList.innerHTML="";

    players.forEach(

        (player,index)=>{

            rankingList.innerHTML +=

            `

            <div class="player-row">

                <span>
                #${index+1}
                </span>

                <span>
                ${player.player_name}
                </span>

                <span>
                ${player.score}
                </span>

            </div>

            `;

        }

    );

}

async function loadRanking(){

    const rankingList =
    document.getElementById(
        "ranking-list"
    );

    const players =
    await getTopPlayers();

    rankingList.innerHTML="";

    players.forEach(
    (player,index)=>{

        rankingList.innerHTML += `

        <div class="player-row">

            <span class="rank-number">
                #${index+1}
            </span>

            <span class="rank-name">
                ${player.player_name}
            </span>

            <span class="rank-score">
                ${player.score}
            </span>

        </div>

        `;

    });

}