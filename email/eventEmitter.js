var event = require('events');
var eventEmitter = new event.EventEmitter();

var myEventHandler = () => {
    console.log("HIIII");
};

eventEmitter.on('Hello', myEventHandler);

eventEmitter.emit('Hello')