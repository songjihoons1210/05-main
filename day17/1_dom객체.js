

/*
    객체란 ? 속성(property) 와 함수(function) 를 하나로 묶은 자료
        - 변수명.속성명     : 객체내 속성값 호출
        - 변수명.속성명()   : 객체내 함수 호출
            console.log()       : console 객체내 log 함수 호출
            document.write()    : document 객체내 write 함수 호출
    [ DOM객체 ]
        - 내장(미리 만들어진) 객체
        1. 정의 : 문서객체모델 , HTML를 객체로 다루기 위한 내장객체
            D(DOCUMENT:HTML)O(object)M(model)
        2. 내장객체 : document
        3. 내장객체내 주요 속성
            1. document.write(`출력할내용`)         : HTML에 문자열(HTML) 출력하는 함수
            2. document.querySelector(`선택자` )    : HTML에 지정한 선택자를 JS객체로 반환하는 함수
            3. document.querySelectorAll('선택자')  : HTML에 지정한 서택자를 모두 js객체(배열)로 *반환* 하는 함수
            *선택자 : 1.마크업명 2. .클래스명 3. #ID명
            4. dom객체.innerHTML                    : 마크업내 html 반환 하는 속성
                * <마크업> !!!여기 innerHTML 입니다. </마크업>
                * inner없음 : <input /> , <img//>
            5. dom객체.value
                * <마크업 value>"여기!!" />
                * valse있음 : input , select , textarea 
                * valse없음 : div , span , table 
            6. dom객체.style =                      : 마크업내 style(css) 요소 대입
            7. dom객체.style.css속성명 =            : 마크업내 stlye(css) 요소 추가
            8. dom객체.classList                    : 마크업내 적용된 class를 반환
                dom객체.classList.add('클래스명')   : 마크업내 클래스 추가
                dom객체.classList.remove('클래스명') : 마크업내 클래스 삭제
                dom객체.classList.toggle('클래스명') : 마크업내 지정클래스가 없으면 추가 있으면 삭제
                dom객체.classList.contains('클래스명') : 마크업내 지정클래스가 있는지 확인 , true / false 반환

 */
// [1]
console.log(document);      // html 마크업 전체
// [2]
document.write(`내장객체 함수실행`); 
// [3]
const div = document.querySelector(`div`); // 1개
console.log(div);
const box2 = document.querySelector('.box2');
console.log( box2 );
const box3 = document.querySelector('#box3');
console.log(box3);
// [4]
const divArray = document.querySelectorAll(`div`); // 여러개
console.log(divArray);
// [5]
const div2 = document.querySelector('div');
const html = div2.innerHTML;
console.log(html); // <div> 박스1 </div> --> 박스1

// [6]
// 함수 실행 조건 : [함수1실행] 버튼을 클릭했을때
// 매개변수 : x , 반환값 : x , 
// 로직 : 1.콘솔출력
function func1(){ // 함수 선언
    // 콘솔 출력
    console.log('--- func1 exe ---');
    // 2. input 마크업을 js객체 가져오기
    const myInput = document.querySelector('.myInput');
        console.log(myInput); // 확인
    // 3. 가져온 js dom객체내 value 속성값 가져오기
    const text = myInput.value;
        console.log(text);
    // vs
        document.querySelector('.myInput').value;
}
// [7]
function func2(){
    console.log(`--- func2 exe ---`);
    document.querySelector('.title').innerHTML = 'js에서작한것';
        // vs
    const title = document.querySelector('.title');
    title.innerHTML = 'js에서 작성한것';
}

// [8]
function func3(){
    console.log(`--------func3 exe --------`);
    // 1. 특정한 선택자의 마크업을 가져오기
    const title2 = document.querySelector(`.title2`);
    // 2. 해당 마크업객체내 .style 속성
    title2.style = 'color : red;' // css문법 문자열로 대입
    // *
    const body = document.querySelector('body');
    body.style.background = 'gray';
    //*
    title2.classList.toggle("myStryle");
    console.log(title2);
}