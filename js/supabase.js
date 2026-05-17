// ==========================
// CONFIGURACIÓN
// ==========================

const SUPABASE_URL =
"https://eaduoykldvryecqvorae.supabase.co";

const SUPABASE_KEY =
"sb_publishable_TGWaXUFuz0RYcY0VQ6qECA_eoq8wSsP";


// ==========================
// INICIALIZAR CLIENTE
// ==========================

const {

    createClient

} = window.supabase;


const supabaseClient =

createClient(

    SUPABASE_URL,

    SUPABASE_KEY

);


// ==========================
// GUARDAR SCORE
// ==========================

async function saveScore(

    playerName,

    score,

    level

){

    try{

        const {error} =

        await supabaseClient
        .from("rankings")
        .insert([{

            player_name:playerName,

            score:score,

            level:level

        }]);

        if(error){

            console.error(
                "Insert Error:",
                error
            );

        }

    }

    catch(error){

        console.error(
            error
        );

    }

}



// ==========================
// OBTENER TOP
// ==========================

async function getTopPlayers(){

    try{

        const {

            data,

            error

        } =

        await supabaseClient
        .from("rankings")
        .select("*")
        .order(
            "score",
            {
                ascending:false
            }
        )
        .limit(10);


        if(error){

            console.error(
                "Ranking Error:",
                error
            );

            return [];

        }

        return data;

    }

    catch(error){

        console.error(
            error
        );

        return [];

    }

}