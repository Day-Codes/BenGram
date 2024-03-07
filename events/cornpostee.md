const client = require("../main");
const cron = require('cron');
const db = require('quick.db');
const axios = require('axios')


  //let channel = await db.get(`welcome_channel_${member.guild.id}`)
        //if (channel) {
           
      //      member.guild.channels.cache.get(channel).send({ content:`<:join:1001325615389081650> <@${member.user.id}> welcome to **${member.guild.name}**!` });
    let scheduledMessag = new cron.CronJob('* * * * *', async () => {
      let channel = await db.get(`corn_${client.guild.id}`)
        if (channel) {
          
      let ok = async () => {
  let wow = await axios.get('https://apis-1.daylncode.repl.co/corn');
  let ee = wow.data
  return ee
   
}
let eeValue = await ok();
        
      member.guild.channels.cache.get(channel).send({ content:`${eeValue.result}` });
        
        }else {
            return;
        }
        });
        
        // When you want to start it, use:
        scheduledMessag.start()