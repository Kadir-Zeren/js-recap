console.log("hello js");

// alert("this is alert");
// chose = confirm("are you sure");
console.log("after alert code");

// console.log(chose);

console.warn("this is a warning");
console.error("error");

const pi = 3.14;
console.log(pi);
console.log(typeof pi);

const number1 = "3";
console.log(typeof number1);

const isOpen = true;
console.log(isOpen, typeof isOpen);
let language = "java";
console.log(language, typeof language);

{
  let local = 5;
  local = local + 2;
  console.log(local);
}

var example = 5;
example = 6;

let myVar = 5;

const myVar1 = 6;

const num1 = 10;
const num2 = 69;

const toplam = num1 + num2;

console.log(toplam);

const msg1 = "hello ";
const msg2 = "world!";

const message = msg1 + msg2;

console.log(message);

const firstName = "kadir";
const lastName = "zeren";

console.log(firstName, lastName);

const fullName = firstName + " " + lastName;
console.log(fullName);

const fullName2 = `${firstName} ${lastName}`;

console.log(fullName2);

const num3 = "6";
const num4 = "7";
console.log(num3 + num4);

console.log(num3 + 7);

console.log(7 + num3);

console.log(typeof (8 + num3));

const x = 55;
const y = 44;
console.log(x - y);

const myNum = "1";
console.log(x - myNum);

const yourNum = "one";
console.log(x - yourNum);
k = x - yourNum;
console.log(typeof k);

console.log(x - "a");

let carp = 7;
let carp2 = 9;
console.log(carp * carp2);

console.log("a" * "b");

console.log("a" * 3);

console.log("5" * " 9 ");
console.log(typeof ("5" * "9"));

const bol1 = 81;
const bol2 = 9;

console.log(bol1 / bol2);
console.log(bol1 / "9");
console.log(bol1 / "nine");
console.log(bol1 / 0);
console.log(bol1 / "0");
console.log(-61 / 0);
console.log(0 / 5);
console.log(0 / -5);

console.log(57 / 9);

const mod1 = 57;
const mod2 = 9;

console.log(mod1 % mod2);

console.log(22 % 7);

const my = 967;

const firstN = my % 10;

console.log(firstN);

const secondN = (my % 100) / 10;
console.log(secondN);
const thirdN = my / 100;
console.log(thirdN);

console.log(
  `thirdN: ${Math.trunc(thirdN)}, secondN: ${Math.trunc(
    secondN
  )}, firstN: ${firstN}`
);

const number = 56.78888;

console.log(`${number.toFixed(2)}`);
console.log(`${Math.floor(number)}`);
console.log(`${Math.ceil(number)}`);
console.log(`${Math.trunc(number)}`);
console.log(`${Math.round(number)}`);

const randomNum = Math.random() * 220;
console.log(randomNum);

const us1 = 2;
const us2 = 3;
console.log(us1 ** us2);

let art = 6;
let artNew = art++;

console.log(artNew);
console.log(art);

let newNumber = ++art;
console.log(newNumber);
let nums1 = 14;
let nums2 = 17;
nums2 += nums1;
console.log(nums2);
console.log(num2 == num1);

const a = "a";
console.log(a);
console.log(5 && 0);

// let pro = prompt("sayi gir ");
// console.log(++pro);

const dolar = 1000.3;
const dolarInt = parseFloat(dolar);
console.log(dolarInt);

// const jobTime = prompt("enter your job times");
// let pay = prompt("ennter your pay");

// if (jobTime >= 10) {
//   pay = pay * 1.1;
//   console.log("new pay:", pay);
//   console.log(`new pay:, ${pay}`);
// } else {
//   console.log("sorry :(", pay);
// }
let p = 5;
// console.log(pay > 10 ? "yes" : "no ");

// pay > 10 && (p = 18);

console.log(p);

