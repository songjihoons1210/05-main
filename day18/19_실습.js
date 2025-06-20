/*
[ 실습15 - 인사 관리 대시보드 ] * 제출
1. 목표
    부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
    사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

2. 화면 구성
    페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.
    부서 관리 영역:
        부서 등록:  
            새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.
        부서 목록:  
            등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "부서명"과 "관리" 열로 구성됩니다.
            각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

    사원 관리 영역:
        사원 등록:
            사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
            등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.
            사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
        사원 목록:
            등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.
            각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.

    휴가 관리 영역:
        휴가 신청:
            등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
            휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
            휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
        휴가 신청 전체 목록:
            제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
            각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.
            각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다. 페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
        사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.

    부서 관리 기능:
        등록: "추가" 버튼 클릭 시, 입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자가 나타나 새로운 부서명을 입력받고, 입력 완료 시 목록에 즉시 반영되어야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메시지를 표시해야 합니다.

    사원 관리 기능:
        등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

    휴가 관리 기능:
        신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.
        취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다.

*/

const postlist = [
    { pno: 1, leftname: '개발팀' },
    { pno: 2, leftname: '디자인팀' },
    { pno: 3, leftname: '기획팀' }
];
console.log(postlist);
let currentPno = 3;
let html = '';
function newpost() {
    console.log('newpost');
    // (1) 입력 마크업객체 가져오기
    const pnameInput = document.querySelector('#leftname'); console.log(pnameInput);
    // (2) 입력 마크업객체 에서 입력값 가져오기
    const leftname = pnameInput.value;
    console.log(leftname);

    const obj = {
        pno: ++currentPno, // 제품코드는 1증가후 대입
        leftname: leftname,
    }; console.log(obj);

    postlist.push(obj); console.log(postlist);

    pnameInput.value = '';
    alert('[성공] 등록');

    newleset();
}
newleset();

function newleset() {
    console.log('newleset')
    //
    const tbody = document.querySelector(`#left > table > tbody `);
    //
    let html = '';
    //
    for (let i = 0; i <= postlist.length - 1; i++) {
        const postli = postlist[i];
        html += `<tr>
                <td> ${postli.leftname} </td> 

                <button onclick="postliDelete(${postli.pno})" class="bDelete"> 삭제 </button>
                        <button onclick="postliEdit(${postli.pno})" class="bEdit"> 수정 </button> </td> 
    
            </tr>`
    }

    tbody.innerHTML = html; console.log(html);
}

function postliDelete(pno) {
    console.log(` >> delete exe `); console.log(pno);
    // (1). 삭제할 번흐의 객체를 찾는다. for
    for (let i = 0; i <= postlist.length - 1; i++) {
        if (postlist[i].pno == pno) { //만약에 index번째 제품코드와 삭제할 제품코드가 같으면
            postlist.splice(i, 1) // 해당 index 해서 요소 1개 삭제
            alert('[성공] 제품 삭제 '); //안내
            newleset(); // (2) 삭제 이후 제품목록 새로고침/렌더링
            return; // 목표 이뤘으니 함수 종료한다.
        }
    }// for end
    // (2) 못찾았다.
    alert('[오류] 제품번호 불일치');
} // func end // 삭제함수 끝


function postliEdit(pno) {
    console.log(` >> Edit exe `); console.log(pno);
    for (let i = 0; i <= postlist.length - 1; i++) {
        if (postlist[i].pno == pno) { //만약에 index번쨰 제품코드가 수정할 제품코드와 같다면
            const pname = prompt('수정할 팀이름 : '); // 수정할 값 입력받기/
            postlist[i].leftname = pname;  // 입력받은 값으로 수정
            newleset(); // 제품목록 새로고침
            return; //목표를 이뤘으니 함수 강제 종료 * return 사용시 func end로 감
            // break; // * break; 사용시 for end로 감
        }
    }
    // (2)
    alert('[성공] 제품 수정');
} // func end 함수 끝

const optioncategory = [
    { cno: 1, centername: `개발팀` }, 
    { cno: 2, centername: `디자인팀` },
    { cno: 3, centername: `기획팀` }

];
console.log(optioncategory);

function worker(){
    console.log(`worker`);
    
    const optioncategory = document.querySelector(`#optioncategory`); console.log(optioncategory);
    for(let i = 0 ; i <= optioncategory.length -1 ; i++) {
        const opcategory = optioncategory[i]; console.log(opcategory);
    }
    html += `<option value="${optioncategory.cno}"> ${optioncategory.cname} </option>`
}


