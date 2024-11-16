const questions = [
    {
        question: "フィッシングメールの特徴は？",
        options: [
            "送信者が公式なメールアドレス",
            "リンク先が正規のウェブサイト",
            "不審なリンクや添付ファイルが含まれている",
            "個人情報を正当に求められる"
        ],
        correct: 2
    },
    {
        question: "不審なメールを受け取った場合、どうすべきか？",
        options: [
            "すぐに返信する",
            "リンクをクリックする",
            "送信者を確認し、怪しい場合は削除する",
            "パスワードを変更する"
        ],
        correct: 2
    },
    // ここに追加の問題を入力できます
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionData = questions[currentQuestionIndex];

    // 問題と選択肢の表示
    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul>
            ${questionData.options.map((option, index) => `
                <li>
                    <input type="radio" name="answer" value="${index}" id="option${index}">
                    <label for="option${index}">${option}</label>
                </li>
            `).join('')}
        </ul>
    `;
    questionContainer.style.animation = "slideIn 1s ease-out";
}

document.getElementById('next-button').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answerValue = parseInt(selectedAnswer.value);
        if (answerValue === questions[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            document.getElementById('score').innerHTML = `あなたのスコア: ${score} / ${questions.length}`;
            document.getElementById('next-button').disabled = true;
        }
    } else {
        alert('回答を選んでください。');
    }
});

// 初期化
loadQuestion();
