function eightballCommand(msg, discord, client, rethinkdb, config){
    var embed;
    if(msg.content.endsWith('?')){
        var ball = Math.floor(Math.random() * 3) + 1;
        var answer = '';
        if(ball == 3){
          //YES
          answer = 'I Believe So!(Yes)';
        }else if(ball == 2){
          //MAYBE
          answer = 'I\'m Not Quite Sure!(Maybe)';
        }else if(ball == 1){
          //NO
          answer = 'I\'m Afraid Not!(No)';
        }
        embed = new discord.RichEmbed()
        //TITLE
        .setAuthor("The Mysterious 8Ball")
        .setColor('#00DCFF')

        //INFO
        .addField("Question", "You asked: " + msg.content.split(' ').splice(1).join(' '))
        .addField(":8ball: Says: ", '**' + answer + '**')

        //FOOTER
        .setFooter("Sent by " + client.user.username.toString())
        .setTimestamp();
        msg.channel.send({embed});
    }else{
      embed = new discord.RichEmbed()
      //TITLE
      .setAuthor("8Ball Error")
      .setColor('#FF0006')

      //INFO
      .addField("Error Details:", "You must ask a question and it must end with a question mark.")

      //FOOTER
      .setFooter("Sent by " + client.user.username.toString())
      .setTimestamp();
      msg.channel.send({embed});
    }
}
module.exports = eightballCommand;