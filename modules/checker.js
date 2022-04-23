// const Enquirer = require('enquirer')

module.exports = class Checker {
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

  static advise(answers, checkerTextList) {
    checkerTextList.forEach((checkerText, index) => {
      if (answers[index] === 'いいえ') {
        console.log('           ')
        console.log(`良い習慣のためのアドバイス${index + 1}`)
        console.log(checkerText.advise)
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