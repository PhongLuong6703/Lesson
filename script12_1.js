function sayHello() {
    console.log("Hello World!");
    console.log(this);
}

const btnClickMe2 = document.getElementById("btnClickMe2");
btnClickMe2.onclick = function(event) {
    console.log("Hello Phong!");
    btnClickMe2.innerHTML = "Clicked";
    console.log(this);
    console.log(event.target);
}

let btnClickMe3 = document.getElementById("btnClickMe3");

btnClickMe3.addEventListener("click", function(event) {
    console.log("Hello, this is click me 3");
    console.log(event.target);
});
btnClickMe3.addEventListener("click", function(event) {
    console.log("Hello, this is another listener");
    console.log(event.target);
});
/**
 * addEventListener:
 * - Thêm nhiều hơn 1 listener (chạy nhiều function khi event xảy ra)
 * - Xoá đi listener
 */

const outer = document.getElementById("outer");
outer.onclick = function(event) {
    console.log(event);
}

const todolist = document.getElementById("todolist");
todolist.onclick = function (event) {
    event.target.style.color = 'red';
}

const myForm = document.getElementById("myForm");
myForm.addEventListener("change", function(event) {
    console.log(event)
});
