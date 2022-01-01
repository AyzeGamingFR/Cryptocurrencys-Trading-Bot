///Here is the dependancies

var Discord = require("discord.js");
var net = require("net");

///Here is all of the datas

var config = require("./datas/config.json");
var logs = require("./datas/logs.txt");

var discord_client = new Discord.Client();
var web_client = new net.socket();

// main functions

function calculate_next_opportunity(string last_day_pillars) {
    
    if (config["trading_transactions"["type"]] == 0) { // if the trading transactions type is buy only
        
        
        
    } else if (config["trading_transactions"["type"]] == 1) { // if the trading transactions type is sell only
        
        
        
    } else if (config["trading_transactions"["type"]] == 2) { // of the trading transactions type is buy and sell
        
        
        
    } else { // if the trading transactions type is not 0, 1 or 2 then return error
        
        console.log("Error, the trading transactions type is not buy, sell or buy and sell !");
        
    };
    
};
function calculate_next_opportunitys() {}

///Here is the code of the Bot

discord_lient.on("client", dclient => {
    
    
    
});

web_cient.on(wc => {
    
    wc.connect("", "", `${config["user_token"]}`);
    
});
