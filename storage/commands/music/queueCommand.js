module.exports.run = (client, message, args) => {
    var embed;
    var value;
    if(servers[msg.guild.id].queue.toString()){
        value = servers[msg.guild.id].queue.toString();
    }else{
        value = 'The queue is empty!';
    }
    embed = new discord.RichEmbed()
    //TITLE
    .setAuthor("Music")
    .setColor('#FF6800')

    //INFO
    .addField(':notepad_spiral: The Queue', value.split(',').join('\n'))
    

    //FOOTER
    .setFooter("Sent by " + client.user.username.toString())
    .setTimestamp();
    msg.channel.send({embed});
}
module.exports = queueCommand;module.exports.conf = {
    permLevelINT: 1,
    permLevelTXT: "Everyone"
}

module.exports.help = {
    name: "Queue",
    command: "queue",
    description: "Displays the current guild music queue.",
    usage: "queue"
};