const { EventEmitter } = require('events')

const event = new EventEmitter()

event.on("Event started", (message) => {
    console.log('Event listened', message)
})

// Listen just one event 
event.once("Event started", (message) => {
    console.log('Event listened', message)
})

event.emit("Event started", "User")
event.emit("Event started", "?")
event.emit("Event started", "Admin")