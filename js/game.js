// ==========================
// VARIABLES DEL JUEGO
// ==========================

let score = 0;
let level = 1;
let timeLeft = 5;

let currentMission = null;
let timerInterval = null;


// ==========================
// COMANDOS TEMPORALES
// (Luego irán en commands.js)
// ==========================




// ==========================
// ELEMENTOS DOM
// ==========================

const terminalOutput =
document.getElementById(
    "terminal-output"
);

const commandInput =
document.getElementById(
    "command-input"
);

const scoreElement =
document.getElementById(
    "score"
);

const levelElement =
document.getElementById(
    "level"
);

const timerElement =
document.getElementById(
    "timer"
);


// ==========================
// INICIALIZAR
// ==========================

function initializeGame(){

    score=0;
    level=1;

    updateHUD();

    clearTerminal();

    printTerminal(
        "> Conexión establecida..."
    );

    printTerminal(
        "> Bienvenido " +
        player.name
    );

    generateMission();

    commandInput.focus();

}


// ==========================
// REINICIAR
// ==========================

function resetGame(){

    clearInterval(
        timerInterval
    );

    initializeGame();

}


// ==========================
// GENERAR MISIÓN
// ==========================

function generateMission(){

    clearInterval(
        timerInterval
    );

    currentMission =
getRandomMission();

    // dificultad aumenta
    timeLeft=
    Math.max(
        2,
        6-Math.floor(level/2)
    );

    printTerminal("");

    printTerminal(
        "[!] "+
        currentMission.message
    );

    printTerminal(
        "Escribe: "+
        currentMission.command
    );

    startTimer();

}


// ==========================
// TEMPORIZADOR
// ==========================

function startTimer(){

    timerElement.textContent=
    timeLeft;

    timerInterval=
    setInterval(()=>{

        timeLeft--;

        timerElement.textContent=
        timeLeft;

        if(timeLeft<=0){

            clearInterval(
                timerInterval
            );

            printTerminal(
                "[ERROR] Tiempo agotado"
            );

            gameOver();

        }

    },1000);

}


// ==========================
// INPUT
// ==========================

commandInput.addEventListener(
    "keydown",
    (e)=>{

        if(
            e.key!=="Enter"
        ) return;

        let userCommand=
        commandInput.value
        .trim()
        .toLowerCase();

        commandInput.value="";

        checkCommand(
            userCommand
        );

    }
);


// ==========================
// VALIDAR COMANDO
// ==========================

function checkCommand(
    userCommand
){

    printTerminal(
        "> "+userCommand
    );

    if(
        userCommand===
        currentMission.command
    ){

        success();

    }

    else{

        error();

    }

}



// ==========================
// ÉXITO
// ==========================

function success(){

    clearInterval(
        timerInterval
    );

    score += currentMission.points;

    level++;

    updateHUD();

    printTerminal(
        "[OK] Acceso concedido"
    );

    setTimeout(()=>{

        generateMission();

    },800);

}



// ==========================
// ERROR
// ==========================

function error(){

    printTerminal(
        "[ERROR] Comando inválido"
    );

    score=Math.max(
        0,
        score-50
    );

    updateHUD();

}



// ==========================
// GAME OVER
// ==========================

function gameOver(){
   
    clearInterval(
        timerInterval
    );

    printTerminal("");

    printTerminal(
        "[ALERTA] Sistema detectó actividad sospechosa"
    );

    printTerminal(
        "[CONEXIÓN FINALIZADA]"
    );

    setTimeout(()=>{
         saveHighScore(
    score
);

updateStats(
    score,
    level
);   
saveScore(
    player.name,
    score,
    level
);
        showGameOver(
            score
        );

    },1500);

}



// ==========================
// ACTUALIZAR HUD
// ==========================

function updateHUD(){

    scoreElement.textContent=
    score;

    levelElement.textContent=
    level;

}



// ==========================
// TERMINAL
// ==========================

function printTerminal(
    text
){

    const line=
    document.createElement(
        "p"
    );

    line.textContent=
    text;

    terminalOutput.appendChild(
        line
    );

    terminalOutput.scrollTop=
    terminalOutput.scrollHeight;

}



function clearTerminal(){

    terminalOutput.innerHTML=
    "";

}