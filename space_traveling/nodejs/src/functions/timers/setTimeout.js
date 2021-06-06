// timeout execute with timer set, is a callback function
const timeOut = 3000
const finished = () => console.log("done")

setTimeout(finished, timeOut)
console.log("Timeout is comming")