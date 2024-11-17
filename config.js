const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV23KqSBT9l37VHEFualWqhpto8IaooFPnoaUbaO5Co2LKf5/CJJU8zMlkeOpq6LVXr7X25hVkOamwiRswegVFSc6Q4nZJmwKDEVBq38cl6AIEKQQjAI11MOTGzcK1yHixLaRqoNUMcp1zuE5MHs2u86yv5cFGj5/BvQuK+pgQ7xvAPcc4cMJAPtWP4RQ15ukl9YMdxjybLmxfVmQvK9X0Nt3qz+DeIkJSkizQixCnuISJiZsVJOXP6F/UbLdE8+m4Z8/Gg/gSXunsoFwNpTHM9TaJrQQvSKSLQpz/jL6upqswYQbhmZ9hZ7m/BGqmutyG1wWhxnuumtg7dTifvyjMG/2KBBlGU4QzSmjzY93xzHlRI8t1WJgmaxPXdb3SOx6fe3uZFSRmSqxIT/fsYjf9GXE0yYvzuGMhfu/rtZMwaqb3Z2HPm0aCkjrELFdyEPdZW4m/El+VH1mJ/4/u29nwxnNr1E8PhtRbjrOk4Jdk/7Ka7CpbIxKCvfmej81L+kP6XMyOL/lxL3SGN3ZyO25nqrSBUxXmL7mdbXA86PWo3pgLZvpJH9K6/I4lMTx+0nPRC2WWJ8jYPScZIsUsMnUeTLGxi0pzqXmHsxPmkrjrWI5uaNss8LhIgo6s2kjTvBt/lm6nlSgWdW+5iJaR/Py4UYybKQIj9t4FJQ5IRUtISZ61e0IXQHS2sVdi+hAX+FpoSpF7sM59a1ezoe4Xrjzwe7ohVX6fhFI/VA/mwjZ702fQBUWZe7iqMJqQiuZlM8dVBQNcgdHfv7sgw1f6ZltbjGO7wCdlRbdZXSQ5RB+efryEnpfXGbWbzFPbBS7BiPncxpSSLKhaFesMll5IzlgNIa3AyIdJhe9dgPCZeLjFA2yDF8nOPdnVUxG56kuyC/e61VIO8+z9E2/gQ54Vno4si554VuKfhhwUnxh22D/2/QGDWQ90AXnvmPbMHw0co+pkV/Us3lS8q5hnT0Diaqv1VhPrYcKb8rjECIxoWeMuOEIvrotNHuPsG9z4ejpMNueQ+DfOwI3N8rExWO43Wal/wX1zFIxeP6eUmqMWTxJWk9lG4EAXpI8AksfNB5IoDEVWGjAjlv+r+nVpdYRF8SvDtIV917w9gDCFJKnACKjzaJcInqpPl6V4jA1D3gayGsjg06OPqL+FSbmu6Rj7GWogPi4qJeGW5mwXX6XBtbA6XJ/XNtUBwXwiD57/BQSMQJiavs5z1aWjWeO4kib5YXHlDUXQ4UwMfGGyy1KHiineLgvt0JE9d02sxlsje5X4vUJUpHMkOfthqjlWWMZXLvR01Xpuq71l5WuxDRJk5B7mJKCDpLreCiyKortvMLvTrWY+FNDmFHWcmT0YB3NNZ6++7URpreOARovV5nC5Tjqqxit7L7pcEn18tUQltN6a8DEEkvfhSx4N8vqeLJ/gxyzLYOvQf3jzNePMvfsF4n04/iFHiuVtj2s3EzgvzdLbUT6gGyHsYY57c7hd0WEtM5LhOiflsgL3++8uKBJI/bxM219vhsqcINAFCayo/NmmG5LiisK0ACNW4lrmfZ7pgrSRi8KmkH50N5Dbx0gScP8HU9LphvcHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "dontaye",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "16582148118",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE : process.env.ANTIDELETE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

