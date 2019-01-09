require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Encendido");
});

//Funciones
function getrandomint() {
return Math.floor(Math.random() * Math.floor(100));
}

//Variabless

//Comandos
client.on("message", (message) => {

  if (message.content.startsWith("@Loggy²#9485")) {
    message.channel.send("¿Qué verga querés? ${message.author.username}");
  } else

  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comm = args.shift().toLowerCase();

  if (comm === "macri") {
    message.channel.send("Gato");
  } else

  if (comm === "ping") {
    message.channel.send("pong!");
  }

  if (comm === "asl") {
    let age = args[0];
    let sex = args[1];
    let location = args[2];
    message.reply("Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?");
  }

  if (comm === "coin") {
    var coin = getrandomint();
    if (coin < 50) {
      message.channel.send("¡Cara!", {files: ["https://vignette2.wikia.nocookie.net/currencies/images/6/68/1pesocoin.png/revision/latest?cb=20111220021841"]})
      var coin = undefined;
    }
    if (coin >= 50) {
      message.channel.send("¡Cruz!", {files: ["https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5lt-YExSZG3oUUWu6RFdAQHaHf%26pid%3D15.1&f=1"]})
      var coin = undefined;
    }
  }
});


client.login(config.token);
