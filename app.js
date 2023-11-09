const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次の内どれ？",
    answers: [
      "スーパーファミコン",
      "PlayStation2",
      "NintendoSwitch",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "HTMLのバージョンで、存在しないのは次の内どれ？",
    answers: ["HTML1.0", "HTML2.0", "HTML3.0", "HTML4.0"],
    correct: "HTML3.0",
  },
  {
    question: "CSSのバージョンで、存在しないのは次の内どれ？",
    answers: [
      "CSS3",
      "Cascading Style Sheets Level 2 Revision 2",
      "CSS5",
      "CSS6",
    ],
    correct: "CSS6",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文と選択肢の書き換えを定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

//正誤判定と次の問題への移行
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解!");
    score++;
  } else {
    window.alert("不正解!");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です!");
  }
};

//クリックしたボタンと答えの正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// ダークモードの実装
const btn = document.querySelector("#btn-mode");

btn.addEventListener("change", () => {
  if (btn.checked == true) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
});
