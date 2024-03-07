const client = require("../main");
const axios = require('axios')
client.on("message", async message => {
  if(message.channel.name === "chat-bot" && !message.author.bot) {    
    let ok = async () => {
  let wow = await axios.get('https://apis-1.daylncode.repl.co/ai-chatbot');
  let ee = wow.data
  return ee
}
let eeValue = await ok();
console.log(eeValue)
 //   let reply = await chat.chat(message.content)

   

setTimeout(function(){
    message.reply(`${eeValue.result}`);
}, 1000);

  }
  });