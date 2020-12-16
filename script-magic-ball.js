let answers = [
  'Maybe - Может быть', 'Certainly not - Конечно, нет', 'I hope so - Надеюсь, что да', 'Not in your wildest dreams - Не в ваших самых смелых мечтах',
  'There is a good chance - Есть хороший шанс', 'Quite likely - Вполне вероятно', 'I think so - Думаю, да', 'I hope not - Надеюсь, что нет',
  'I hope so - Я надеюсь, да', 'Never! - Никогда!', 'Ahaha! Really?!? - Ахаха! В самом деле?!? ', 'Yes - Да', 'No - Нет', 'The future is bleak - Мрачное будущее',
  'The future is uncertain - Будущее неопределено', 'I would rather not say - Я бы так не сказал', 'Who cares? - Какая разница?',
  'Possibly - Возможно', 'Never, ever, ever - Никогда, никогда, никогда', 'There is a small chance - Есть небольшой шанс'];

document.getElementById('answerButton').onclick = function () {
let answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};

