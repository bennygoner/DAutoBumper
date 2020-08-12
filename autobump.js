const Discord = new require("discord.js");
const bot = new Discord.Client();
const config = new require("./config.json");
const TOKEN = config.token;

bot.login(NzQyOTA3Mjg1MzQwNDIyMTc1.XzOaQw.jl5_XdpAQSwRuR0ITfZQ1zk-6no);

bot.on("message", function(message)
{

    if (message.content == 'ab!start'){

      message.channel.send("**Bumping started!**")  

      var interval = setInterval (function ()
            {
              message.channel.send("!bump")
			  message.channel.send("~bump")
			  message.channel.send("py!bump")
			  message.channel.send("y%bump")
			  message.channel.send("y%bump")
			  message.channel.send("ob!bump")
			  message.channel.send("dgp!bump")
			  message.channel.send("*bump")
			  message.channel.send(".bump")
            }, 1200000);

      }

});
