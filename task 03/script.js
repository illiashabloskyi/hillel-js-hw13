// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

const doubleArray = (m, n) => {
  if (
    m === "" ||
    isNaN(m) ||
    m === null ||
    n === "" ||
    isNaN(n) ||
    n === null
  ) {
    return `Щось пішло не так...`;
  }
  let arr = [];
  for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j <= n; j++) {
      arr[i][j] = [];
      let elem = prompt(`Введіть елемент ${j} масиву ${i}`);
      arr[i][j].push(elem);
    }
  }
  return arr;
};

const m = parseInt(prompt("Введіть довжину основного масиву:"));
const n = parseInt(prompt("Введіть довжину внутрішнього масиву:"));

console.log(doubleArray(m, n));
