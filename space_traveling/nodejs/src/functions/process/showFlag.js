const {getFlag} = require('./getFlag')

const flag = getFlag("--name")
const greetings = getFlag("--greetings")

console.log(`Hello ${flag}. ${greetings}`)

// To test put on terminal:
// node showFlag --name "Teste" --greetings "Teste2"
