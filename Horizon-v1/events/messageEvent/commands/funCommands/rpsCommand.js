function rpsCommand(msg, discord, client, rethinkdb, config){

    const args = msg.content.split(/\s+/g).slice(1);
    if(args[0] && (args[0].toLowerCase() == 'rock' || args[0].toLowerCase() == 'paper' || args[0].toLowerCase() == 'scissors')){
        var rps = Math.floor(Math.random() * 3) + 1;
        var answer = '';
        if(rps == 3){
            answer = ':moyai: Rock!'
        }else if(rps == 2){
            answer = ':pencil: Paper!'
        }else if(rps == 1){
            answer = ':scissors: Scissors!'
        }
        var winner = '';
        if(rps == 1 && args[0].toLowerCase() == 'rock'){
            winner = msg.author.username;
        }else if(rps == 1 && args[0].toLowerCase() == 'paper'){
            winner = client.user.username;
        }else if(rps == 1 && args[0].toLowerCase() == 'scissors'){
            winner = 'It\'s a tie game!';
        }else if(rps == 2 && args[0].toLowerCase() == 'rock'){
            winner = client.user.username;
        }else if(rps == 2 && args[0].toLowerCase() == 'paper'){
            winner = 'It\'s a tie game!';
        }else if(rps == 2 && args[0].toLowerCase() == 'scissors'){
            winner = msg.author.username;
        }else if(rps == 3 && args[0].toLowerCase() == 'rock'){
            winner = 'It\'s a tie game!';
        }else if(rps == 3 && args[0].toLowerCase() == 'paper'){
            winner = msg.author.username;
        }else if(rps == 3 && args[0].toLowerCase() == 'scissors'){
            winner = client.user.username;
        }
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("Rock Paper Scissors")
        .setColor('#00DCFF')
    
        //INFO
        .addField("RPS: ", "You said: " + '**' + args[0].toLowerCase() + '**')
        .addField("RPS: ", 'The Bot Chose: **' + answer + '**')
        .addField("WINNER: ", winner)
    
        //FOOTER
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
    }else{
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor('Error:')
        .setColor('#FF0006')
    
        //INFO
        .addField(':notepad_spiral: Error Details:', 'You either didnt specify a value for RPS or you specified an invalid value.')
        .addField(':pencil: Format:', config.prefix + 'rps [value] Allowed Values: rock, paper, scissors')
    
        //FOOTER
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
    }

}
module.exports = rpsCommand;