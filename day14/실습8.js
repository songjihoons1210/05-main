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
/*
let names = prompt("name :");
let id = prompt("id :");
let pass = prompt("pass :");
let pro = {id : 'a' , password : 's' , name : 'd' }
const members = [
  { id: 'a', password: 's', name: 'd' },
  { id: 'q', password: 'w', name: 'e' },
];
let check = false;
for(let i = 0 ; i<= members.length -1 ; i++){
    let pro = members[i];
    if(pro.id == id  && pro.password == pass && pro.name == names) {
                console.log("존재하는 아이디 입니다. 배열에 등록하지 않습니다.");
                let check = false;
                break;
    }
}
 

if(check == false) {
    members.push(pro);
    console.log('중복 성공');
}
else{
    console.log('등록 실패');

}
    */
/*
const members = [ 
    { id: 'q', password: 'w', name: 'e' },
    { id: 'a', password: 's', name: 'd' },
];

// 1. prompt를 세 번 사용 : '아이디', '비밀번호', '이름'을 순서대로 입력받습니다
let id = prompt('아이디 : ');
let pwd = prompt('비밀번호 : ');
let name = prompt('이름 : ');
// 2. 입력받은 정보(여러변수)로 하나의 member 객체
let member = { }        // (1) 객체 생성  , 객체내 속성 추가 해야 하므로 *변수에 저장* 
member.id = id;         // (2) 객체내 새로운 속성명 에 입력받은 값 대입 
member.pwd = pwd;
member.name = name; // vs let member = { id : id , pwd : pwd , name : name }
// let member = [ ]; member.push( id )
    // * 입력받은 아이디가 이미 배열에 존재여부 
    // 1. 배열내 모든 객체 하나씩 (조회)꺼낸다.
let idCheck = false; // 중복이 있다(true)/없다(false) 기억하기 위한 변수 
for( let index = 0 ; index <= members.length -1 ; index++ ){
    let member = members[index]; // index번째의 member 객체 꺼내기(조회)
    // 2. 객체내 id 속성 값이 입력받은 값과 비교 
    if( member.id == id ){ // index번째의 member객체내 id속성값이 입력받은 id 와 같으면
        idCheck = true; // 중복 체크!!! 
        break; // 반복문 종료 
    }
    // * 아직 모두 조회된 상태가 아니므로 for문 안에서 배열에 저장 하지 않는다. 
} // for end 
// 3. member 객체, members 배열에 저장
// 4. members 배열을 콘솔에 출력하시오.
if( idCheck == false ){ 
    members.push(member);  console.log( '등록 성공');
}
else{  console.log( '등록 실패'); }

*/
/*
//문제 3: 객체 배열의 속성 값 평균 구하기
scores 배열에 담긴 모든 학생의 수학(math) 점수 평균을 계산하여 콘솔에 출력하시오.
*/


const scores = [
    { name: 'A', math: 80, science: 92 },
    { name: 'B', math: 95, science: 88 },
    { name: 'C', math: 76, science: 78 },
];

let sum = 0;
let sums = 0;
for (let i = 0; i <= scores.length - 1; i++) {
    let index = scores[i]
    sum += index.math; // index에 호출하여 sum 넣기
    sums += index.science;
}
console.log(`학생 수학 총점은 ${sum} 이고 평균은 ${sum / scores.length}`);
console.log(`학생 과학 총점은 ${sums} 이고 평균은 ${sums / 3}`);

/*문제 4: 특정 조건을 만족하는 객체 찾기
products 배열에서 id가 3인 상품 객체를 찾아, 해당 객체 전체를 콘솔에 출력하시오. 일치하는 객체가 없으면 "상품을 찾을 수 없습니다."를 출력합니다.


const products = [
    { id: 1, name: '사과' },
    { id: 2, name: '바나나' },
    { id: 3, name: '포도' },
    { id: 4, name: '딸기' }
];
let check = false;
for(let i = 0 ; i <= products.length - 1 ; i++){
    let index = products[i]
    if(index.id == 3){
        check = true;
        console.log('과일 발견');
        break;
        
    }
}

if(index.id ^ 3){
    console.log("아님");
}


*/


/*문제 5: 객체 배열 필터링하기
users 배열에서 isActive가 true인 사용자들만으로 구성된 새로운 배열 activeUsers를 만들고, 이 배열을 콘솔에 출력하시오.
*/
const users = [
    { id: 1, name: '유저1', isActive: true },
    { id: 2, name: '유저2', isActive: false },
    { id: 3, name: '유저3', isActive: true },
    { id: 4, name: '유저4', isActive: false }
];
let asd = 0;
let activeUsers = [];
for (let i = 0; i <= users.length - 1; i++) {
    if (users[i].isActive == true) {
        activeUsers.push(users[i]);
    }
}
console.log(activeUsers);

/*
문제 6: 객체 배열 데이터 변환하기
movies 배열에 있는 각 영화 객체에서 title 속성만 추출하여, 영화 제목들로만 이루어진 새로운 배열 movieTitles를 만들고 콘솔에 출력하시오.
*/

const movies = [
    { title: '인셉션', director: '크리스토퍼 놀란' },
    { title: '기생충', director: '봉준호' },
    { title: '매트릭스', director: '워쇼스키 자매' }
];
let movieTitles = [];
for (let i = 0; i <= movies.length - 1; i++) {
    if (movies[i].title) {
        movieTitles.push(movies[i])

    }
}
console.log(movieTitles)

/*
문제 7: 데이터 그룹화하기
다음 team 배열을 department를 기준으로 그룹화하여, 아래 result와 같은 형태로 만드시오.
*/

const team = [
    { name: '철수', department: '개발팀' },
    { name: '영희', department: '기획팀' },
    { name: '민수', department: '개발팀' },
    { name: '지혜', department: '기획팀' }
];

let team2 = { '개발팀': [], '기획팀': [] };
for (let index = 0; index <= team.length - 1; index++) {
    let t = team[index];
    if (t.department == '개발팀') {
        team2.개발팀.push(t.name);
    } else if (t.department == '기획팀') {
        team2.기획팀.push(t.name);
    }
}
console.log(team2)
console.log(team)
// 최종 결과 형태 (result)
// {
//   '개발팀': ['철수', '민수'],
//   '기획팀': ['영희', '지혜']
// }

//(방법2)
let result = { } ;
2 = {};
for (let index = 0; index <= team.length - 1 ; index++) {
    let t = team[index];
    if (result2[t.department]) {
        result2[t.department].push(t.name);
    } else {
        result2[t.department] = [t.name];
    }
}