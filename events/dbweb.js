

// Replace "your_database.db" with the path to your quick.db file
const express = require('express');

const quickdb = require('quick.db');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/data', (req, res) => {
  const data = quickdb.all();
  const concatenatedData = data.map(item => JSON.stringify(item)).join('\n');
  res.render('data', { data: concatenatedData });
});

app.get("/", (req, res) => {
  

 
 res.send("System is fully working!")
});

app.listen(3532, () => {
  console.log('Webpage viewer running on http://localhost:3532');
});

  
const { AutoPoster } = require('topgg-autoposter');
const Topgg = require("@top-gg/sdk");

//const ap = AutoPoster("YOUR-TOPGG-TOKEN", client)
//ap.on('posted', () => {
//  console.log('[TOPGG] :: Server count posted!')
//})

const webhook = new Topgg.Webhook("pen")

app.post("/api/v1/dbl", webhook.listener(async (vote) => {

  const channel = client.channels.cache.get('1115452848495411220')
  const user = client.users.cache.get(vote.user)
  const timestamp = `<t:${Math.floor(Date.now() / 1000) + 43200}:R>`

  const res = await fetch(`https://top.gg/api/bots/1115081520747642910/votes`, {
    method: 'GET',
    headers: { 'Authorization': process.env.top }
  })
   const votes = await res.json()

    const userVotes = votes.filter((votes) => votes.id === vote.user)
    const streak = userVotes.length


    channel.send({ embeds: [
        new EmbedBuilder()
        .setColor('#2b2d31')
        .setTitle('Discoverse gained a vote! 😀')
        .setURL('https://top.gg/bot/1115081520747642910/')
        .setDescription(`Thank you for voting for Discoverse!\nFeel free to [vote again later!](https://top.gg/bot/1115081520747642910/)`)
        .setThumbnail(user?.displayAvatarURL({ dynamic: true }))
        .setFooter({ text: `Discoverse Industries ©️` })
        .setTimestamp()
        .addFields([
            { name: '**Can vote again:**', value: `${timestamp}`, inline: true },
            { name: '**Total votes:**', value: `${votes.length||0}`, inline: true },
            { name: '**Vote Streak:**', value: `${streak}`, inline: true },
        ])
    ], content: `<@${vote.user}> has voted for **Discoverse**!` })

}))
// Retrieve all data from quick.db


