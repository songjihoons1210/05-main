
// [1] 매개변수 x , 반환값 x
function func1( ) { 
    console.log('fun1 exe') ;
  }

// [2] 매개변수 o , 반환값 x                    , 대표 함수 : console.log()
function func2( x , y ){
    console.log(`fun2 exe ${x+y}`);
} 

// [3] 매개변수 o , 반환값 o                    , 대표 함수  prompt( )
function func3( x, y ){
    console.log( ` func2 exe`)
    let result = x + y ;
    return result;
}

//[4] 매개 변수 x , 반환값 o
function func4() {
    console.log( ` fuc4 exe`);
    return '대한민국';
}
//[5] 호출
func1();                        //매개변수 x , 반환값 x
func2( 2, 3);                   //매개변수 O , 반환값 x
func3( 1, 3);                   //매개변수 O , 반환값 O (변수에 저장X)
let a = func3( 1 ,5);           //매개변수 O , 반환값 O (변수에 저장O)
func4();                        //매개변수 x , 반환값 O (변수에 저장O/X 선택)

// [6] 지역변수 : 특정한 { } 안에서 선언된 변수는 선언된 { } 밖에서 호출/사용 불가능
// ---> { } 종료되면 종료되는 {}내 선언된 모든 메모리 자동으로 사라진다. <자동>
// ---> if(){} , for(){} , func1(){}
// ============대한민국 ============= //
let 전역변수 = '대한민국'
if(true){
    // ==============인천광역시 ===========//
    let 지역변수1 = '인천광역시';
    console.log(전역변수); // ok 대한민국
    console.log(지역변수1); // ok 인천광역시
    // console.log(전역변수2); // fall 부평구
    for(let i = 0 ;  i<= 1; i++){
        //=============부평구 ========= //
        let 지역변수2 ='부평구';
        console.log(전역변수) ;  // ok 대한민국
        console.log(지역변수1);  // ok 인천광역시
        console.log(지역변수2);  // ok 부평구
    }
    // console.log(전역변수2); // fall 부평구 : 현위치는 인천광역시 라서 부평구 호출[x]
}

// // console.log(지역변수1); // fall 현 위치에서 인천광역시 호출[x]
// console.log(지역변수2); // fall 현 위치에서 부평구 호출[x]

// [7] 생각해보기 : 이름을 입력받아 배열에 저장하는 함수
// 입력받은 이름 : 지역변수/전역변수,
// 배열 : 지역변수/전역변수
let namelist = [];
function nameAdd() {
    let name = prompt(`이름 : `);
    namelist.push( name );
}
nameAdd();
nameAdd();
console.log(namelist); // ??? [입력된값1 , 입력된값2]
// 현재 코드흐름이 58번째 일떄 변수는 총 몇개일까요? namelist
    // vs

let namelist2 = []
let name1 = prompt(`이름 : `);
namelist.push( name1 );
let name2 = prompt(`이름 : `);
namelist.push( name2 );
// 현재 코드흐름이 65번째 일떄 변수는 총 몇개일까요? namelist2 , name1 , name2

// [8] HTML 마크업의 이벤트 속성
function 이벤트함수() {
    console.log(`[[ 클릭]]`);
}
// 1. js에서 함수 실행하는 방법
이벤트함수();
// 2. HTML 에서 JS함수 실행하는 방법
    // <마크업 이벤트속성명="함수명">