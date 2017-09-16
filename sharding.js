const Discord = require('discord.js');
const config = require('./config.json');
const Manager = new Discord.ShardingManager('./Horizon-v2/horizon.js', {totalShards: "auto", token: config.token});
console.log('Sharding initialized!');
Manager.spawn();