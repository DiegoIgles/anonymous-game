// ==========================
// CLAVES STORAGE
// ==========================

const STORAGE_KEYS = {

    PLAYER_NAME:"anonymousPlayer",

    HIGH_SCORE:"anonymousHighScore",

    STATS:"anonymousStats"

};


// ==========================
// GUARDAR NOMBRE
// ==========================

function savePlayer(name){

    localStorage.setItem(

        STORAGE_KEYS.PLAYER_NAME,

        name

    );

}



// ==========================
// CARGAR NOMBRE
// ==========================

function loadPlayer(){

    return localStorage.getItem(

        STORAGE_KEYS.PLAYER_NAME

    ) || "Anonymous";

}



// ==========================
// GUARDAR RECORD
// ==========================

function saveHighScore(score){

    const currentRecord =

    loadHighScore();


    if(score > currentRecord){

        localStorage.setItem(

            STORAGE_KEYS.HIGH_SCORE,

            score

        );

    }

}



// ==========================
// CARGAR RECORD
// ==========================

function loadHighScore(){

    return Number(

        localStorage.getItem(

            STORAGE_KEYS.HIGH_SCORE

        )

    ) || 0;

}



// ==========================
// GUARDAR ESTADÍSTICAS
// ==========================

function saveStats(data){

    localStorage.setItem(

        STORAGE_KEYS.STATS,

        JSON.stringify(data)

    );

}



// ==========================
// CARGAR ESTADÍSTICAS
// ==========================

function loadStats(){

    let stats =

    localStorage.getItem(

        STORAGE_KEYS.STATS

    );

    if(!stats){

        return {

            gamesPlayed:0,

            totalScore:0,

            highestLevel:1

        };

    }

    return JSON.parse(stats);

}



// ==========================
// ACTUALIZAR ESTADÍSTICAS
// ==========================

function updateStats(score,level){

    let stats = loadStats();

    stats.gamesPlayed++;

    stats.totalScore += score;

    stats.highestLevel = Math.max(

        stats.highestLevel,

        level

    );

    saveStats(stats);

}



// ==========================
// LIMPIAR DATOS
// ==========================

function clearStorage(){

    localStorage.removeItem(

        STORAGE_KEYS.PLAYER_NAME

    );

    localStorage.removeItem(

        STORAGE_KEYS.HIGH_SCORE

    );

    localStorage.removeItem(

        STORAGE_KEYS.STATS

    );

}