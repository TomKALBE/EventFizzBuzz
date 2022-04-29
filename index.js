// Import events module
const events = require('events');


// Create an eventEmitter object
const eventEmitter = new events.EventEmitter();

const callBack = (number) => {
   if(number % 5 === 0 && number % 3 === 0)
      console.log("FizzBuzz", number)
   else if(number % 5 === 0)
      console.log("Buzz", number)
   else if(number % 3 === 0)
      console.log("Fizz", number)
}

// Add Event Listeners
eventEmitter.addListener('FizzBuzz', callBack);

// Fire event
eventEmitter.emit('FizzBuzz', 3);
eventEmitter.emit('FizzBuzz', 5);
eventEmitter.emit('FizzBuzz', 15);