function setPresence(client, config){
    x = parseInt(client.uptime) / 1000;
    seconds = x % 60;
    x /= 60;
    minutes = x % 60;
    x /= 60;
    hours = x % 24;
    x /= 24;
    days = x;

    //NON DEV MODE
    client.user.setPresence({ game: { name: config.prefix + 'help || ' 
    + client.guilds.size.toString() + ' guilds || ' 
    + client.users.size.toString() + ' users || ' 
    + client.voiceConnections.size.toString() + ' voice || uptime: ' 
    + parseInt(days) + 'D ' + parseInt(hours) + 'H ' + parseInt(minutes) + 'M ' + parseInt(seconds) + 'S' + ' || ' 
    + parseInt(client.ping) + ' ping || shards: ' + client.shard.count.toString(), type: 0 } });

    //DEV MODE
    //client.user.setPresence({ game: { name: 'IN DEV MODE', type: 0 } });
  }

  module.exports = setPresence;