

// [연산자 ] : 연산 할때 사용되는 기호
// 1. 산술연산자 : 하나의 연산결과를 (숫자)로 변환 
// * 더하기 -빼기 * 곱하기 / 나누기 %나머지
console.log(10 + 3);  //더하기
console.log(10 - 3)   // 빼기
console.log(10 * 3)      // 곱하기
console.log(10 / 3)      //나누기
console.log(parseInt(10 / 3)); //몫 3, pasrseint
console.log(10 % 3)             //나머지
// 2. 연결 연산자 : 연산에 문자열이 포함되면 더하기 가 아닌 연결이 된다.
// + 연결
console.log("점수 : " + 10);        // 연결 , 점수 :  10
console.log("점수 : " + 10);        // 연결 , 점수 :  10


// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.

let 국 = prompt("국");
let 영 = prompt("영");
let 수 = prompt("수");

let 합 = Number(국) + Number(영) + Number(수);
let 평균 = 합 / 3;
console.log(`" 합 :" ${합}  , "평균 : "  ${평균}`);

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.

let 반지름 = prompt("반지름")
let 원넓이 = 반지름 * 반지름 * 3.14;
console.log(`" 원넓이 :" ${원넓이}`);

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.

let 실수1 = Number (prompt("실수입력"));
let 실수2 = Number (prompt("실수입력"));
let 실수3 = (실수1 / 실수2);
console.log(` 비율 : ${실수3}%`);

//  4. 논리 연산자  : 하나의 연산결과를 (논리) 값으로 반환 , && / || 항상 2개 이상의 비교연산자 필요
/*
    && 이면서 면서 이고 그리고 모두 and 조건, 조건이 모두 true 이면 true
    || 이거나 거나 하나라도 또는 or 조건 , 조건이 하나라도 true 이면 true * | : + [시프트키] + 엔터
    1. 부정 반대 not 조건
        초등학생이 사탕 이면서 초콜릿 먹는다, and 조건, 2개다 먹어야 true(충족)
        초등학생이 사탕 이거나 초콜릿 먹는다, or 조건, 1개다 먹어야 true(충족)
        초등학생이 사탕 아니고 , not 조건 , 사탕이 아닌


// 5. 할당 연산자 /(복합)대입연산자 : 변수에 저장할때 사용되는 기호

    * : 오른쪽 데이터를 왼쪽에 대입/할당/놓기               , let 변수명 = 3;
*/

