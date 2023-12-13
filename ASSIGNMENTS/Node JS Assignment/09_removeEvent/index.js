const EventEmitter = require("node:events");

const event = new EventEmitter();
console.log("Call event before removeing the event .")

// This is Non-blocking or asynchronou 
event.on("subscribe", (channelName)=>{
    console.log(`Thanks for subscribe ${channelName}`);
});


console.log("Calling Event after remove the event")
event.off("subscribe", (channelName)=>{
    console.log(`Remove the event after subscribe the ${channelName}`);
})
event.emit("subscribe", "TufanPandu");


/*
This is Asynchronous operation



Call event before removeing the event .
Calling Event after remove the event
Thanks for subscribe TufanPandu

*/