// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function sumAndMid(arr) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      sum += arr[i];
      count += 1;
    }
  }

  return sum / count;
}

const arr = ["a", 1, 2, 3, 4, "b", 5, "f", 6];

console.log(sumAndMid(arr));
