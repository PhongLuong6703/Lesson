let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let c = parseFloat(prompt("Nhập số c: "));
let min = a;
if (b<a) {
    min = b;
}
if (c<min) {
    min = c;
}
alert(`Số Nhỏ Nhất Trong 3 Số Là ${min}`);