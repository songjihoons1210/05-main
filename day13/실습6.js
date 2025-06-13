
//문제 1
/*
let number = [23,5,27,12,88,34];
for(let i = 0 ; i <=number.length - 1 ; i++){
    let num = number[i];
    if( num == 88) {
        console.log(` ${number}중에서 ${num}점 가장 큰 수입니다.`);
    }

}

*/


// 문제 2
/*
let asd = "";
for (let i = 1; i <= 5; i++) {
    for (let index = 1; index <= 5 - i + 1 ; index++) {
        asd += "*";
    }
    asd += "\n";
    console.log(asd);    
}
/*

let output = ""
for( let line = 1 ; line <= 5 ; line++) {

output += "\n"
    for(let star = 1 ; star <= 5 - line + 1 ; star++) {
    output += "*"
    }
\}
console.log(output);
*/

// 문제3 
/*
let users = ['김하준', '이서아', '박솔민', '최도윤'];
for( let i = 0 ;  i<= users.length - 1 ; i ++) {
    let name = users[i];
    if( name.indexOf(`솔`) != -1) 
    console.log(`${users}중에서 '솔'이라는 글자가 들어간 사용자는 , ${name}`)
}

*/

//문제4
/*
let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];
for (let i = 0; i <= seatLayout.length - 1; i++) {
    let seat = seatLayout[i];
    console.log(seat)

    for (let a = 0; a <= seat.length - 1; a++) {
        let a2 = seat[a]
        console.log(a2)
    }
}
*/

// 문제5
/*
let num = [];
let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
for(let i = 0; i <= numbers.length-1 ; i++){
    if(num.indexOf(numbers[i]) == - 1)
        num.push(numbers[i]);
}
console.log(`중복x ${num}`)
*/

// 문제6 
let nums = [5, 3, 4, 1, 2];
for (let i = 0; i <= 4; i++) {
    let num ='';
    if (nums[i] > nums[i+1]) {
        num = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = num;
    }
}

//문제 7 
//두 개의 배열 products(상품 목록)와 stock(재고 수량)이 있습니다. 사용자로부터 구매할 상품명과 
// 수량을 입력받아, 재고가 충분하면 "구매 완료!"를 출력하고 재고를 차감하세요. 재고가 부족하면 
// "재고가 부족합니다."를 출력합니다.
/*
let products = [ '볼펜', '노트', '지우개'];
let stock = [10, 5, 20];
let 상품명 = prompt(' 상품명 입력: ');          // (1) 사용자로부터 구매할 상품명 입력받아,
let 수량 = Number(prompt(''));                 // (2) 사용자로부터 구매할 수량을 입력받아,
// 재고가 충분( 비교 /논리 판단  ) , 재고를 차감( 연산/수정 )
// (2) 제품목록에서 입력받은 값 찾아라 , (2-1) 제품목록의 모든 제품들을 순회(조회)
for( let index = 0 ; index <= products.length - 1 ; index++ ){
    let product = products[index]; // index 번째의 제품 1개 호출 
    if( product == 상품명 ){ // 만약에 index 번째 제품명과 입력받은 제품명과 같으면
        console.log( '존재하는 제품명');
        if( stock[index] >= 수량 ){ // 만약에 index번째 재고가 입력받은 수량보다 더크면
            stock[index] -= 수량; // index 번째의 재고를 입력받은 수량만큼 차감(빼기) 한다.
            console.log('구매 완료!');
        }else{ // 아니면
            console.log('재고가 부족합니다.');
        }
    } // if end 
}// for end 

*/
/*
let products = [ '볼펜', '노트', '지우개'];
let stock = [10, 5, 20];
let 상품명 = prompt(' 상품명 입력: ');          // (1) 사용자로부터 구매할 상품명 입력받아,
let 수량 = Number(prompt(''));                 // (2) 사용자로부터 구매할 수량을 입력받아,
let findIndex = products.indexOf( 상품명 );     // (3) 입력받은 상품명이 상품목록 존재하는지 확인 
// -1 : 없다 , 0이상 : 있다.
if( findIndex >= 0 ){ // 제품 찾았다.
    if( stock[ findIndex ] >= 수량 ){ // 찾은 제품의 재고가 입력받은 수량 보다 많으면
        console.log("구매 완료!");
        stock[ findIndex ] -= 수량 
    }else{ console.log("재고가 부족합니다."); }
} // if end 
*/