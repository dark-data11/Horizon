function inviteCommand(msg, discord, client, rethinkdb, config){
    embed = new discord.RichEmbed()
    //TITLE
    .setAuthor("So you want an invite huh?")
    .setColor('#00DCFF')

    //INFO
    .addField('NOTE:', 'This bot stores user data so if you do not agree with this please do not invite it.')
    .addField('Invite Link:', 'https://discordapp.com/oauth2/authorize?client_id=350530315342577664&scope=bot&permissions=8')

    //FOOTER
    .setFooter("Sent by " + client.user.username.toString())
    .setTimestamp();
    msg.channel.send({embed});
}
module.exports = inviteCommand;