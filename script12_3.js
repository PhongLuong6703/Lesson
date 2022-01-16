function init () {
    const nope= document.getElementById("nope");
    const button = document.getElementById("change-my-life");
    const paragraph = document.getElementById("status");
    button.onclick = function() {
        paragraph.innerHTML = "Tôi Giàu Sau Khi Học Lập Trình Tại MindX";
    }
    nope.onmouseover = function() {
        nope.style.color = "#ffffff";
        nope.style.backgroundColor = "#ff0000";
    }
    nope.onmouseout = function() {
        nope.style.backgroundColor = "";
        nope.style.color = "";
    }
    nope.onclick = function() {
        let cf = confirm("Bạn có chắc bạn không muốn thay đổi cuộc đời bạn?");
        if (cf) {
            nope.innerHTML = "Tôi rất tiếc";
        }
    }
}

window.addEventListener("load", init());
