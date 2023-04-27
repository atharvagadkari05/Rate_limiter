const dotenv =require('dotenv');

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 4000;


const REDIS_PORT = process.env.REDIS_PORT || 6379;


 const config = {
    server:{
        port: SERVER_PORT
    },
    redis:{
        port: REDIS_PORT
    }
}

exports.config =config; 