String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

var newword = ['Hello', 'Roasted', 'Horizon', 'Discord', 'Flames', 'People', 'Character', 'Pope', 'Hyper', 'Announcement', 'Goat', 'Boat', 'Music', 'Steel', 'Cars', 'Computer', 'Coding', 'Keyboard', 'House', 'Party', 'Video', 'Camera', 'Wallet', 'Headphones', 'Scramble'];
var firstWordNumber = Math.floor(Math.random() * newword.length) + 1;
var word = newword[firstWordNumber];
module.exports.run = (client, message, args) => {
    var nextWordNumber = Math.floor(Math.random() * newword.length) + 1;
    if(args[0]){
        if(args[0].toLowerCase() == word.toLowerCase()){
            embed = new discord.RichEmbed()
            //TITLE
            .setAuthor("Scramble")
            .setColor('#00DCFF')
    
            //INFO
            .addField(':scroll: Unscrambled Word', 'The unscrambled word is **' + word + '**')
            .addField(':tada: Winner', msg.author.username)
            .addField(':pencil: New Scrambled Word', 'The new scrambled word is **' + newword[nextWordNumber].shuffle() + '**')
    
            //FOOTER
            .setFooter("Sent by " + client.user.username.toString())
            .setTimestamp();
            msg.channel.send({embed});
            word = newword[nextWordNumber];
        }else{
            embed = new discord.RichEmbed()
            //TITLE
            .setAuthor("Scramble")
            .setColor('#00DCFF')
    
            //INFO
            .addField(':x: Incorrect Word', 'The word **' + args[0] + '** was not the word in the scrambler.')
    
            //FOOTER
            .setFooter("Sent by " + client.user.username.toString())
            .setTimestamp();
            msg.channel.send({embed});
        }
    }else{
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("Scramble")
        .setColor('#00DCFF')

        //INFO
        .addField(':scroll: Scrambled Word:', word.shuffle())

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
    name: "Scramble",
    command: "scramble",
    description: "Guess the scrambled word.",
    usage: "scramble <word>"
};