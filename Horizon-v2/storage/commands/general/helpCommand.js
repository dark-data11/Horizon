module.exports.run = (client, message, args) => {

    var embed;

    embed = new discord.RichEmbed()
    //TITLE
    .setAuthor("Help Requested")
    .setColor('#00DCFF')

    //INFO
    .addField(':white_check_mark: Help Sent', 'Help has been sent to ' + msg.author.username.toString(), true)

    //FOOTER
    .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
    .setTimestamp();
    msg.channel.send({embed});


    //GENERAL COMMANDS SECTION
    embed = new discord.RichEmbed()
    //TITLE
    .setAuthor("General Commands")
    .setColor('#00DCFF')

    //INFO
    .addField('NOTE:', 'By using this bot you agree to the ToS and the Discord ToS and you also agree that we may use your data to make a better bot for you!')
    .addField(config.prefix + 'Help', 'This displays all the commands that this bot offers.')
    .addField(config.prefix + 'Status', 'Displays the bots status like uptime, creation date, shards etc.')
    .addField(config.prefix + 'Info [mentioned_user]', 'Displays info on the mentioned user.')
    .addField(config.prefix + 'Ping', 'Get the bots ping to discord in milliseconds.')
    .addField(config.prefix + 'Invite', 'Get a link to invite the bot to your discord server.')

    //FOOTER
    .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp();
    msg.author.send({embed});


    //MUSIC COMMANDS SECTION
    embed = new discord.RichEmbed()
    //TITLE
    .setAuthor("Music Commands")
    .setColor('#FF6800')

    //INFO
    .addField(config.prefix + 'Play [Link]', 'Adds a song to the queue if a link is supplied. If a link is not supplied it will resume the current song in the queue.')
    .addField(config.prefix + 'Pause', 'Pauses the currently playing song. PERMISSION REQUIRED: ADMINISTRATOR')
    .addField(config.prefix + 'Resume', 'Resumes the last playing song. PERMISSION REQUIRED: ADMINISTRATOR')
    .addField(config.prefix + 'Skip', 'Skips the currently playing song.')
    .addField(config.prefix + 'Volume [Value]', 'Changes the volume either up or down to the specified volume for your current guild.')
    .addField(config.prefix + 'Queue', 'Displays the current guild music queue.')


    //FOOTER
    .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp();
    msg.author.send({embed});


    //FUN COMMANDS SECTION
    embed = new discord.RichEmbed()
    //TITLE
    .setAuthor("Fun Commands")
    .setColor('#FF4444')

    //INFO
    .addField(config.prefix + 'Rps [Input]', 'Plays rock paper scissors with the bot.')
    .addField(config.prefix + '8ball [Question]', 'Gets an answer from our mystical 8ball.')
    .addField(config.prefix + 'Roll', 'Roll a dice and get a number.')
    .addField(config.prefix + 'Gan', 'Play guess a number with the bot.')
    .addField(config.prefix + 'Scramble [Word]', 'Guess the scrambled word. NOTE: Just type `' + config.prefix + 'Scramble` to find out what the scrambled word is.')

    //FOOTER
    .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp();
    msg.author.send({embed});
}

module.exports.conf = {
    permLevelINT: 1,
    permLevelTXT: "Everyone"
}

module.exports.help = {
    name: "Help",
    command: "help",
    description: "Displays all the commands that this bot offers.",
    usage: "help"
};