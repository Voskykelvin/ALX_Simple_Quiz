document.addEventListener('DOMContentLoaded', () => {
  // 5. Add an Event Listener to the Submit Button
  const submitBtn = document.getElementById('submit-answer');
  submitBtn.addEventListener('click', checkAnswer);

  // 1. Function Declaration
  function checkAnswer() {
    const correctAnswer = '4';

    // 3. Retrieve User’s Answer using querySelector for checked radio button
    const selected = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selected ? selected.value : null;

    // Get the feedback display element
    const feedbackEl = document.getElementById('feedback');

    let isCorrect = false;

    // 4. Compare User’s Answer with Correct Answer
    if (userAnswer !== null && userAnswer === correctAnswer) {
      isCorrect = true;
    }

    // 8. Displaying Feedback
    if (isCorrect) {
      feedbackEl.textContent = 'Correct! Well done.';
      feedbackEl.style.color = '#28a745';  // green
    } else {
      feedbackEl.textContent = 'That\'s incorrect. Try again!';
      feedbackEl.style.color = '#dc3545';  // red
    }
  }
});
