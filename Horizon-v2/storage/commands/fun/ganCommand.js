var numberToGuess = Math.floor(Math.random() * 500) + 1;
var attempts = 0;
module.exports.run = (client, message, args) => {
    if(args[0] && parseInt(args[0]) == numberToGuess){
        var nextNumber = Math.floor(Math.random() * 500) + 1;
        numberToGuess = nextNumber;
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("Guess A Number")
        .setColor('#00DCFF')

        //INFO
        .addField(":question: Guess", "You guessed: **" + parseInt(args[0]) + '**')
        .addField(":hash: Number", 'The number was: ' + '**' + parseInt(args[0]) + '**')
        .addField(":hash: Attempts", 'The amount of guesses was: ' + '**' + attempts + '**')
        .addField(":tada: Winner", 'The winner was: ' + '**' + msg.author.username + '**')

        //FOOTER
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
        attempts = 0;
    }else if(parseInt(args[0]) <= 500 && parseInt(args[0]) >= 0 && args[0]){
        if(parseInt(args[0]) > numberToGuess){
            attempts++;
            embed = new discord.RichEmbed()
            //TITLE
            .setAuthor("Guess A Number")
            .setColor('#00DCFF')
    
            //INFO
            .addField(":question: Guess", "You guessed: **" + parseInt(args[0]) + '**')
            .addField(":hash: Attempts", 'The amount of guesses was: ' + '**' + attempts + '**')
            .addField(":hash: Number", 'The number is **less** than: ' + '**' + parseInt(args[0]) + '**')
    
            //FOOTER
            .setFooter("Sent by " + client.user.username.toString())
            .setTimestamp();
            msg.channel.send({embed});
        }else if(parseInt(args[0]) < numberToGuess){
            attempts++;
            embed = new discord.RichEmbed()
            //TITLE
            .setAuthor("Guess A Number")
            .setColor('#00DCFF')
    
            //INFO
            .addField(":question: Guess", "You guessed: **" + parseInt(args[0]) + '**')
            .addField(":hash: Attempts", 'The amount of guesses was: ' + '**' + attempts + '**')
            .addField(":hash: Number", 'The number is **greater** than: ' + '**' + parseInt(args[0]) + '**')
    
            //FOOTER
            .setFooter("Sent by " + client.user.username.toString())
            .setTimestamp();
            msg.channel.send({embed});
        }
    }else{
        attempts++;
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("Guess A Number")
        .setColor('#00FFFF')

        //INFO
        .addField("Error:", "You must guess using a valid number and the number must be between **0** and **500**.")

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
    name: "Guess a number",
    command: "gan",
    description: "Play guess a number with the bot.",
    usage: "gan"
};