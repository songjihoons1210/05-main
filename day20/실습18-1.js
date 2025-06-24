// 1. 제품 목록 , 이미지 등록시 없을경우 : https://placehold.co/100x100 경로 샘플
const productList = [
    { pno: 1, pname: '123456', amount: 50, ping: 'https://placehold.co/100x100', etc:'' },
    { pno: 2, pname: '987654', amount: 120, ping: 'https://placehold.co/100x100', etc:'' },
    { pno: 3, pname: '741852', amount: 30, ping: 'https://placehold.co/100x100', etc:'' }
];
let currentPno = 3; // * 코드를 자동대입 하기 위한 현재 코드번호, 샘플의 마지막 코드의 번호 로 초기화

console.log(productList);

// 등록함수 

