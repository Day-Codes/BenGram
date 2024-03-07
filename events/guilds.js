const client = require("../main");

client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name)
    })