module.exports = {
  func: async message => {
    message.channel.createMessage({
      embed: {
        description: `Hi, you can invite me using my least-permission-required link [here](https://discordapp.com/oauth2/authorize?client_id=${global.bot.user.id}&scope=bot+applications.commands&permissions=537218176). If you want joinlog functionality (log when people join), additional permissions are required. The invite for that can be accessed [here](https://discordapp.com/oauth2/authorize?client_id=${global.bot.user.id}&scope=bot+applications.commands&permissions=537218224). My configuration dashboard is [here](https://logger.bot). To use guildMemberAdd (log when people join), you MUST grant **manage channels** and **manage server** for it to work (Discord does not send invite info otherwise)!`,
        color: 3553599,
        timestamp: new Date(),
        footer: {
          icon_url: global.bot.user.avatarURL,
          text: `${global.bot.user.username}#${global.bot.user.discriminator}`
        },
        author: {
          name: `${message.author.username}#${message.author.discriminator}`,
          icon_url: message.author.avatarURL
        }
      }
    })
  },
  name: 'invite',
  description: 'Get my invite link.',
  type: 'any',
  category: 'General'
}
