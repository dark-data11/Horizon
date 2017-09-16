var resumeCommand = require('./resumeCommand.js');
const ytdl = require('ytdl-core');
module.exports.run = (client, message, args) => {
    var embed;
    var queue = servers[msg.guild.id].queue;

    if(msg.member.voiceChannel){
        if(args[0] && args[0] != 'undefined' || args[0] != null){
        if(queue.length < 20 && args[0].includes("youtube.com") || args[0].includes('youtu.be')){
            if(msg.guild.voiceConnection){
                if(msg.member.voiceChannelID == msg.guild.voiceConnection.channel.id){
                    //YOURE IN THE SAME CHANNEL
                    embed = new discord.RichEmbed()
                    //TITLE
                    .setAuthor("Music")
                    .setColor('#FF6800')
            
                    //INFO
                    .addField('Song Added To The Queue', 'You added ' + args[0] + ' to the queue.')
                
                    //FOOTER
                    .setFooter("Sent by " + client.user.username.toString())
                    .setTimestamp();
                    msg.channel.send({embed});
                    queue.push(args[0]);
                }else{
                    //YOURE NOT IN THE SAME CHANNEL AS THE BOT
                    embed = new discord.RichEmbed()
                    //TITLE
                    .setAuthor("Music")
                    .setColor('#FF6800')
            
                    //INFO
                    .addField(':x: Play Error', 'You need to be in the same voice channel as the bot in order to control the music.')
                
            
                    //FOOTER
                    .setFooter("Sent by " + client.user.username.toString())
                    .setTimestamp();
                    msg.channel.send({embed});
                }
            }else{
                msg.member.voiceChannel.join();
                queue.push(args[0]);
                playFunction(msg.guild.voiceConnection, msg, queue, ytdl, discord, client, volumes);
            }
        }else{
            embed = new discord.RichEmbed()
            //TITLE
            .setAuthor("Music")
            .setColor('#FF6800')
            
            //INFO
            .addField(':x: Play Error', 'You either didn\'t supply a valid youtube link or the queue was too full. Please try again later.')
            
            //FOOTER
            .setFooter("Sent by " + client.user.username.toString())
            .setTimestamp();
            msg.channel.send({embed});
        }
    }else{
        resumeCommand(msg, discord, client, config, servers, ytdl);
    }
    }
}
module.exports = playCommand;

async function playFunction(connection, msg, queue, ytdl, discord, client, volumes){
    var embed;
    var info = ytdl.getInfo(queue[0], (err, info) =>{
        if (err) throw err;
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("Music")
        .setTitle('Click Here To Watch This Video')
        .setURL('https://www.youtube.com/watch?' + info.video_id)
        .setColor('#FF6800')
    
        //INFO
        .addField(':musical_note: Now Playing', info.title)
        .addField('Video Length:', '**Time:** ' + parseInt(info.length_seconds / 60 / 60) + 'H | ' + parseInt(info.length_seconds / 60) + 'Min | ' + parseInt(info.length_seconds % 60) + 'Sec', true)
        .addField('Views:', info.view_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), true)
        
    
        //FOOTER
        .setThumbnail(info.thumbnail_url)
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
    });
    var dispatcher = connection.playStream(ytdl(queue[0], {format: 'mp3'}));
    dispatcher.setVolume(volumes[msg.guild.id].volume[0]);
    dispatcher.on("end", () => {
        queue.shift();
        if(queue[0]){
            playFunction(connection, msg, queue, ytdl, discord, client, volumes);
        }else{
            connection.disconnect();
            embed = new discord.RichEmbed()
            //TITLE
            .setAuthor("Music")
            .setColor('#FF6800')
        
            //INFO
            .addField(':white_check_mark: Playback Has Finished', 'The music is done playing!')
            
        
            //FOOTER
            .setFooter("Sent by " + client.user.username.toString())
            .setTimestamp();
            msg.channel.send({embed});
        }
    });
}

module.exports.conf = {
    permLevelINT: 1,
    permLevelTXT: "Everyone"
}

module.exports.help = {
    name: "Play",
    command: "play",
    description: "Adds a song to the queue if a link is supplied. If a link is not supplied it will resume the current song in the queue.",
    usage: "play <link>"
};