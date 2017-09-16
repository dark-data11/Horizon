function queueCommand(msg, discord, client, config, servers, ytdl){
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
module.exports = queueCommand;