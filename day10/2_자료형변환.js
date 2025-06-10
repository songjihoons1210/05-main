//p .519
// 1. 자동형 변환
// (1) 문자열 숫자에 곱하기 1를 하면 문자열 숫자가 숫자형 숫자로 변환한다
let input = prompt("숫자를 입력 하시오")         // 5, prompt함수는 항상 문자열 반환한다.
console.log(typeof input)                   // string
let result = input * 10                       // "5" * 10  , 
console.log(typeof result)                 // number

// (2) 문자열 + 숫자형 일 경우 자동으로 문자열 으로 변환한다. (연결연산자)
let one = "20" //string
let two = 10  //number
console.log(one + two)         // "20" + 10 -> 30[x] 아니고 "2010" 된다.
// -
let time = prompt('사용시간'); //   "0"
console.log(time * 1000)      // "0"1000 -> ** "0" + 1000 > 01000 **

// 2. 자료형 변환 함수
// (1) Number("문자열")     : 숫자형 타입 변환 함수
console.log(Number("10"))               // "10" > 10 변환
console.log(Number("10abc"));          // "10abc" --> 변환불가능 , Nan ( Not a Number)
// (2) parseint()          : 정수 숫자 변환 함수

console.log(parseInt("213"))    // 123
console.log(parseInt("123.45")) // 123 , 소수점 잘림
console.log(parseInt("123abc")) // 123, 문자 잘림
// (3) parseFloat()         // 실수 숫자 변환 함수
console.log(parseFloat('123.45')) // 123.455
// (4) string()             : 문자열 변환 함수
console.log(String(123))        // "123"


// 생각해보기1 : 국어 점수 와 수학 점수를 prompt 로 입력받아
//  더한 결과를 console.log 출력하시오. 종합계 : 150




let 국어 = prompt("국어점수")               // "10"
let 수학 = prompt("수학점수")               // "20"
// (3) 처리하기  , 연산
let 합계 = Number(국어) + Number(수학)      // Number("10") 10변환
// "국어점수" : 문자그자쳬 vs 국어 점수 : 변수호출
// (4) 출력하기 , console , 템플릿 리터럴 '(벡틱)
console.log(`총합계 : ${합계}`)// vs " 총합계 :" + 합계점수
    // 컴퓨터는 기본적인 프로세스 : (입력) > (처리) > (출력)

// 생각해보기2 : 이름 과 나이(숫자) prompt로 입력 받아 document.write 이용하여 <h3> 마크업으로 출력하시오
// <h3> 강호동(45) </h3>
let 이름 = prompt("이름 입력")
let 나이 =Number( prompt("나이 입력해주세요. ")) ;
document.write(`<h3> ${이름} (${나이})  </h3> `)