// ==========================
// MISIONES Y COMANDOS
// ==========================

const missions = [

    {
        id:1,
        message:"Firewall detectado",
        command:"bypass",
        difficulty:1,
        points:100
    },

    {
        id:2,
        message:"Archivo encriptado",
        command:"decrypt",
        difficulty:1,
        points:100
    },

    {
        id:3,
        message:"Escaneo requerido",
        command:"scan",
        difficulty:1,
        points:100
    },

    {
        id:4,
        message:"Puerto vulnerable encontrado",
        command:"inject",
        difficulty:2,
        points:150
    },

    {
        id:5,
        message:"Acceso protegido",
        command:"override",
        difficulty:2,
        points:150
    },

    {
        id:6,
        message:"Servidor comprometido",
        command:"extract",
        difficulty:2,
        points:150
    },

    {
        id:7,
        message:"Seguridad reforzada",
        command:"disable",
        difficulty:3,
        points:200
    },

    {
        id:8,
        message:"Tráfico sospechoso detectado",
        command:"reroute",
        difficulty:3,
        points:200
    },

    {
        id:9,
        message:"Conexión perdida",
        command:"reconnect",
        difficulty:3,
        points:200
    },

    {
        id:10,
        message:"Paquete corrupto",
        command:"repair",
        difficulty:4,
        points:250
    },

    {
        id:11,
        message:"Administrador rastreando señal",
        command:"mask",
        difficulty:4,
        points:300
    },

    {
        id:12,
        message:"IA defensiva activada",
        command:"shutdown",
        difficulty:5,
        points:500
    }

];


// ==========================
// OBTENER MISIONES SEGÚN
// DIFICULTAD DEL NIVEL
// ==========================

function getAvailableMissions(){

    return missions.filter(
        mission => mission.difficulty <= getDifficulty()
    );

}



// ==========================
// CALCULAR DIFICULTAD
// ==========================

function getDifficulty(){

    if(level <=3){

        return 1;

    }

    if(level <=6){

        return 2;

    }

    if(level <=10){

        return 3;

    }

    if(level <=15){

        return 4;

    }

    return 5;

}



// ==========================
// MISIÓN ALEATORIA
// ==========================

function getRandomMission(){

    let available = 
    getAvailableMissions();

    let randomIndex = 
    Math.floor(
        Math.random() *
        available.length
    );

    return available[
        randomIndex
    ];

}