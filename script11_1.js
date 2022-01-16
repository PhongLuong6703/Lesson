/*
- DOM: Document Object Model
- Được sử dụng để truy xuất HTML (hoặc các cấu trúc dạng thẻ)
- Thường được tổ chức dạng cây.
- Quan hệ:
  + Cha - Con
  + Anh - Em
*/

// Query: Truy Xuất
console.log(document.getElementById("btnClickMe"));
console.log(document.getElementById("myParagraph"));

// Sử dụng CSS selector (cần # cho id và . cho class)
console.log(document.querySelector("#myParagraph"));
console.log(document.querySelectorAll(".myParagraph"));

// SỬ dụng class, nhận lại nhiều elements
console.log(document.getElementsByClassName("my-p"));

const btnClickMe = document.getElementById("btnClickMe");
console.log(btnClickMe.id);
console.log(btnClickMe.className);               
const myLink = document.getElementById("myLink");
console.log(myLink.href);

// Update
myLink.href = "example";
myLink.innerHTML = "Google";
myLink.style.backgroundColor = "yellow";

// Tạo ra node con
const myParagraph = document.getElementById("myParagraph");
const myParagraphChild = document.createElement("button");
myParagraphChild.innerHTML = "Like";
myParagraph.appendChild(myParagraphChild);

myParagraphChild.onclick = function() {
    //console.log("new button cliked");
    myParagraphChild.innerHTML = "Liked";
    myParagraph.style.textDecoration = 'line-through';
}

// Xoá node con
myParagraph.removeChild(myParagraphChild);

console.log(myParagraph.parentNode);