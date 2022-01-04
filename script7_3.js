let name="Phong"
alert(`hello ${name} ${name}`)

let _name ="Luong Hong Phong";
let rep = `baby Em nhu bong hoa
Nhung nguoi hai dau phai ta
Em voi mang bao cau ca
Troi ve noi xa xa xa`
//length
console.log(_name.length)
//replace
console.log(_name.replace("Son","Phong"));
console.log(rep.replace(/Em/g,"Trang"));
//find
console.log(rep.search("Em"));
//cut string
//substr
console.log(_name.substr(10,3));
//substring
console.log(_name.substring(0,3))
//gop chuoi

let _new =" Lam";
const _newname1 = _name + " Lam";
const _newname2 = _name + _new;
console.log(_newname1);
console.log(_newname2);
console.log(_name.replace(/n/g,"l"))
console.log(_name.substr(6,4))
console.log(_name.substring(6,10))
console.log(_name.replace(/\s+/g,''))
//regex js
let _number = 9;
console.log(_number++);
console.log(++_number);
console.log(_number++ + ++_number);