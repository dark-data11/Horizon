module.exports.run = (client, message, args) => {
    if(msg.member.voiceChannel && msg.guild.voiceConnection && msg.member.voiceChannelID == msg.guild.voiceConnection.channel.id){
        var dispatcher = msg.member.voiceChannel.connection.dispatcher;
        var embed;
        var info = ytdl.getInfo(servers[msg.guild.id].queue[0], (err, info) =>{
            if (err) throw err;
            if(msg.member.hasPermission('ADMINISTRATOR')){
                embed = new discord.RichEmbed()
                //TITLE
                .setAuthor("Music")
                .setColor('#FF6800')

                //INFO
                .addField(':arrow_forward: Song Resumed', '**' + msg.author.username + '** has resumed **' + info.title + '**')

                //FOOTER
                .setFooter("Sent by " + client.user.username.toString())
                .setTimestamp();
                msg.channel.send({embed});
                dispatcher.resume();
            }else{
                embed = new discord.RichEmbed()
                //TITLE
                .setAuthor("Music")
                .setColor('#FF6800')
    
                //INFO
                .addField(':x: Pause Error', 'You do not have permission to pause the music. \nPermission Needed: ADMINISTRATOR')
            
    
                //FOOTER
                .setFooter("Sent by " + client.user.username.toString())
                .setTimestamp();
                msg.channel.send({embed});
            }
        });
    }else{
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("Music")
        .setColor('#FF6800')

        //INFO
        .addField(':x: Resume Error', 'Either you or the bot is not in a voice channel or \nyoure not in the same voice channel as the bot.')

        //FOOTER
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
    }
}
module.exports.conf = {
    permLevelINT: 1,
    permLevelTXT: "Everyone"
}

module.exports.help = {
    name: "Resume",
    command: "resume",
    description: "Resumes the last playing song.",
    usage: "resume"
};