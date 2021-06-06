// cancel an timeout
const timeOut = 5000
const finished = () => console.log("done")

let timer = setTimeout(finished, timeOut)
console.log("Timeout is comming")
clearTimeout(timer, console.log("Timeout Cleared"))