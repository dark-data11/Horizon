module.exports.run = (client, message, args) => {
    embed = new discord.RichEmbed()
    //TITLE
    .setAuthor("Ping")
    .setColor('#00DCFF')

    //INFO
    .addField(':ping_pong: You Pinged ' + client.user.username, 'The bot ponged with: **' + parseInt(client.ping) + 'ms**', true)

    //FOOTER
    .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
    .setTimestamp();
    msg.channel.send({embed});
}

module.exports.conf = {
    permLevelINT: 1,
    permLevelTXT: "Everyone"
}

module.exports.help = {
    name: "Ping",
    command: "ping",
    description: "Ping/Pong command. I wonder what this does /sarcasm",
    usage: "ping"
};