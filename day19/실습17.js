/*
[ 실습17 ] 식당 대기표 페이지 * 제출용( CSS 선택,생략가능 )
1. 목표
    -식당 직원이 대기 손님의 정보를 등록하고, 손님은 자신의 전화번호로 대기 상태를 직접 
     확인할 수 있는 간단한 대기 관리 페이지를 제작합니다.
    -모든 대기 정보는 브라우저의 localStorage 활용하여 관리합니다.

2. 화면 구성
    -페이지는 **'대기 등록 영역'**과 **'대기 확인 영역'**으로 명확히 구분되어야 합니다.
    -대기 등록 영역:
        --대기자 이름 입력: 대기하는 손님의 이름을 입력받는 <input> 필드가 있어야 합니다.
        --전화번호 입력: 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
        --인원 수 입력: 함께 온 인원 수를 숫자로 입력받는 <input> 필드가 있어야 합니다.
        --대기 등록 버튼: 클릭 시 addWaiting() 함수를 호출하는 "대기 등록" 버튼이 있어야 합니다.
    -대기 확인 영역:
        --전화번호 입력: 대기 상태를 확인할 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
        --대기 확인 버튼: 클릭 시 checkStatus() 함수를 호출하는 "대기 확인" 버튼이 있어야 합니다.

3. 데이터 관리
    -저장소: 모든 대기 정보는 브라우저의 **localStorage**를 사용하여 저장 및 관리되어야 합니다. 
     (브라우저 탭 종료 시 대기 목록 초기화)
    -데이터 구조: 대기 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
    -각 대기 팀 객체는 { no: 대기번호, name: '이름', phone: '전화번호', count: 인원수 } 형태를 가집니다.
    -대기번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
    -이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, localStorage 'waitingList'라는 
     키(key)로 저장되어야 합니다.

4. 핵심 기능 구현
addWaiting() 구현 (대기 등록):
    -입력된 이름, 전화번호, 인원 수를 받아 새로운 대기 객체를 생성하고, waitingList 배열에 추가합니다.
    -대기번호는 현재 배열의 마지막 대기번호에 1을 더한 값으로 자동 부여합니다.
checkStatus() 구현 (대기 확인):
    -"대기 확인" 버튼 클릭 시 실행됩니다.
    -입력된 전화번호를 받아, localStorage에 저장된 waitingList 배열에서 전화번호가 일치하는 객체를 찾습니다.
    -일치하는 정보가 있으면, alert를 통해 해당 손님의 "대기번호"를 보여줍니다. (예: "고객님의 대기번호는 
     O번 입니다.")
    -일치하는 정보가 없으면, alert로 "대기 정보가 없습니다."를 알려줍니다.
*/  // 대기자 이름 : add1 , 전화번호 : add2  , 인원 수 : add3
/*
const 등록대기영역 = [
    { no : 1 , name : 'name1' , phone : 'phone1' ,  count : 'staff1' },
    { no : 2 , name : 'name2' , phone : 'phone2' ,  count : 'staff2' },
    { no : 3 , name : 'name3' , phone : 'phone3' ,  count : 'staff3' }
]
*/

function addWaiting(){      console.log('등록 대기영역 exe');
    // <마크업> 입력 객체 가져오기
    const add1 = document.querySelector('#add1'); console.log(add1);
    const add2 = document.querySelector('#add2'); console.log(add2);
    const add3 = document.querySelector('#add3'); console.log(add3);
    // 객체 입력값 가져오기
    const addone = add1.value;                      console.log(addone);
    const addtwo = add2.value;                      console.log(addtwo);
    const addthree = add3.value;                    console.log(addthree);
    // 객체화
    let no = 1;
        let 등록대기영역 = localStorage.getItem('등록대기영역'); // getItem 속성명 넣기
        if(등록대기영역 == null){ //존재 하지않으면
            등록대기영역 = []; //새로운 배열
        }else{
            등록대기영역 = JSON.parse(등록대기영역); // parse 문자열 > 객체/배열 로 변환
            no = 등록대기영역[ 등록대기영역.length -1  ].no + 1; // 마지막 num? + 1 하기
        }
    const obj = { no : no , name : addone , phone : addtwo , count : addthree };    // obj 안에 등록대기영역 객체 값 넣기
    console.log(obj);

    등록대기영역.push(obj); // obj 저장
    alert('대기 등록');
    console.log(등록대기영역);
    // 객체 > 문자열 변환
    let waitingList = JSON.stringify(등록대기영역);
    localStorage.setItem('등록대기영역' , waitingList);
}

function checkStatus(){  console.log('등록 확인');
    // <마크업> 입력 객체 가져오기
    const checks = document.querySelector(`#checks`); console.log(checks);
    // 객체 입력값 가져오기
    const check = checks.value;                 console.log(check);
    let 등록대기영역 = localStorage.getItem(`등록대기영역`); // '등록대기영역' 속성값 가져오기
        if(등록대기영역 == null){ // 존재하지 않으면 
            등록대기영역 = [] ; // 새로 만들기
        }else{ // 존재하면 객체/배열로 변환 하기
            등록대기영역 = JSON.parse(등록대기영역); 
        }

    //객체화
    for(let i = 0 ; i <= 등록대기영역.length - 1 ; i++){
        const 등록대기 = 등록대기영역[i]; // i번째 등록
        if(등록대기.phone == check){
            alert(`등록 확인 손님의 대기번호는 : ${등록대기.no} 입니다.`);
                
            return; // 강제 종료
        }
    }

    alert(`등록 정보가 없습니다. `);
}