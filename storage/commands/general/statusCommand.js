module.exports.run = (client, message, args) => {

    x = parseInt(client.uptime) / 1000;
    seconds = x % 60;
    x /= 60;
    minutes = x % 60;
    x /= 60;
    hours = x % 24;
    x /= 24;
    days = x;

    var embed = new discord.RichEmbed()
    //TITLE
    .setAuthor(client.user.username.toString() + ' Status:')
    .setColor('#00DCFF')

    //INFO
    .addField('Uptime:', parseInt(days).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'D ' + parseInt(hours) + 'H ' + parseInt(minutes) + 'M ' + parseInt(seconds) + 'S', true)
    .addField('Active Shards:', client.shard.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' Shards', true)
    .addField('Guilds:', client.guilds.size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), true)
    .addField('Connected Users:', client.users.size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), true)
    .addField('Bots Ping:', parseInt(client.ping), true)
    .addField('Total Channels:', parseInt(client.channels.size).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), true)
    .addField('Voice Channels:', parseInt(client.voiceConnections.size).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), true)
    .addField('Operating System:', os.platform(), true)
    .addField('Bot Created On:', client.user.createdAt.toLocaleString(), true)
    .addField('Bot Joined On:', msg.guild.member(client.user.id).joinedAt.toLocaleString(), true)
    .addField('Free Memory:', parseInt(os.freemem()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'MB', true)
    .addField('Total Memory:', parseInt(os.totalmem()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'MB', true)

    //FOOTER
    .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp();
    msg.channel.send({embed});

}
module.exports.conf = {
    permLevelINT: 1,
    permLevelTXT: "Everyone"
}

module.exports.help = {
    name: "Status",
    command: "status",
    description: "Displays the bots status like uptime, creation date, shards etc.",
    usage: "status"
};