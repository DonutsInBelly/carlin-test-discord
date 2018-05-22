const config = require('../config.js');
const Discord = require('discord.js');

class DiscordBot {
  constructor() {
    this.client = new Discord.Client();
  }

  start(port) {
    this.client.on('ready', ()=>{
      console.log('Ready!');
    });

    this.client.on('message', (message)=>{
      if (message.content.substring(0, 6) === '/match') {
        message.channel.send('Ayy lamo');
      }
    });

    this.client.login(config.DISCORD_TOKEN);
  }
}

module.exports = DiscordBot;