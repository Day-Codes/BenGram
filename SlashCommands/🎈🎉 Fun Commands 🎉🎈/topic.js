const Discord = require('discord.js');


module.exports = {
    name: "topic-obx",


description : "Get a random topic about outer bank.",
options: [],
run: async(client, interaction, args)=> {
   const defaultresponses = ["Is Sarah and JB a perfect couple?","What do you think of topper?","Who your fav charcter?","Who do you think is inlove in obx?","What is your Fav Episode?","What do you think of the iconic Kiss dock scence?","If it was topper and sarah about to die who will you save?","Do you think JB a boy that get blame everything?","What do you think of JB and Sarah Couple?"]


      let embed = new Discord.MessageEmbed()
      .setTitle(`Here is your random Outer bank Topic`)
      .setDescription(`${defaultresponses[Math.floor(Math.random() * defaultresponses.length)]}`)

		interaction.editReply({content: "Here is your Topic", embeds: [embed]})

	}
}