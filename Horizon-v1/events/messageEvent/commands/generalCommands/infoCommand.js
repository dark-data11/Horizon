function infoCommand(msg, discord, client, rethinkdb, config){
        var embed;
            if(msg.mentions.users.size == 1){
                var roles = [];
                var member = msg.guild.member(msg.mentions.users.first());
                member.roles.forEach((item) => { roles.push(item); });
                embed = new discord.RichEmbed()
                //TITLE
                .setAuthor("Info On Mentioned Member")
                .setColor('#00DCFF')
            
                //INFO
                .addField('Member Name:', member.displayName, true)
                .addField('Highest Role:', member.highestRole.toString(), true)
                .addField('Member ID:', member.id.toString(), true)
                .addField('Join Date:', member.joinedAt.toLocaleString(), true)
                .addField('Status:', member.presence.status.toString(), true)
                .addField('Roles:', roles.toString(), true)
            
                //FOOTER
                .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setTimestamp();
                msg.channel.send({embed});
            }else{
                embed = new discord.RichEmbed()
                //TITLE
                .setAuthor("Error:")
                .setColor('#FF0006')
            
                //INFO
                .addField(':notepad_spiral: Error Details:', 'You either didnt specify any \nusers or specified too many \nusers please only specify 1 \nmember next time!')
                .addField(':pencil: Format:', config.prefix + 'info [mentioned user]')
            
                //FOOTER
                .setFooter("Sent by: " + client.user.username.toString(), client.user.avatarURL)
                .setTimestamp();
                msg.channel.send({embed});
            }
        }
    module.exports = infoCommand;