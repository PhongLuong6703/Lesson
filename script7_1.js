console.log("Hello, I'm MindX");
console.log("Nice to see you!");
console.log(20);

/*
Biến là 1 khái niệm cơ bản trong JS
Biến được sử dụng để lưu trữ giá trị và tái sử dụng sau này
*/
//let là từ khoá để khai báo 1 biến trong JS
let age = 18;
console.log(age);
age = 28;
console.log(age);
console.log(age + 1);

let address = "Hanoi";
address = "Saigon";
console.log(age, address);

//const được sử dụng để khai báo hằng số
//Hằng số là một biến không thể thay đổi giá trị
const myname = "Phong\""
const g = 9.8;
const pi = 3.14;

//Toán tử toán học
console.log(1 + 1);
console.log(1 - 1);
console.log(2 * 2);
console.log(4 / 2);
console.log(5 % 3);
let sum = 1 + 1;
console.log(sum / 2);
sum = sum + 1
//sum+=1
//sum++

let myText = "Hello world!"
console.log(myText.toUpperCase());
console.log(myText.toLowerCase());
console.log(myText.length)
myText.slice(9, 1)
console.log(myText.slice(4, 11))

const myNewText = "Hello " + myname + ". Nice to see you"
const welcomeText = `Hello ${myname}. Nice to see you` //String Template
console.log(myNewText)
console.log(welcomeText)
console.log(myNewText[0])

/*
Kiểu dữ liệu trong JS

Number: Số
string: Chuỗi
boolean: Đúng/Sai
null: rỗng
undefined: Không xác định
object: đối tượng
Symbol:
*/