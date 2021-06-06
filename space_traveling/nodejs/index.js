const ask = require('./src/functions/process/utils/showQuestions');

const questions = [
  'What did I Learn?',
  'What was boring?',
  'What could I do to be better?',
  'What made me happy?',
  'How many people did I help today?',
];

ask.showQuestions(0, questions);

const answers = [];

process.stdin.on('data', (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask.showQuestions(answers.length, questions);
  } else {
    console.log(answers);
    process.exit();
  }
});
// "\n\n" + question + "\n\n" + "> R:" + answer
process.on('exit', () => {
  console.log('Legal, Quad!');
  for (let index = 0; index < questions.length; index++) {
    console.log(`\n\n ${questions[index]} R: ${answers[index]}`);
  }
});
