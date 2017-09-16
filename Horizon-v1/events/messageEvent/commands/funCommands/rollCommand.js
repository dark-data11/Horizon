function rollCommand(msg, discord, client, rethinkdb, config){
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
module.exports = rollCommand;