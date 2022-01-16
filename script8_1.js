console.log("Hello World!");

//Toán tử so sánh
console.log(1==1); //true
console.log("hello" == "hello"); //true

console.log(1>1); //false
console.log(2 >= 1); //true
console.log(2 <= 2); //true

//console.log("a" > "bc"); //?

console.log("so sánh string với number: ","1" == 1); //true
console.log("so sánh string với number (strict): ","1" === 1) //false
console.log("hello" != "world"); //true

//Truthy & Falsy trong JS
console.log("1", Boolean("1")) //true
console.log("Hello World!", Boolean("Hello World!")); //true
console.log("0", Boolean(0)); //false
console.log("1", Boolean("1"));
console.log("null", Boolean(null)); //false
console.log("<string rỗng>", Boolean("")); //false

// Toán tử logic
/*
And (&&)

Toán Hạng 1 | Toán Hạng 2 | Kết quả
------------------------------------
 true       | True        | true
 false      | True        | false
 true       | false       | false
 false      | false       | false

 Or (//)

 Toán Hạng 1 | Toán Hạng 2 | Kết quả
------------------------------------
 true        | True        | true
 false       | True        | true
 true        | false       | true
 false       | false       | false

 Not (!)

 Toán Hạng  | Kết Quả
 ------------------------------------
 true       | false
 false      | true 
*/

console.log("AND", "aa" == "aa" && "bb" =="bc"); //false
console.log("OR", "aa" == "aa" && "bb" !="bc"); //true
console.log("!", !"aa" == "bb"); //true
//Rẽ nhánh. điều kiện
let x = 1;
if (x >= 0) {
    console.log("x lớn hơn 0");
} else {
    console.log("x không lớn hơn 0");
// console.log()
} if (x < 0) {
    console.log("x nhỏ hơn 0");
} else if (x == 0) {
    console.log("x bằng 0")
}
console.log('Sau khi check x');
if ("hello") {
    //true
}

if (0) {
    //false
}

// vòng lặp

for (let i=1; i <= 10; i++) {
    console.log("Đếm", i);
    if (i % 2 == 0) {
        console.log("số chẵn");
    } else {
        console.log("số lẻ");
    }
    if (i === 5) {
        break;
    }
}