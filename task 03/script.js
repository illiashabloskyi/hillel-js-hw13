// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

const doubleArray = (m) => {
  if (
    m === "" ||
    isNaN(m) ||
    m === null
  ) {
    return `Щось пішло не так...`;
  }
  let arr = [];
  for (let i = 0; i < m; i++) {
    arr[i] = [];
    const n = parseInt(prompt(`Введіть довжину внутрішнього масиву ${i + 1}:`));
    if (
      n === "" ||
      isNaN(n) ||
      n === null
    ) {
      return `Щось пішло не так...`;
    }
    for (let j = 0; j < n; j++) {
      arr[i][j] = [];
      let elem = prompt(`Введіть елемент ${j + 1} масиву ${i + 1}`);
      arr[i][j].push(elem);
    }
  }
  return arr;
};

const m = parseInt(prompt("Введіть довжину основного масиву:"));

console.log(doubleArray(m));
