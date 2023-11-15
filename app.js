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

const prom = prompt("enter number");
function isEvenOrOdd(n1) {
  return n1 % 2 === 0 ? "even" : "odd";
}

console.log(`${prom} is ${isEvenOrOdd(prom)}`);
