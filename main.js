quiz = [
    // 第１問
    {
        question: 'くりぃむしちゅー上田がおしゃれイズムにて、後ろから着いてきた小学生に言ったひとことは？'
        ,answers: [
            'ストーカーか!',
            'これロッキーの撮影じゃないのよ〜',
            '将来ストーカーになっちゃダメよ',
            'こつぁすげえや'
        ]
        ,correct:'これロッキーの撮影じゃないのよ〜'
    },
    // 第２問
    {
        question: 'リンカーンは大統領になる前の職業は次の中のどれ？'
        ,answers: [
            'ミュージシャン',
            'プロ野球選手',
            'レスラー',
            'バーテンダー'
        ]
        ,correct:'レスラー'
    },
    // 第３問
    {
        question: 'お酢に卵を殻ごといれると卵に起こる現象は次の中のどれ？'
        ,answers: [
            '透明な卵になる',
            '卵が溶けてなくなる',
            '卵が爆発する',
            '卵が石のように硬くなる'
        ]
        ,correct:'透明のな卵になる'
    }
]
const quizLength = quiz.length
let quizIndex = 0
let score = 0



// 選択肢の書き換え
const $button = document.getElementsByTagName('button')

// 問題文の出題関数
const setupQuiz = () => {
    //　問題文の出題
    document.getElementById('js-question').textContent = quiz[quizIndex].question
    // while文を使って同じ文章の繰り返しを避ける
    let buttonIndex = 0
    let buttonLength = $button.length
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
        buttonIndex++
    }
}
setupQuiz()


// ボタンをクリックした時のイベント（if文に正誤判定）
let handlerIndex = 0
while (handlerIndex < $button.length) {
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e)
    })
    handlerIndex++
};

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent ) {
        window.alert('正解！')
        score++
    } else {
        window.alert('残念！')
    }

    quizIndex++

    if(quizIndex < quizLength) {
        // 問題数があればこっちを実行
        setupQuiz()
    } else {
        // 問題数がもうなければこっちを実行
        window.alert('終了！正解数は' + score + '/' + quizLength + 'でした！お疲れ様でした！やり直す場合は更新を行ってください!')
    }
}
