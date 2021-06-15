const showQuestions = (index, questions) => {
    process.stdout.write(questions[index] + " > ")
}

module.exports = {
    showQuestions
}