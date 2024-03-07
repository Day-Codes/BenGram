const client = require("../main");

setTimeout(() => {
    if(!client || !client.user) {
    console.log("Client Not Login, Process Kill")
        process.kill(1);
    } else {
        console.log("Client Login")
    }
}, 20000); 