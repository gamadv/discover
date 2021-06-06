const {inherits} = require('util')
const { EventEmitter } = require('events')

function Person (name){
    this.name = name
}

//target,get from -> 
inherits(Person, EventEmitter)

const draven = new Person("Draven")

draven.on('whoami', () => console.log(`I'm, ${draven.name} and I'll win this match`) )

console.log("Who are you?")
draven.emit("whoami")