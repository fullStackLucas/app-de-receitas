export function filterIgredientsOrMeasures(item, igredientsOrMeasures, callback) {
  const arrayToSet = Object.entries(item)
    .filter((ingrediente) => ingrediente[0].includes(igredientsOrMeasures)
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

export function searchFromLocalStorageById(objToSearch, id) {
  let result = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
  };
  if (JSON.parse(localStorage.getItem(objToSearch))) {
    result = (JSON.parse(localStorage.getItem(objToSearch))[id])
      ? JSON.parse(localStorage.getItem(objToSearch))[id]
      : result;
  }
  return result;
}
