const Discord = require('discord.js');
const client = new Discord.Client();
const rethinkdb = require('rethinkdb');
const ytdl = require('ytdl-core');
const fs = require('fs');
const config = require('./config.json');
var os = require('os-utils');

//MESSAGE EVENT
var addXP = require('./events/messageEvent/addXP.js');

//GENERAL COMMANDS
var helpCommand = require('./events/messageEvent/commands/generalCommands/helpCommand.js');
var infoCommand = require('./events/messageEvent/commands/generalCommands/infoCommand.js');
var inviteCommand = require('./events/messageEvent/commands/generalCommands/inviteCommand.js');
var pingCommand = require('./events/messageEvent/commands/generalCommands/pingCommand.js');
var statusCommand = require('./events/messageEvent/commands/generalCommands/statusCommand.js');

//MUSIC COMMANDS
var playCommand = require('./events/messageEvent/commands/musicCommands/playCommand.js');
var pauseCommand = require('./events/messageEvent/commands/musicCommands/pauseCommand.js');
var skipCommand = require('./events/messageEvent/commands/musicCommands/skipCommand.js');
var resumeCommand = require('./events/messageEvent/commands/musicCommands/resumeCommand.js');
var volumeCommand = require('./events/messageEvent/commands/musicCommands/volumeCommand.js');
var queueCommand = require('./events/messageEvent/commands/musicCommands/queueCommand.js');

//FUN COMMANDS
var eightballCommand = require('./events/messageEvent/commands/funCommands/eightballCommand.js');
var ganCommand = require('./events/messageEvent/commands/funCommands/ganCommand.js');
var rollCommand = require('./events/messageEvent/commands/funCommands/rollCommand.js');
var rpsCommand = require('./events/messageEvent/commands/funCommands/rpsCommand.js');
var scrambleCommand = require('./events/messageEvent/commands/funCommands/scrambleCommand.js');

//GUILDEVENTS
var guildCreate = require('./events/guildEvents/guildCreate.js');

//READYEVENTS
var setPresence = require('./events/readyEvent/setPresence.js');
var initializeDB = require('./events/readyEvent/initializeDB.js');

client.on('ready', () => {
  //STATE THAT USER STARTED CORRECTLY
  console.log(`Logged in as ${client.user.tag}!`);

  //CONNECT TO DATABASE
  //initializeDB(rethinkdb);

  //START TIMER FOR PRESENCE UPDATES
  setInterval(() => {
    setPresence(client, config);
  }, 15000);
});

var servers = {};
var volumes = {};
client.on('message', async msg => {
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
    



    /*-------------------------------------------------------------
      ||                                                         ||
      ||                     -=-=-GENERAL-=-=-                   ||
      ||                                                         ||
      -------------------------------------------------------------*/

    //HELP COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'help')){
      helpCommand(msg, Discord, client, rethinkdb, config);
    }

    //INFO COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'info')){
      infoCommand(msg, Discord, client, rethinkdb, config);
    }
    
    //STATUS COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'status')){
      statusCommand(msg, Discord, client, rethinkdb, config, os);
    }

    //INVITE COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'invite')){
      inviteCommand(msg, Discord, client, rethinkdb, config);
    }
    
    //PING COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'ping')){
      pingCommand(msg, Discord, client, config);
    }

    /*-------------------------------------------------------------
      ||                                                         ||
      ||                     -=-=-MUSIC-=-=-                     ||
      ||                                                         ||
      -------------------------------------------------------------*/

    //PLAY COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'play')){
      playCommand(msg, Discord, client, config, servers, ytdl, volumes);
    }

    //PAUSE COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'pause')){
      pauseCommand(msg, Discord, client, config, servers, ytdl);
    }

    //SKIP COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'skip')){
      skipCommand(msg, Discord, client, config, servers, ytdl);
    }

    //VOLUME COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'volume')){
      volumeCommand(msg, Discord, client, config, servers, ytdl, volumes);
    }

    //QUEUE COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'queue')){
      queueCommand(msg, Discord, client, config, servers, ytdl);
    }

    //RESUME COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'resume')){
      resumeCommand(msg, Discord, client, config, servers, ytdl);
    }



    /*-------------------------------------------------------------
      ||                                                         ||
      ||                     -=-=-GAMES-=-=-                     ||
      ||                                                         ||
      -------------------------------------------------------------*/

    //RPS COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'rps')){
      rpsCommand(msg, Discord, client, rethinkdb, config);
    }

    //8BALL COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + '8ball')){
      eightballCommand(msg, Discord, client, config);
    }

    //ROLL COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'roll')){
      rollCommand(msg, Discord, client, config);
    }

    //GUESS A NUMBER COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'gan')){
      ganCommand(msg, Discord, client, rethinkdb, config);
    }

    //SCRAMBLE COMMAND
    else if(msg.content.toLowerCase().startsWith(config.prefix + 'scramble')){
      scrambleCommand(msg, Discord, client, rethinkdb, config);
    }
  }
});

//WHEN HORIZON JOINS A GUILD
client.on("guildCreate", (guild) => {
  guildCreate(guild, rethinkdb);
});

client.login(config.token);
