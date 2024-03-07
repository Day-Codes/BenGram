const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'poll',
    description: 'create a poll!',
    options: [
        {
            name: 'question',
            description: "The question for the poll",
            type: 'STRING',
            required: true
        },
        {
            name: "channel",
            description: "channel for annoucment",
            type: "CHANNEL",
            channelTypes: ["GUILD_TEXT"],
            required: true,
        },
            {
            name: "ping",
            description: "What ping",
            type: "ROLE",
            required: true,
          },
    ],
    cooldown: 20000,
    reqPerm: "NONE",
    args: "<question>",

    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let msg = await interaction.followUp("**Sending Poll**")
        let [ question ] = args
        if(!question.endsWith("?")) question = question+="?"
        const channel = interaction.options.getChannel("channel");      
        let pings = interaction.options.getRole('ping')

        let embedPoll = new MessageEmbed()
        .setTitle(':bar_chart: Poll Time!')
        .setDescription(`► Question: ${question}`)
        .setColor('0x2F3136')
        .setTimestamp()

    

        client.channels.cache.get(channel.id).send({ content: `Poll Made by - ${interaction.user}`, embeds: [embedPoll] })
  
           msg.edit({ content: "Your Poll should be up!" }) 
  
        
        await interactionEmbed.react('🔼')
      //  await interactionEmbed.react('🔽')
    }
}