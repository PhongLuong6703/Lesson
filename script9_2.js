/*
Quy tắc đặt tên function: 
  +Không đặt số đầu tiên.
  +Không chứa kí tự đặc biệt (trừ dấu _)
*/
/*
BT: Viết một hàm pow (x, n) trả về x theo lũy thừa n. 
Hay nói cách khác, nhân x với chính nó n lần và trả về kết quả.
x=3 n=4 => 3*3*3*3
*/
function pow(x,n) {
    if (n === 1 ) {
        return x;
    }
    return x * pow(x , n-1);
}

let arr = ['php','java','js'];
console.log(arr[2]);
arr.push('node');
console.log(arr);

arr.splice(1,0,'python');
console.log(arr);

arr.pop();
arr.splice(1,2)
console.log(arr);

//Liệt kê tất cả các số nguyên tố trong mảng này.
//Y/c1: Kiểm tra số nguyên tố
//Y/c2: Liệt kê các số nguyên tố
let arr1 = [2,3,4,7,8,10,15,17];
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    else if (number == 2) {
        return true;
    }
    else if (number > 2) {
        for(let i = 2 ; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
    }
return true
}
console.log(isPrime(4));

function inSNT(arr1) {
    for(let i = 0; i < arr1.length; i++){
        if (isPrime(arr1[i]) == true) {
            console.log(arr1[i]);
        }
    }
}
inSNT(arr1);

function timMin(a,b,c) {
    let min = a;
    return b < min ? b : c < min ? c : b ;
}
console.log(timMin(7,8,9));

function inPut() {
    let inputName = prompt("Nhập Tên Người Dùng:");
    let inputPass = "";
    if (inputName == "Admin") {
        let inputPass = prompt("Nhập Mật Khẩu Người Dùng");
    }
    else if (inputName.length == 0) {
        console.log("canceled");
    }
    else {
        console.log("TKBB")
    }
}