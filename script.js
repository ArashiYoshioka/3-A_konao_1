function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "みそ") {
        result.textContent = "正解！";
    } else if (answerInput === "味噌") {
        result.textContent = "正解！";
    } else {
        result.textContent = "残念...";
    }
}
