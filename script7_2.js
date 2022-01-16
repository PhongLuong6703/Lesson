//output: console.log/alert
//input: prompt("nhap vao")
let toan = prompt("Nhap Vao Diem Toan")
let ly = prompt("Nhap Vao Diem Ly")
let hoa = prompt("Nhap Vao Diem Hoa")

let ave = (Number(toan) + Number(ly) +Number(hoa))/3;
console.log(ave.toFixed(1))

let _number = 9;
//_number++ = 10;
//_number = _number + 1; //<=> _number += 1; _number ++ 1
console.log(_number++)
//tien to: 
//++_number

console.log(_number++ + ++_number + _number++);
/*_number++ = 9;
++_number = 11;*/

//b1: Tao ra 1 ban _number copy=9 (_number++)
//b2: a = _number copy +1
//b3: tra ve a (++_number: a + 1)