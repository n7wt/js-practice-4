//1.
let name = "Amirkhan";
console.log(name);
//

//2.
// У переменной "name" - строчный/символьный тип данных.
//

//3.
const age = 17;
// Числовой тип данных.

//4.
if (age < 15) {
  console.log("Доступ запрещен.");
} else {
  console.log(`Приветствую, ${name}`);
}
//

//5.
function viewMoney() {
  console.log("Вот ваши $10");
}
viewMoney();
//

//6.
function getMoney() {
  let l = "Вот вам $10";
  return l;
}
console.log(getMoney());

//7.
function takeMoney(a) {
  let x = `Вот тебе $${a} `;
  return x;
}
console.log(takeMoney(399));

//8.
function kvadrat() {
  let a = prompt("Введите число, квадрат которого хотите вычислить: ");
  console.log(`Квадрат числа ${a} = ${a * a}`);
}
kvadrat();
//

//9.
function maxNumber(a, b, c) {
  if (a > b && a > c) {
    console.log(`Наибольшим числом среди аргументов является ${a}`);
  } else if (b > a && b > c) {
    console.log(`Наибольшим числом среди аргументов является ${b}`);
  } else if (c > a && c > b) {
    console.log(`Наибольшим числом среди аргументов является ${c}`);
  }
}
maxNumber(5, 134, 87);
//

//10.
function dsk(a, b, c) {
  alert(
    `Результат вычисления дискриминанта D=B'2-4*a*c = ${b * b - 4 * a * c}`
  );
}
dsk(4, 10, 5);
//

//11.
function hard(p, v) {
  if (p % 2 == 0 && v % 2 == 0) {
    console.log(`Оба числа четные. Произведение двух чисел = ${p * v}`);
  } else if (p % 2 !== 0 && v % 2 !== 0) {
    console.log(`Оба числа нечетные. Сумма двух чисел = ${p + v}`);
  } else if (p % 2 !== 0) {
    console.log(`Число ${p} является нечетным.`);
  } else {
    console.log(`Число ${v} является нечетным.`);
  }
}
hard(5, 13);
