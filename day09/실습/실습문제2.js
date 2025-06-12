
console.log("[운동 기록]");


console.log("[이름]");
let 이름2 = prompt("이름 입력");
console.log(이름2);


console.log("[운동종목]");
let 종류 = prompt("종목적기");
console.log(종류);


console.log("[운동시간]");
let 시간 = prompt("시간(분)");
console.log(시간);


let 칼로리 = 7;
let 소모칼로리 = 칼로리 * 시간 ;
console.log("칼로리는 시간당 7kcal씩 소모됩니다. 고로 당신이 소모한 칼로리는 "+ 소모칼로리 + "kcal 입니다.")
