/// dependancies needed for the Trading Bot, don't remove them

var Discord = require("discord.js");
var net = require("net");

var discord_client = new Discord.Client();
var internet_client = new net.socket();

/// variables needed as the bot work without problem

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

internet_cient.on(function ("iClient", iclient) => {
    
    if (config["exchange"] == 0) { // if the exchange is coinbase and the size of your token is equal to the coinbase api tokens size
        
        iclient.connect(`${config["coinbase"["ip_address"]]}`);
        iclient.send(`${config["coinbase"["token"]]}`);
        collectPrices(config["coinbase"["ip_address"]]);
        
    } else if (config["exchange"] == 1 && config["crypto.com"["token"]].size() === config["crypto.com"["token_normal_size"]]) { // if the exchange is crypto.com and the size of your token is equal to the crypto.com api tokens size
        
        iclient.connect(`${config["crypto.com"["ip_address"]]}`);
        iclient.send(`${config["crypto.com"["token"]]}`);
        collectPrices(config["crypto.com"["ip_address"]]);
        
    } else if (config["exchange"] == 2 && config["binance"["token"]].size() === config["binance"["token_normal_size"]]) { // if the exchange is binance and the size of your token is equal to the binance api tokens size
        
        iclient.connect(`${config["binance"["ip_address"]]}`);
        iclient.send(`${config["binance"["token"]]}`);
        collectPrices(config["binance"["ip_address"]]);
        
    } else if (config["exchange"] == 3 && config["stormgain"["token"]].size() === config["stormgain"["token_normal_size"]]) { // if the exchange is stormgain and the size of your token is equal to the storgain api tokens size
        
        iclient.connect(`${config["stormgain"["ip_address"]]}`);
        iclient.send(`${config["stormgain"["token"]]}`);
        collectPrices(config["stormgain"["ip_address"]]);
        
    };
    
});
