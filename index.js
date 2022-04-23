#!/usr/bin/env node

const Enquirer = require('enquirer')
const Checker = require('./modules/checker.js')

const checkerTextList = [
  {
    question: '今日は、昨日と同じくらいの時間に起きましたか？',
    advise: '休日も含めて毎日同じ時間に起きることで、起床の準備を整えるホルモン「コルチゾール」の分泌時間がそろい、目覚めもスッキリするようになります。休日の寝溜めに意味はないので注意しましょう。'
  },
  {
    question: '今日は、午後にカフェインを摂取せずに過ごせましたか？',
    advise: 'カフェインは覚醒のための作用がある一方で、体内で分解され、その量が半分になるまでの時間は2-8時間と言われています。仮にそれが2時間だったとしても、摂取量の1/8になるまで6時間かかることを頭に入れておきましょう。'
  },
  {
    question: '今日は、寝る1時間以上前にお風呂から出ましたか？',
    advise: '身体は、体内深部の温度が下がると眠気が起こるようにできています。1度お風呂で体内深部の温度を高めることで、お風呂上がりに体温が下がるタイミングで眠気を誘発させることができます。そのため、1時間以上前に、40度程度のぬるめのお湯に浸かるのがよいとされています。入眠の直前に熱いお風呂につかってしまうと、逆に良くないので気をつけましょう。'
  },
  {
    question: '今日は、寝る2時間以上前に食事を終えましたか？',
    advise: '食べてから比較的すぐに眠ってしまうと、胃腸の中に食物が残った状態で眠ることになります。そのため、睡眠の質が低下する恐れがあります。お腹が空いてしまい、夜遅くに食事をする場合は、消化の良い食べ物(うどんなど)を少量食べるようにしましょう。'
  },
  {
    question: '今日は、お酒を飲まずに過ごしましたか？',
    advise: 'お酒は睡眠薬と同じで、飲んだら眠くなります。ただ、この時の睡眠は疲れて眠る睡眠とは別物で、単に鎮静剤を打たれたのと同じ状態になっているだけです。また、アルコールが代謝されて生じるアセトアルデヒドが覚醒作用をもたらすため、途中で目が覚めやすくなり、利尿作用もあるため睡眠が分断されてしまいます。'
  },
]

const displayResult = (answer) => {
  const answers = [answer.q1, answer.q2, answer.q3, answer.q4, answer.q5]
  Checker.score(answers)
  Checker.advise(answers, checkerTextList)
}

(async () => {
  await Checker.introMessage()
  const choices = ['はい', 'いいえ']
  const questions = [
    {
      type: 'select',
      name: 'q1',
      message: checkerTextList[0].question,
      choices: choices
    },
    {
      type: 'select',
      name: 'q2',
      message: checkerTextList[1].question,
      choices: choices
    },
    {
      type: 'select',
      name: 'q3',
      message: checkerTextList[2].question,
      choices: choices
    },
    {
      type: 'select',
      name: 'q4',
      message: checkerTextList[3].question,
      choices: choices
    },
    {
      type: 'select',
      name: 'q5',
      message: checkerTextList[4].question,
      choices: choices
    }
  ];
  const answer = await Enquirer.prompt(questions);
  await displayResult(answer)
})();
