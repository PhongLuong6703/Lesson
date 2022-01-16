console.log("Hello World!");
/*
Scope : Phạm Vi
(Phạm vi mà một biến khả dụng)
*/
/*
Block of code: Khối các lệnh, nằm trong dấu {}
*/
let y = 0; // y : global scope : (Biến toàn cục)

if (true) {
    //console.log('True');
    //console.log('More text');
    let x = 1; // x : block scope
    console.log(x);
    console.log(`y : ${y}`)
}
//console.log(x);

/*
- function: Hàm
- Hàm là một đơn vị code thực thi một nhiệm vụ.
- Có khả năng tái sử dụng.
*/
//Khai báo
function sayHello() {
    console.log("Hello C4E 146");
}

//Thực thi
sayHello()
sayHello()
sayHello()

/*
- d, h: Tham số đầu vào (params).
- Được truyền vào khi thực thi function.
- return: Kết quả trả về.
- Tái sử dụng kết quả để tiếp tục tính toán.
- Sau khi gặp return, những dòng lệnh bên dưới sẽ không được thực thi.
*/
function getTriangleArea(d, h) {
    const area = d*h/2;
    console.log("Diện Tích:", area);
    return area;
}

 getTriangleArea(10, 5);
 getTriangleArea(180, 5);
 getTriangleArea(10, 20);
 getTriangleArea(7, 8);

 sumTriangleArea(5, 10, 12, 14);

/*
- hoisting: chạy code trước khi khai báo.
*/

function sumTriangleArea(d1,h1,d2,h2) {
    let area1 = getTriangleArea(d1,h1);
    console.log("area1 ", area1);
    let area2 = getTriangleArea(d2,h2);
    console.log("area2 ", area2);
    console.log("Tổng : ", area1 + area2);  
    return area1 + area2;
}

sumTriangleArea(5, 10, 12, 14);

/*
- Recursive: Đệ quy
*/
function factorial(n) {
    if (n==1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));

/*
- Array: Mảng
*/
let arr = [0, 1, 2, 3, 4, 5];
console.log(arr[3]);

const arr2 = [0, false, "hello", null, undefined, [0,1,2,3]];
console.log(arr2);

/*
- Multi Dimensi0on Array: Mảng đa chiều;
*/

const board = [
    ["X","","0"],
    ["X","0",""],
    ["0","X",""],
]
console.log(board[1][0])

arr.push(6) // Thêm phần tử vào cuối mảng
arr.splice() //Xoá n phần tử ở một vị trí và thêm n phần tử khác vào vị trí đó.

function pow(x,n) {
    if (n === 1) {
        return x;
    }
    return x * pow(x,n-1);
}
console.log(pow(5,4));