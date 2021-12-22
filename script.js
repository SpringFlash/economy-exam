const container = document.querySelector('ol');

for (const question of questions) {
  const element = document.createElement('li');

  const nameEl = document.createElement('b');
  nameEl.innerHTML = question.name;
  nameEl.addEventListener('click', () => {
    element.classList.toggle('opened');
  });

  const answerEl = document.createElement('span');
  answerEl.innerHTML = question.answer;
  if (!question.answer) {
    nameEl.classList.add('not-answered');
  }

  element.append(nameEl, answerEl);
  container.append(element);
}
