///Here is the dependancies

var Discord = require("discord.js");
var net = require("net");

///Here is all of the datas

var config = require("./datas/config.json");
var logs = require("./datas/logs.txt");

var dclient = new Discord.Client();
var wclient = new net.socket();

///Here is the code of the Bot

webClient.on(wc => {
    
    wc.connect("", "", `${config["user_token"]}`);
    
});
