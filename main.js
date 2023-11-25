//1.要素を取得する
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
//console.log(empties);

//2. ドラッグのトリガー
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//4.一つ一つのempty要素を取得
for(const empty of empties) {
    
}

// 3.ドラッグ関数
function dragStart() {
    console.log("start");
    fill.className += " hold";
    setTimeout(() => {
        fill.className = "invisible";
    }, 0);
}

function dragEnd() {
    console.log("end");
    fill.className = "fill";
}