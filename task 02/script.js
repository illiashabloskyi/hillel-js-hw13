// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, operand, y) {
  if (
    x === "" ||
    isNaN(x) ||
    x === null ||
    y === "" ||
    isNaN(y) ||
    y === null
  ) {
    return `Щось пішло не так...`;
  }
  switch (operand) {
    case "+":
      return `${x} + ${y} = ${x + y}`;
      break;
    case "-":
      return `${x} - ${y} = ${x - y}`;
      break;
    case "*":
      return `${x} * ${y} = ${x * y}`;
      break;
    case "/":
      return `${x} / ${y} = ${x / y}`;
      break;
    case "%":
      return `${x} % ${y} = ${x % y}`;
      break;
    case "^":
      return `${x} ^ ${y} = ${Math.pow(x, y)}`;
      break;
    default:
      return "Не вірна дія";
  }
}

const x = parseInt(prompt("Введіть перше число"));
const operand = prompt('Введіть дію "+, -, *, /, %, ^"');
const y = parseInt(prompt("Введіть друге число"));

console.log(doMath(x, operand, y));
