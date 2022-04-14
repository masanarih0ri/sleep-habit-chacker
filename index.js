#!/usr/bin/env node

const Enquirer = require('enquirer')
const Checker = require('./modules/checker.js')

const displayResult = (answer) => {
  const answers = [answer.q1, answer.q2, answer.q3, answer.q4, answer.q5]
  Checker.score(answers)
  Checker.advise(answers)
}

(async () => {
  await Checker.introMessage()
  const choices = ['はい', 'いいえ']
  const questions = [
    {
      type: 'select',
      name: 'q1',
      message: '今日は、昨日と同じくらいの時間に起きましたか？',
      choices: choices
    },
    {
      type: 'select',
      name: 'q2',
      message: '今日は、カフェインを午後に摂取せずに過ごせましたか？',
      choices: choices
    },
    {
      type: 'select',
      name: 'q3',
      message: '今日は、寝る1時間以上前にお風呂から出ましたか？',
      choices: choices
    },
    {
      type: 'select',
      name: 'q4',
      message: '今日は、寝る2時間以上前に食事を終えましたか？',
      choices: choices
    },
    {
      type: 'select',
      name: 'q5',
      message: '今日は、お酒を飲まずに過ごしましたか？',
      choices: choices
    }
  ];
  const answer = await Enquirer.prompt(questions);
  await displayResult(answer)
})();
