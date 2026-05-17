// ==========================
// ELEMENTOS
// ==========================

const body = document.body;

const terminal =
document.getElementById(
    "terminal-window"
);


// ==========================
// SACUDIR PANTALLA
// ==========================

function screenShake(
    duration=500
){

    body.classList.add(
        "shake"
    );

    setTimeout(()=>{

        body.classList.remove(
            "shake"
        );

    },duration);

}



// ==========================
// GLITCH VISUAL
// ==========================

function glitchEffect(
    duration=600
){

    terminal.classList.add(
        "glitch"
    );

    setTimeout(()=>{

        terminal.classList.remove(
            "glitch"
        );

    },duration);

}



// ==========================
// TEXTO CORRUPTO
// ==========================

function generateCorruptedText(
    length=15
){

    const chars=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?";

    let result="";

    for(
        let i=0;
        i<length;
        i++
    ){

        let randomChar=

        chars[
            Math.floor(
                Math.random()*
                chars.length
            )
        ];

        result+=randomChar;

    }

    return result;

}



// ==========================
// MENSAJE FALSO EN TERMINAL
// ==========================

function fakeHackMessage(){

    const fakeMessages=[

        "[ALERTA] Intrusión detectada",

        "[ERROR] Kernel corrupto",

        "[WARNING] Paquete perdido",

        "[SYSTEM] Conexión inestable",

        "[ACCESS] Usuario desconocido",

        "[SECURITY] Escaneo iniciado",

        "[WARNING] Memoria comprometida",

        "[UNKNOWN] "+generateCorruptedText()

    ];

    let randomMessage=

    fakeMessages[
        Math.floor(
            Math.random()*
            fakeMessages.length
        )
    ];

    printTerminal(
        randomMessage
    );

}



// ==========================
// ESCRITURA TIPO TERMINAL
// ==========================

function typeText(
    text,
    speed=30
){

    let line=
    document.createElement(
        "p"
    );

    terminalOutput.appendChild(
        line
    );

    let i=0;

    let interval=

    setInterval(()=>{

        line.textContent +=
        text[i];

        i++;

        terminalOutput.scrollTop=
        terminalOutput.scrollHeight;

        if(
            i>=text.length
        ){

            clearInterval(
                interval
            );

        }

    },speed);

}



// ==========================
// EVENTOS ALEATORIOS
// ==========================

function randomEvent(){

    let chance=
    Math.random();

    // 15%

    if(chance<0.15){

        fakeHackMessage();

    }

    // 10%

    if(chance<0.10){

        glitchEffect();

    }

    // 5%

    if(chance<0.05){

        screenShake();

    }

}



// ==========================
// ACTIVAR EVENTOS AUTOMÁTICOS
// ==========================

setInterval(()=>{

    const gameVisible=

    !document
    .getElementById(
        "game-container"
    )
    .classList.contains(
        "hidden"
    );

    if(
        gameVisible
    ){

        randomEvent();

    }

},5000);