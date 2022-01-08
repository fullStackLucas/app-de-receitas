export function arrayFilter(item, string, callback) {
  const arrayToSet = Object.entries(item) // keys vem só chave, value só valor!
    .filter((ingrediente) => ingrediente[0].includes(string)
      && ingrediente[1]);
  callback(arrayToSet);
}

export function checkTarget({ target }) {
  const elementToCheck = target.parentElement;
  console.log(elementToCheck.innerText);
  if (target.checked) {
    elementToCheck.style.textDecoration = 'line-through';
  }
  if (!target.checked) {
    elementToCheck.style.textDecoration = 'none';
  }
}
