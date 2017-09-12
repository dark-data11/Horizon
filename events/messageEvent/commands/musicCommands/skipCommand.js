var votes = [];
function skipCommand(msg, discord, client, config, servers, ytdl){
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
                .addField(':track_next: Song Skipped', '**' + msg.author.username + '** has skipped **' + info.title + '**')

                //FOOTER
                .setFooter("Sent by " + client.user.username.toString())
                .setTimestamp();
                msg.channel.send({embed});
                dispatcher.end();
                votes = [];
            }else{
                if(votes.indexOf(msg.author.id) == -1){
                    votes.push(msg.author.id);
                    embed = new discord.RichEmbed()
                    //TITLE
                    .setAuthor("Music")
                    .setColor('#FF6800')
    
                    //INFO
                    .addField(':track_next: Voted to Skip', '**' + msg.author.username + '** has voted to skip **' + info.title + '**')
                    .addField(':question: Votes', 'Current votes to skip: **' + votes.length + '**', true)
                    .addField(':track_next: Votes Needed', 'Votes needed to skip: **' + Math.ceil(msg.guild.voiceConnection.channel.members.size / 2) + '**', true)
                    
                    //FOOTER
                    .setFooter("Sent by " + client.user.username.toString())
                    .setTimestamp();
                    msg.channel.send({embed});
                    if(votes.length >= Math.ceil(msg.guild.voiceConnection.channel.members.size / 2)){
                        embed = new discord.RichEmbed()
                        //TITLE
                        .setAuthor("Music")
                        .setColor('#FF6800')
        
                        //INFO
                        .addField(':track_next: Song Skipped', 'The channel voted to skip **' + info.title + '**')
        
                        //FOOTER
                        .setFooter("Sent by " + client.user.username.toString())
                        .setTimestamp();
                        msg.channel.send({embed});
                        dispatcher.end();
                        votes = [];
                    }
                }else{
                    embed = new discord.RichEmbed()
                    //TITLE
                    .setAuthor("Music")
                    .setColor('#FF6800')
    
                    //INFO
                    .addField(':x: Skip Error', '**' + msg.author.username + '** you have already voted to skip.')
                    //FOOTER
                    .setFooter("Sent by " + client.user.username.toString())
                    .setTimestamp();
                    msg.channel.send({embed});
                }
            }
        });
    }else{
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("Music")
        .setColor('#FF6800')

        //INFO
        .addField(':x: Skip Error', 'Either you or the bot is not in a voice channel or \nyoure not in the same voice channel as the bot.')

        //FOOTER
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
    }
}
module.exports = skipCommand;