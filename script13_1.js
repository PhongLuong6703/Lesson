const myForm = document.getElementById("myForm");
const myWelcomeMsg = document.getElementById("myWelcomeMsg");

localStorage.setItem("hello", JSON.stringify({hello: "world"}));
//JSON.parse()
console.log(JSON.parse(localStorage.getItem("hello")));

//const username = localStorage.getItem("username");
const username = sessionStorage.getItem("username");
console.log(username);
if (username) {
    //User đã đăng nhập
    myWelcomeMsg.innerHTML = `Hello ${username}`;
    myForm.style.display = "none";
} else {
    //User chưa đăng nhập
    myWelcomeMsg.style.display = "none";
}

//Log in
myForm.addEventListener('submit', function(event) {
    //Dừng hành động submit mặc định của form
    event.preventDefault();

    const username = document.getElementById("myUsername").value;
    console.log(username);
    myWelcomeMsg.innerHTML = `Hello ${username}`;
    myWelcomeMsg.style.display = "block";
    myForm.style.display = "none";

    localStorage.setItem("username", username);
    //sessionStorage.setItem("username", username);
});
 //Log out
myWelcomeMsg.addEventListener("click", function() {
    myWelcomeMsg.style.display = "none";
    myForm.style.display = "block";
    //localStorage.removeItem("username");
    //sessionStorage.removeItem("username");
    //localStorage.clear() : Xoá tất cả items
})

/**
 * RAM      |  Storage
 * ---------------------
 * Nhanh    |   Chậm
 *  Đắt     |    Rẻ
 * Tạm Thời | Vĩnh Viễn
 * 
 */