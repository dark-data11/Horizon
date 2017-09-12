function volumeCommand(msg, discord, client, config, servers, ytdl, volumes){
    var embed;
    const args = msg.content.split(/\s+/g).slice(1);
    if(msg.member.voiceChannel && msg.guild.voiceConnection && msg.member.voiceChannelID == msg.guild.voiceConnection.channel.id){
        var dispatcher = msg.member.voiceChannel.connection.dispatcher;
    if(args[0] && parseInt(args[0]) <= 100 && parseInt(args[0]) >= 0){
        var info = ytdl.getInfo(servers[msg.guild.id].queue[0], (err, info) =>{
            if (err) throw err;
            embed = new discord.RichEmbed()
            //TITLE
            .setAuthor("Music")
            .setColor('#FF6800')

            //INFO
            .addField(':musical_note: Volume Changed For', info.title)
            .addField(':headphones: Volume Changed', 'The volume was set to be at **' + parseInt(args[0]) + '**%')

            //FOOTER
            .setFooter("Sent by " + client.user.username.toString())
            .setTimestamp();
            msg.channel.send({embed});
        });
        if(parseInt(args[0]) == 100){
            dispatcher.setVolume(1);
            volumes[msg.guild.id].volume[0] = 1;
        }else{
            dispatcher.setVolume(parseInt(args[0]) * 0.01);
            volumes[msg.guild.id].volume[0] = parseInt(args[0]) * 0.01;
        }
    }else{
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("Music")
        .setColor('#FF6800')

        //INFO
        .addField(':x: Volume Error', 'You didnt specify what volume to set the bot to or you didnt specify a correct number. Numbers that are valid are **0-100**.')
        

        //FOOTER
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
    }
    }else{
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("Music")
        .setColor('#FF6800')

        //INFO
        .addField(':x: Volume Error', 'Either you or the bot is not in a voice channel or \nyoure not in the same voice channel as the bot.')
        

        //FOOTER
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
    }
}
module.exports = volumeCommand;