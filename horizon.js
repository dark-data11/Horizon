const Discord         = require('discord.js');
const client          = new Discord.Client();
const rethinkdb       = require('rethinkdb');
const ytdl            = require('ytdl-core');
const fs              = require('fs');
const config          = require('./config.json');
var os                = require('os-utils');
//use the --save option if you are wanting to use chalk, remove this on master
var chalk             = require('chalk');
client.commands       = new Discord.Collection();
require('./storage/util/eventLoader.js')(client);

let loadingTag        = chalk.gray('[') + chalk.greenBright('L') + chalk.gray(']');

let generalTag        = chalk.gray('[') + chalk.greenBright('G') + chalk.gray(']');
let funTag            = chalk.gray('[') + chalk.greenBright('F') + chalk.gray(']');
let musicTag          = chalk.gray('[') + chalk.greenBright('M') + chalk.gray(']');

  ///////////////////////////////
 //  Checking the directories //
///////////////////////////////

fs.readdir('./storage/commands/general/', (err, files) => {
  if(err) console.error(err);

  let jsFiles = files.filter(f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0){
    console.log(`${loadingTag} ${chalk.red('No')} ${chalk.bold('general')} ${chalk.red('commands were found.')}`);
    return;
  }else{
    console.log(`${loadingTag} Loading ${jsFiles.length} general commands.`);
  }
});

fs.readdir('./storage/commands/fun/', (err, files) => {
  if(err) console.error(err);

  let jsFiles = files.filter(f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0){
    console.log(`${loadingTag} ${chalk.red('No')} ${chalk.bold('fun')} ${chalk.red('commands were found.')}`);
    return;
  }else{
    console.log(`${loadingTag} Loading ${jsFiles.length} general commands.`);
  }
});

fs.readdir('./storage/commands/music/', (err, files) => {
  if(err) console.error(err);

  let jsFiles = files.filter(f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0){
    console.log(`${loadingTag} ${chalk.red('No')} ${chalk.bold('music')} ${chalk.red('commands were found.')}`);
    return;
  }else{
    console.log(`${loadingTag} Loading ${jsFiles.length} general commands.`);
  }
});

  //////////////////////////////
 //  Reading the directories //
//////////////////////////////

fs.readdir('./storage/commands/general/', (err, files) => {
  if(err) console.error(err);

  let jsFiles = files.filter(f => f.split(".").pop() === "js");

  jsFiles.forEach((f, i) => {
    let cmds = require(`./storage/commands/general/${f}`);
    console.log(`\n${generalTag} ${chalk.green(cmds.help.name)} has been loaded.`)
    client.commands.set(cmds.help.command, cmds);
  });
});

fs.readdir('./storage/commands/fun/', (err, files) => {
  if(err) console.error(err);

  let jsFiles = files.filter(f => f.split(".").pop() === "js");

  jsFiles.forEach((f, i) => {
    let cmds = require(`./storage/commands/fun/${f}`);
    console.log(`${funTag} ${chalk.green(cmds.help.name)} has been loaded.`)
    client.commands.set(cmds.help.command, cmds);
  });
});

fs.readdir('./storage/commands/music/', (err, files) => {
  if(err) console.error(err);

  let jsFiles = files.filter(f => f.split(".").pop() === "js");

  jsFiles.forEach((f, i) => {
    let cmds = require(`./storage/commands/music/${f}`);
    console.log(`${musiclTag} ${chalk.green(cmds.help.name)} has been loaded.`)
    client.commands.set(cmds.help.command, cmds);
  });
});

client.login(config.token);
