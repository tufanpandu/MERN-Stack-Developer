const EventEmitter = require("node:events");

const event = new EventEmitter();

// This is Non-blocking or asynchronou 
event.on("subscribe", (channelName)=>{
    console.log(`Thanks for subscribe ${channelName}`);
});



event.emit("subscribe", "TufanPandu");

console.log(`The default maximum number of event listeners are : ${event.getMaxListeners()}`);

//Set the Maximum number of event handaler
event.setMaxListeners(5)
console.log(`The updated maximum number of event listeners are : ${event.getMaxListeners()}`);


/*
Thanks for subscribe TufanPandu
The default maximum number of event listeners are : 10
The updated maximum number of event listeners are : 5
*/