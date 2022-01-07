export default function arrayFilter(string, callback) {
  const arrayToSet = Object.entries(item) // keys vem só chave, value só valor!
    .filter((ingrediente) => ingrediente[0].includes(string)
      && ingrediente[1]);
  callback(arrayToSet);
}
