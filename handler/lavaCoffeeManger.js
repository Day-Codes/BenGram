const { CoffeeLava } = require("lavacoffee");
const client = require("..");

const manager = new CoffeeLava({
  balanceLoad: "lavalink",
  send(id, payload) {
    let guild = client.guilds.cache.get(id);
    guild.shard.send(payload);
  },
  // autoPlay: false,
  // autoReplay: true,
  // autoResume: true,
});

// addingg lavalink
manager.add({
  name: "defult",
  url: "65.108.138.236:7215:7215",
  password: "penls",
  secure: false,
  retryAmount: Infinity,
  retryDelay: 3000,
});

module.exports = manager;