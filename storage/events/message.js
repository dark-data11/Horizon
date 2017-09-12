var config = require(`../config.json`);
var sql    = require('sqlite');
var chalk  = require('chalk');
var ecoDB  = require('../economy.sqlite');
module.exports = message => {
  //Basics
  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type == "dm" && message.content.startsWith(config.prefix)) return message.channel.send(`Sorry, these commands may only be used within the guild only. Trust me there is a good reason for that :)`)
  if (!message.content.startsWith(config.prefix)) return;

  //this will load the commands
  var cont = message.content.slice(config.prefix.length).split(" ");
  var args = cont.slice(1);
  var cmd  = client.commands.get(cont[0]);
  if(cmd) cmd.run(client, message, args);

  //What was already in the message event minus all the command registration
   if(msg.author.id != client.user.id){
    if(!servers[msg.guild.id]){
      servers[msg.guild.id] = {
        queue: []
      };
    }
    if(!volumes[msg.guild.id]){
      volumes[msg.guild.id] = {
        volume: [1]
      };
    }
    addXP(msg, Discord, client, rethinkdb, config);
    if(msg.channel.type.includes('dm')){
      msg.channel.send('This bot has DM\'s temporarily disabled. Thank you!');
    }
   }
};