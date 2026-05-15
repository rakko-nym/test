const element = document.getElementById('output');
let dices = [null,null,null]  //配列用意
let score = 0
function hanbetsu (){ //関数「配列」
    if (dices[0] === 1 && dices[1] === 1 && dices[2] === 1) { 
    consol("ピンゾロ"); score = 100 ;
}else if (dices[0] === dices[1] && dices[1] === dices[2]){    
    consol(dices[0] + "のゾロ目"); score = 80 + dices[0] ;
}else if (dices.includes(4) && dices.includes(5) && dices.includes(6)){
    consol("シゴロ"); score = 70 ;
}else if (dices[0] === dices[1] || dices[1] === dices[2] || dices[0] === dices[2]){
    if(dices[0] === dices[1]){consol(dices[2] + "の目"); score = 50 + dices[2];};
    if(dices[0] === dices[2]){consol(dices[1] + "の目"); score = 50 + dices[1];};
    if(dices[1] === dices[2]){consol(dices[0] + "の目"); score = 50 + dices[0];};
}else if (dices.includes(1) && dices.includes(2) && dices.includes(3)){
    consol("ヒフミ"); score = -10;
}else {consol("役なし"); score = 0 ; }
}
function huru (){
    for (ii=0;ii<3 && score === 0; ii++){
    for (i=0;i<3;i++){                             //サイを振る
    dices[i] = Math.floor(Math.random()*6)+1;
};
//dices[0] = 2; dices[1] = 2 ; dices[2] = 2;   //デバッグ用 任意の番号にサイを振る
consol(dices);
hanbetsu();
}
}
//プログラム開始
const btn = document.getElementById("click");  //ボタン判定
btn.addEventListener("click", () => {
huru()
const playerScore = score;
consol("↑↑↑You") 
score = 0 ;
huru()
const CPUScore = score;
consol("↑↑↑CPU")

score = 0; //ゲームセット
if (playerScore > CPUScore){consol("YOU WIN")}
if (playerScore < CPUScore){consol("YOU LOSE")}
if (playerScore === CPUScore){consol("DRAW")}
consol("==================================")
});
alert("チンチロリンゲーム")
function consol(i) {
    const target = document.getElementById('output');
    if (target) {
        // <br>を入れると改行されます
        target.innerHTML += i + "<br>"; 
    }
}