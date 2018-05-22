const Discord = require('discord.js');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: __dirname + '/../.env'});
}

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

    this.client.login(process.env.DISCORD_TOKEN);
  }
}

module.exports = DiscordBot;