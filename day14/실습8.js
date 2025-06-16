/*
[실습8]
문제 1: prompt로 제품 정보 객체 만들기
prompt를 세 번 사용하여 사용자로부터 '제품명', '가격', '제조사'을 순서대로 입력받습니다. 
입력받은 정보로 하나의 product 객체를 생성하고, 생성된 객체를 콘솔에 출력하시오.
*/
/*
let 제품명 = prompt('제품명:');
let 가격 = prompt('가격:');
let 제조사 = prompt('제조사:');
const product = {}
product.제품1 = 제품명
product.가격2 = 가격
product.제조3 = 제조사
console.log(product)
*/
/*
문제 2: prompt로 회원 가입 및 아이디 중복 확인 기능 구현
prompt를 세 번 사용하여 사용자로부터 '아이디', '비밀번호', '이름'을 순서대로 입력받습니다.
입력받은 정보로 하나의 member 객체를 생성하고, members 배열에 저장하여 배열을 콘솔에 출력하시오.
단] 입력받은 아이디가 이미 배열에 존재하면 '존재하는 아이디 입니다'를 출력하고 배열에 등록하지 않습니다.
*/
let names = prompt("name :");
let id = prompt("id :");
let pass = prompt("pass :");
const members = [
  { id: 'a', password: 's', name: 'd' },
  { id: 'q', password: 'w', name: 'e' },
];
for(let i = 0 ; i<= members.length -1 ; i++){
    if(pro == members) {
        console.log("존재하는 아이디 입니다. 배열에 등록하지 않습니다.");
    }else{
        console.log("존재 하지 않는 id 입니다 등록하시겠습니까?");
    }

}