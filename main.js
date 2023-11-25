//1.要素を取得する
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
//console.log(empties);

//2. ドラッグのトリガー
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
    console.log("start");
    fill.className += " hold";
    fill.className = "invisible";
    setTimeout(() => {

    }, timeout);
}

function dragEnd() {
    console.log("end");
}