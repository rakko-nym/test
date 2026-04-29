const number = Math.floor(Math.random()*100)+1 ;
let num = null;
let count = 0 ;
function numset () {
    num = prompt("数値を入力してください");
    num = Number.parseInt(num);
    if(Number.isInteger(num)){    
    if (num < number){alert(num + ": 答えの数より小さい");}
    else if (num > number){alert(num + ": 答えの数より大きい");};
    count++
}};
numset();
while (!Number.isInteger(num) || num !== number ){numset();};
alert("当たり! 回数 : "+ count);