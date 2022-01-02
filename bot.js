///Here is the dependancies

var Discord = require("discord.js");
var net = require("net");

var discord_client = new Discord.Client();
var web_client = new net.socket();

///Here is all of the datas

var config = require("./datas/config.json");
var logs = require("./datas/logs.txt");

var opportunitys = [];

// main functions

function calculate_next_opportunity(var day_pillars) {
    
    if (config["trading_transactions"["type"]] == 0) { // if the trading transactions type is buy only
        
        
        
    } else if (config["trading_transactions"["type"]] == 1) { // if the trading transactions type is sell only
        
        
        
    } else if (config["trading_transactions"["type"]] == 2) { // of the trading transactions type is buy and sell
        
        
        
    } else { // if the trading transactions type is not 0, 1 or 2 then return error
        
        console.log("Error, the trading transactions type is not buy, sell or buy and sell !");
        
    };
    
};
function calculate_next_opportunitys(var number, var day_pillars) {
    
    if (number != 0 && number <= 5) {
        
        
        
    } else if (number > 5 && number <= 10) {
        
        
        
    } else if (number > 10 && number <= 25) {
        
        
        
    } else {
        
        
        
    };
    
};

///Here is the code of the Bot

discord_client.on(function ("client", dclient) => {
    
    
    
});

web_cient.on(function ("wclient", wclient) => {
    
    if (config["exchange"] == 0) { // if the exchange is coinbase
        
        wclient.connect(`xxx.xxx.xxx.xxx:xxxxx`);
        wclient.send(`${config["user_token"]}`);
        
    } else if (config["exchange"] == 1) { // if the exchange is stormgain
        
        wclient.connect(`xxx.xxx.xxx.xxx:xxxxx`);
        wclient.send(`${config["user_token"]}`);
        
    } else {
        
        wclient.connect();
        
    };
});
