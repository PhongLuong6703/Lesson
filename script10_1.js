console.log("Hello World!");

const arr = [1 , 2 , 3 , 4 , 5];

/*
- Object: key và value (khoá và giá trị)

- Syntax: 
{
    <key1>: <value1>,
    <key2>: <value2>,
}
- Phân Tách Bởi Dấu Phẩy ,
*/

function sayHello() {
    console.log("Hello World!");
}

const obj = {
    name: "Phong",
    age: 20,
    age: 21,
    1: 2,
    tags: ["education", "silicon valley"],
    isChecked: true,
    address: {
        city: "Ha Noi",
        district: "Phu Xuyen",
        street: "Xom Moi",
    },
    sayHello: sayHello,
    sayHello: function() { //anonymous function (function ẩn danh)
        console.log("say hello world!");
    },
};

console.log(typeof obj);
console.log(typeof []);

console.log(obj);

// Lấy giá trị theo key:
// - C1: dot notation => dấu "chấm"
// - C2: bracket notation => dấu "ngoặc vuông"

console.log(obj.name);  // - C1: dot notation => dấu "chấm"
console.log(obj.address);  

console.log(obj[1]); // - C2: bracket notation => dấu "ngoặc vuông"
console.log(obj["age"]);
//Nếu key không tồn tại => undefined
console.log(obj.email);

obj.sayHello();
obj["sayHello"]();

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(i);
}
// for ... in để lặp qua tất cả cá key trong object
for (let key in obj) {
    console.log(key);
    console.log(obj.key);
}

/*
- string, number, boolean, null, undefined (Primitive Datatype - Kiểu dữ liệu nguyên thuỷ)
- object (Reference Datatype - Kiểu dữ liệu tham chiếu)
*/

let x = 0;
let y = 0;
console.log(x === y);
x = 1;
console.log(y);

let foo = {};
let bar = {};
console.log(foo === bar);  //F
let baz = foo;
console.log(baz===foo);  //T
foo.name = "phong";
console.log(baz);

function sayHelloWorld(a) {
    a.age = 12;
}
sayHelloWorld(foo)