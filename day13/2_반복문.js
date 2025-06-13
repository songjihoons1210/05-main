//문제6
/*
let scores = [85, 92, 78, 65, 95];
let sum = 0;
for(let i = 0 ; i <= scores.length -1 ; i++){
    sum += scores[i];
}
console.log( `합계는 : ${sum} , 평균 : ${sum/scores.length }' );


*/

/*
//문제7

let scores = [77, 82, 100, 54, 96];
for( let index = 0 ; index <= scores.length - 1 ; index++){
    let value = scores[index]; // index번쨰 요소 값 호출
    if( value == 100 ) { // 만약에 해당 값이 100(만점) 이면
        console.log(`${value}점 만점자를 찾았습니다.!`);
        break;
   } // if end
} // for end
// break 만나면 [***여기***] 로 이동한다.

*/

//문제8
/*
let scores = [90, 45, 72, 88, 59, 100];
for( let i = 0; i <=scores.length -1  ; i++){
    let value = scores[i]
    if( value < 60 ){ continue;}
    console.log(value);
}
*/

//문제9 

/*
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];
let A형 = 0 ;
for(let i = 0 ; i <= bloodTypes.length -1 ; i++){
    let blood = bloodTypes[i];
    if( blood == 'A') { //만약 혈액 A면
        A형++;  // vs countA += 1 vs countA = countA + 1
    }
}
console.log(` A형 개수 : ${A형}`) ;

*/


// 문제10

let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
let output = "";
for (let i = 0; i <= nameArray.length - 1; i++) {
    let name = nameArray[i]
    output += `<div> ${name}  </div>`;
    let = sco = scores[i]
    let black = parseInt(sco / 10) // 92/ 10 -> 9.2 parseint(9.2) -> 9
    for (let crl = 1; crl <= 10; crl++) {
        if (crl <= black) { output += `<span>○</span>` }
        else { output += ` <span>●</span>` }
    } 
    output += `</div>`
}
document.write(output)