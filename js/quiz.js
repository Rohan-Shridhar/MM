(() => {
  'use strict';

  document.querySelectorAll('[data-quiz]').forEach((quiz) => {
    const questions = [...quiz.querySelectorAll('[data-question]')];
    const progress = quiz.querySelector('[data-quiz-progress]');
    const score = quiz.querySelector('[data-quiz-score]');

    const states = questions.map(() => ({ wrong: new Set(), completed: false, earned: false, revealed: false }));

    const updateTotals = () => {
      const completed = states.filter((state) => state.completed).length;
      const earned = states.filter((state) => state.earned).length;
      if (progress) progress.textContent = `${completed} of ${questions.length} answered`;
      if (score) score.textContent = `Score: ${earned} of ${questions.length} correct from your answers`;
    };

    const renderQuestion = (question, state) => {
      const correctIndex = Number(question.dataset.correct);
      const options = [...question.querySelectorAll('[data-option-index]')];
      const feedback = question.querySelector('[data-feedback]');
      const explanation = question.querySelector('[data-explanation]');

      options.forEach((option, index) => {
        option.classList.remove('is-wrong', 'is-correct', 'is-revealed');
        if (!state.wrong.has(index)) option.classList.remove('shake');
        if (state.wrong.has(index)) option.classList.add('is-wrong');
        if (state.completed && index === correctIndex) {
          option.classList.remove('is-wrong');
          option.classList.add('is-correct');
          if (state.revealed) option.classList.add('is-revealed');
        }
        option.disabled = state.completed;
        option.setAttribute('aria-pressed', String(state.completed && index === correctIndex));
      });

      if (feedback) {
        feedback.classList.toggle('is-correct', state.completed);
        feedback.classList.toggle('is-wrong', !state.completed && state.wrong.size > 0);
        feedback.textContent = state.completed
          ? (state.revealed ? 'Answer revealed.' : 'Correct answer.')
          : (state.wrong.size > 0 ? 'Incorrect. Try another option.' : '');
      }
      if (explanation) explanation.hidden = !state.completed;
    };

    quiz.addEventListener('click', (event) => {
      const option = event.target.closest('[data-option-index]');
      if (!option || !quiz.contains(option)) return;
      const question = option.closest('[data-question]');
      const questionIndex = questions.indexOf(question);
      const state = states[questionIndex];
      if (!question || state.completed) return;

      const optionIndex = Number(option.dataset.optionIndex);
      const correctIndex = Number(question.dataset.correct);
      if (optionIndex === correctIndex) {
        state.wrong.clear();
        state.completed = true;
        state.earned = true;
        state.revealed = false;
      } else if (!state.wrong.has(optionIndex)) {
        state.wrong.add(optionIndex);
        option.classList.add('shake');
        option.addEventListener('animationend', () => option.classList.remove('shake'), { once: true });
      }
      renderQuestion(question, state);
      updateTotals();
    });

    quiz.addEventListener('click', (event) => {
      const reset = event.target.closest('[data-reset-all]');
      if (reset && quiz.contains(reset)) {
        states.forEach((state) => {
          state.wrong.clear();
          state.completed = false;
          state.earned = false;
          state.revealed = false;
        });
        questions.forEach((question, index) => renderQuestion(question, states[index]));
        updateTotals();
        return;
      }

      const reveal = event.target.closest('[data-answer-all]');
      if (reveal && quiz.contains(reveal)) {
        states.forEach((state) => {
          state.wrong.clear();
          state.completed = true;
          state.revealed = true;
          // Preserve score already earned; showing the key awards no additional points.
        });
        questions.forEach((question, index) => renderQuestion(question, states[index]));
        updateTotals();
      }
    });

    questions.forEach((question, index) => renderQuestion(question, states[index]));
    updateTotals();
  });
})();
