module.exports.run = (client, message, args) => {
    var side = Math.floor(Math.random() * 6) + 1;
    embed = new discord.RichEmbed()
    //TITLE
    .setAuthor("Dice Roll")
    .setColor('#00DCFF')

    //INFO
    .addField("You Rolled The Dice", ":game_die: 6 Sided | You rolled a: **" + side + '**')

    //FOOTER
    .setFooter("Sent by " + client.user.username.toString())
    .setTimestamp();
    msg.channel.send({embed});
}
module.exports.conf = {
    permLevelINT: 1,
    permLevelTXT: "Everyone"
}

module.exports.help = {
    name: "Roll",
    command: "roll",
    description: "Roll a dice and get a number",
    usage: "roll"
};