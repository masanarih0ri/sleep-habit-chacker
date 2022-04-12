// const Enquirer = require('enquirer')

module.exports = class Checker {
  constructor(answers) {
    this.answers = answers
  }

  hi() {
    console.log(this.answers)
  }

  static introMessage() {
    console.log('                      ')
    console.log('======================')
    console.log('睡眠習慣チェッカーをご利用いただきありがとうございます！')
    console.log('睡眠習慣チェッカーは、いくつかの質問に答えるだけで、簡単に自分の睡眠習慣の良し悪しがスコアで表示されます。')
    console.log('また、スコアとともに、より良い睡眠のためのアドバイスが表示されますので、興味を持った方はそのアドバイスを実践してみてください！')
    console.log('それでは、楽しんで！')
    console.log('======================')
    console.log('                      ')
  }

  static advise(answers) {
    const advises = [
      '休日も含めて毎日同じ時間に起きることで、起床の準備を整えるホルモン「コルチゾール」の分泌時間がそろい、目覚めもスッキリするようになります。休日の寝溜めに意味はないので注意しましょう。',
      'カフェインは覚醒のための作用がある一方で、体内で分解され、その量が半分になるまでの時間は2-8時間と言われています。仮にそれが2時間だったとしても、摂取量の1/8になるまで6時間かかることを頭に入れておきましょう。',
      '身体は、体内深部の温度が下がると眠気が起こるようにできています。1度お風呂で体内深部の温度を高めることで、お風呂上がりに体温が下がるタイミングで眠気を誘発させることができます。そのため、1時間以上前に、40度程度のぬるめのお湯に浸かるのがよいとされています。入眠の直前に熱いお風呂につかってしまうと、逆に良くないので気をつけましょう。',
      '食べてから比較的すぐに眠ってしまうと、胃腸の中に食物が残った状態で眠ることになります。そのため、睡眠の質が低下する恐れがあります。お腹が空いてしまい、夜遅くに食事をする場合は、消化の良い食べ物を少量食べるようにしましょう。',
      'お酒は睡眠薬と同じで、飲んだら眠くなります。ただ、この時の睡眠は疲れて眠る睡眠とは別物で、単に鎮静剤を打たれたのと同じ状態になっているだけです。また、アルコールが代謝されて生じるアセトアルデヒドが覚醒作用をもたらすため、途中で目が覚めやすくなり、利尿作用もあるため睡眠が分断されてしまいます。'
    ]
    
    advises.forEach((advise, index) => {
      if (answers[index] === 'いいえ') {
        console.log('           ')
        console.log(`良い習慣のためのアドバイス${index + 1}`)
        console.log(advise)
      }
    })
  }

  static score(answers) {
    console.log(`お疲れ様でした！あなたの睡眠習慣スコアは${this.goodAnswerCount(answers) * 20 }点です！`)
  }

  static goodAnswerCount(answers) {
    return answers.filter(answer => answer === 'はい').length
  }
}