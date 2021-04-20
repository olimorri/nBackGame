export function getLetters() {
  return fetch(`http://localhost:3001/letters`).then((response) => response.json());
}
