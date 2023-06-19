// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

const removeChar = (string, arr) => {
  let newString = string;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string[j] === arr[i]) {
        newString = newString.replace(string[j], "");
      }
    }
  }
  return newString;
};

console.log(removeChar("hello world", ["l", "d", " ", "o"]));
