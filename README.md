# Horizon
Horizon is a multi-purpose discord bot coded in Node.js using Discord.js V11.1. Horizon has been created a curated to fit the needs of most users, it has been made open source so that you, the community, can help expand and develop the bot. Feel free to make pull requests, any and all pull requests will be overviewed to have the best possible out come for the bot.

### Invites
----------
**PLEASE BE AWARE THAT HORIZON ONLY HAS __ONE__ INVITE LINK**
To add Horizon to your guild is very simple. You will need to have administration permissions on the server you want to invite the bot to. [Visit the oAuth2 Link](https://discordapp.com/oauth2/authorize/?permissions=53496832&scope=bot&client_id=358501599330435074), select the server, and click Authorize. I've only specified the permissions the bot needs, don't worry.

### Features and Commands
----------
Horizon has a range of different features, these include but are not limited to: Audio streaming (currently limited to youtube urls as of the time of writing this and will be updated soon *09.16.17*), fun games to keep your guild's chat alive and some basic commands for general use. *Some* of the commands included with Horizon:

* `help` Sends a message with a list of all of the current commands and the description.
* `info` Displays info on the mentioned user.
* `status` Retrives general status infomation about Horizon (Uptime, Amount of guilds, Active Shards etc.).
* `8ball` Ask the mysterious 8ball a question and get a response.
* `rps` Play a game of rock paper scissors with the mentioned person.
* `scramble` Try to guess the scrambled word.
* `play` The url after the space will be searched for by the youtube API and added to the guild music queue.
* `pause` Pause the current audio playback.
* `skip` Skips the currently playing song to the next, if it is the last song the playback will conclude.

### How to setup
----------
Horizon is easy and quick to setup.
1) Go to https://discordapp.com/developers/applications/me and get your bots token by clicking on the app, scroll down and click *click to reveal* next to token and copy that
2) Open `config.json` in the main folder of `Horizon-v2` and paste the token from step 1 in between the apostrophes and customise the prefix if needed (Default is >)
3) Make sure you have the latest version of Node.js installed.
4) Open Command Prompt and cd to the directory where you have Horizon stored
5) Run the Horizon.bat file and the bot should start running. You know have a working bot!
