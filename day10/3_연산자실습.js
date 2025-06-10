
// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.

// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
/*
let 정수 = Number (prompt("숫자 입력"))
let 합 = 정수 % 2 == 0;
console.log(`합 : ${합}`);


// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.

let 정수1 = Number (prompt("숫자 입력"))
let 배수 = 정수1 % 7 == 0;

console.log(`${배수}`);


// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.

let id = prompt("아이디 입력")
let pass = prompt("패스 입력")
let 로그인 = id == 'admin' && pass == '1234'
console.log(` ${로그인}`)
                                 // 위 아래 결과 같음
/*
let id = prompt("아이디 입력");  
let pass = prompt("패스 입력")*1;  
console.log( id == "admin" && pass == 1234)
*/
// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
/*
let 정수2 = prompt("입력");
let 결과 = 정수2 % 7 == 0 && 정수2 % 2 == 1;
console.log(`합 : ${결과}`);

*/
// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.

/*
let 차점수1 = prompt("점수1")*1;
let 차점수2 = prompt("점수1")*1;
let 결과값 = 차점수1 + 차점수2 >=150 ? "합격" : "불합격";
document.writeln(`<h3>결과는 : ${결과값}</h3>`)

*/

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.

let 이름1 = prompt("이름입력");
let 이름2 = prompt("이름입력");
let 이름은 = 이름1 =="유재석" ? `${이름1}(방장)`  : `${이름1}`;
let 이름은1 = 이름2 =="유재석" ? `${이름2}(방장)`  : `${이름2}`;
document.writeln(`<ol><li> 이름: ${이름은}</li> <li>${이름은1}</li></ol>`);