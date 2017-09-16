const ytdl = require('ytdl-core');
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
                .addField(':pause_button: Song Paused', '**' + msg.author.username + '** has paused **' + info.title + '**')
        
    
                //FOOTER
                .setFooter("Sent by " + client.user.username.toString())
                .setTimestamp();
                msg.channel.send({embed});
                dispatcher.pause();
            }else{
                embed = new discord.RichEmbed()
                //TITLE
                .setAuthor("Music")
                .setColor('#FF6800')
        
                //INFO
                .addField(':x: Pause Error', 'You do not have permission to pause the music. \nPermission Needed: **ADMINISTRATOR**')
                
        
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
        .addField(':x: Pause Error', 'Either you or the bot is not in a voice channel or \nyou\'re not in the same voice channel as the bot.')
        

        //FOOTER
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
    }
}
module.exports.conf = {
    permLevelINT: 4,
    permLevelTXT: "Administrator"
}

module.exports.help = {
    name: "Pause",
    command: "pause",
    description: "Pauses the currently playing song.",
    usage: "pause"
};