// Import events module
const events = require('events');


// Create an eventEmitter object
const eventEmitter = new events.EventEmitter();

const callBack = (number) => {
   if(number % 5 === 0)
      console.log("Buzz")
}

// Add Event Listeners
eventEmitter.addListener('FizzBuzz', callBack);

// Fire event
eventEmitter.emit('FizzBuzz', 5);