for (let i = 1; i <= 100; i++) {
  console.log(`${i}. sayi ${i}`);
}
for (let i = 1; i <= 100; i *= 2) {
  console.log(`${i}. sayi ${i}`);
}

// const n = prompt("sayi gir");
// for (let i = 0; i < n; i++) {
//   let j = Math.random();
//   console.log(j);
// }

let s = 1;
while (s <= 10) {
  console.log(s);
  s++;
}

// let nb = prompt("0-100 enter number");

// while (nb < 0 || nb > 100) {
//   nb = prompt("again");
// }
// console.log(nb);

// let nb = prompt("0-100 enter number");
// do {
//   nb = prompt("tekrar");
// } while (nb < 0 || nb > 100);
// console.log(nb);
writeHello();
function writeHello() {
  console.log("hello js");
}

writeHello();
writeHello();
writeHello();

function writeParametre(msg = "sa", year = "as") {
  console.log(msg, year);
}

writeParametre("Hi", "2023");
writeParametre("hola", "2024");
writeParametre("hola");
writeParametre();

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob;
  console.log(`${name} is ${age} years old`);
  return age;
}
calculate("ahmet", 1990);
const age = calculate("ahmet", 1990);
console.log(age);

console.log("ismet's age ", age);

function add(num1, num2) {
  return num1 + num2;
}
const result = add(5, 8);
const result2 = add(3, 2);
console.log(result, result2);

// const prom = prompt("enter number");
// function isEvenOrOdd(n1) {
//   return n1 % 2 === 0 ? "even" : "odd";
// }

// console.log(`${prom} is ${isEvenOrOdd(prom)}`);

const write = function (messag) {
  console.log(messag);
};

write("hello js");

let oddEven = function (nbr) {
  console.log(nbr);
};
oddEven(5);

const square = (num, numm) => num * numm;
const suare = () => console.log("first");

console.log(square(5, 2));

suare();

const findBiggest = (v1, v2, v3) => {
  let biggest = v1;
  if (v2 > v1) {
    biggest = v2;
  }
  if (v3 > v1) {
    biggest = v3;
  }
  return biggest;
};
console.log(findBiggest(9, 8, 7));

const findBiggestShort = (p1, p2, p3) => Math.max(p1, p2, p3);
console.log(findBiggestShort(11, 12, 13));

// const r = prompt("enter r:");
// const h = prompt("enter h:");

// const voulme = (r, h) => Math.PI * r * r * h;
// console.log(voulme(r, h).toPrecision(4));

// const ad = (value1, value2) => value1 + value2;
// const mul = (value1, value2) => value1 * value2;
// const sub = (value1, value2) => value1 - value2;
// const div = (value1, value2) => value1 / value2;
// const compute = (value1, value2, operator) => {
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = ad(value1, value2);

//       break;
//     case "-":
//       result = sub(value1, value2);
//       break;
//     case "*":
//       result = mul(value1, value2);
//       break;
//     case "/":
//       result = div(value1, value2);
//       break;
//     default:
//       alert("incorrect operator");
//       result = "";
//       break;
//   }
//   return result;
// };

// const value1 = prompt("enter value1");
// const value2 = prompt("enter value2");
// const operator = prompt("operator");
// console.log(
//   `${value1}${operator}${value2} ${compute(value1, value2, operator)}`
// );

// const nn1 = prompt("enter number");

// const fakto = (faktor) => {
//   let result = 1;
//   for (let i = faktor; i > 1; i--) {
//     result = i * result;
//   }
//   return result;
// };

// const faktor = prompt("enter faktor");
// console.log(fakto(faktor));

// const recursion = (faktor) => {
//   if (faktor <= 1) {
//     return 1;
//   } else {
//     return faktor * recursion(faktor - 1);
//   }
// };
// console.log(recursion(faktor));

let numbr1 = 3;
console.log(numbr1);

const funk1 = () => {
  numbr1 = 44;
};

funk1();
console.log(numbr1);
