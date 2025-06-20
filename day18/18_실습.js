/*
    [ 작업 순서 ] --- 100% 예측 불가능 ---
        1. [프] 화면 스케치(프로토타입)
        1. [프] html 과 css 표현
        1. [프] 데이터 모델링
        1. [프] 기능(함수) 설계
        1. [프] 구현/로직
        1. [프] 테스트


*/
/*
[실습14: 제품 관리 페이지]
1. 목표
    사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.
2. 화면 구성
    페이지는 사용자가 정보를 입력하는 **'제품 등록 영역'**과 등록된 결과를 보여주는 **'제품 목록 영역'**으로 명확히 구분되어야 합니다.
    제품 등록 영역 (<div id="header">):
        카테고리 선택: 미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')
        제품명 입력: 등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")
        제품 가격 입력: 제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)
        제품 이미지 입력: 제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 첨부할 수 있어야 합니다.
        등록 버튼: 모든 정보를 입력한 후, 목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.
    제품 목록 영역 (<div id="main">):
        등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.
        표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.
        각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 기본적으로 표시되어 있어야 합니다.
        제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.

    제품 등록 기능:
        사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
        제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
        첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.

    제품 관리 기능:
        삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
        수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
*/

// == [1] 데이터 모델링 샘플 ==
// 1. 카테고리 목록
const categorylist = [{ cno: 1, cname: '음료류' }, { cno: 2, cname: '과자류' }];
let currentCno = 2; // * 코드를 자동대입 하기 위한 현재 코드번호, 샘플의 마지막 코드의 번호 로 초기화
// 2. 제품 목록 , 이미지 등록시 없을경우 : https://placehold.co/100x100 경로 샘플
const productlist = [
    { pno: 1, cno: 1, pname: '코카콜라', pprice: 1000, ping: 'https://placehold.co/100x100', pdate: '2025-06-17' },
    { pno: 2, cno: 2, pname: '새우깡', pprice: 1200, ping: 'https://placehold.co/100x100', pdate: '2025-06-18' },
    { pno: 3, cno: 1, pname: '포카칩', pprice: 1400, ping: 'https://placehold.co/100x100', pdate: '2025-06-19' }
];
let currentPno = 3; // * 코드를 자동대입 하기 위한 현재 코드번호, 샘플의 마지막 코드의 번호 로 초기화
// 확인차
console.log(categorylist);
console.log(productlist);

// === [2] 데이터 모델링 샘플 ===
// 1. 카테고리 출력함수 : 실행조건 : 페이지가 (js)열렸을때 실행
categoryPint();
function categoryPint() {
    console.log(` >> categoryPint exe `);
    // 1. 어디에 , <select id="categoryInput">
    const categoryInput = document.querySelector(`#categoryInput`); console.log(categoryInput);
    // 2. 무엇을 , 카테고리목록(배열)내 객체정보를 하나씩 html 형식으로 출력
    let html = '<option value="" disabled selected > 카테고리 선택하세요. </option>';
    for (let index = 0; index <= categorylist.length - 1; index++) {
        const category = categorylist[index]; console.log(category);
        html += `<option value="${category.cno}"> ${category.cname} </option>`
        // 주의 : 백틱 주의
    }
    // 3. 출력
    categoryInput.innerHTML = html; console.log(html);
}
// 2. 제품 등록함수 : 실행조건 : <등록버튼> onclick 클릭했을때
// HTML : <button onclick="productAdd()" class="btnAdd"> 등록 </button>
function productAdd() {
    console.log('productAdd');
    // (1) 입력 마크업객체 가져오기
    const categoryInput = document.querySelector('#categoryInput');
    const pnameInput = document.querySelector('#pnameInput'); console.log(pnameInput);
    const ppriceInput = document.querySelector('#ppriceInput'); console.log(ppriceInput);
    const pimgInput = document.querySelector('#pimgInput'); console.log(pimgInput);
    // (2) 입력 마크업객체 에서 입력값 가져오기
    const cno = categoryInput.value; console.log(cno);
    const pname = pnameInput.value; console.log(pname);
    const pprice = ppriceInput.value; console.log(pprice);
    // 첨부파일은 value 대신 files[0] : 선태된 첨부파일의 첫번째 파일객체 가져오기
    const pimg = pimgInput.files[0]; console.log(pimg);
    // * 현재 날짜 구하기 == new Date()
    let year = new Date().getFullYear(); // 현재 연도 구하기.
    let month = new Date().getMonth() + 1; // 현재 월 반환 함수 * 1월달이 0부터 시작이므로 +1
    month = month < 9 ? `0${month}` : month; // 만약에 월이 한자리수 이면 앞에 '0'을 붙인다.
    let day = new Date().getDate();     // 현재 일 반환 함수
    day = day < 9 ? `0${day}` : day;   //만약에 일 이 한자리수 이면 앞에 '0' 붙인다.
    let pdate = `${year}-${month}-${day}`; console.log(pdate);
    // (*) 유효성검사
    // * 입력한 값 없으면 등록 실패
    if (cno == '' || pname == '' || pprice == '') {
        alert('비어있는 항목이 있습니다. [실패]');
        return; //반환이 없는 함수종료
    }
    // (3) 여러 데이터 객체로 구성하기.
    const obj = {
        pno: ++currentPno, // 제품코드는 1증가후 대입
        cno: Number(cno),
        pname: pname,
        pprice: Number(pprice), // 제품가격 숫자형 타입변환
        ping: pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100',
        // URL.createObjectURL() : 선택한 파일객체의 url 주소 생성 함수 
        pdate: pdate
    }; console.log(obj);

    // (4) 구성한 객체를 배열에 저장
    productlist.push(obj); console.log(productlist);
    // (*) 기타등등
    categoryInput.value = '';
    pnameInput.value = '';
    pprice.value = '';
    alert('[성공] 제품 등록');

    productPrint();     // [다시 제품 출력함으로써 새로고침 ] /렌더링

}


// 3. 제품목록 출력함수 : 실행조건 : (1) 페이지(HTML/JS) 가 열렸을떄 함수실행, (2) 등록/삭제/수정 처리 했음
productPrint();
function productPrint() {
    console.log(`>> productPrint exe `);
    // (1) 어디에,
    const tbody = document.querySelector(`#main > table > tbody `);
    // (2) 무엇을, 
    let html = ``;
    for (let index = 0; index <= productlist.length - 1; index++) {
        const product = productlist[index];
        // 가능 const category = getCategory(product.cno;// cno를 매개변수로 넣어서 카테고리 객체 반환
        html += `<tr>    
                        <td> <img src="${product.ping}" /> </td> <th> ${getCategory(product.cno).cname} </th> <td> ${product.pname} </td> 
                        <td> ${product.pprice.toLocaleString()} </td> <td> ${product.pdate} </td>       
                        <td> 
                        <button onclick="productDelete(${product.pno})" class="btnDelete"> 삭제 </button>
                        <button onclick="productEdit(${product.pno})" class="btnEdit"> 수정 </button> </td> 
                    </tr>`; // 샘플 작성한 HTML의 <tr> 복붙





    }
    // (3) 출력
    tbody.innerHTML = html; console.log(html);
}
// 4. 제품 삭제함수 : 배열내 삭제할 객체를 찾아서 .splice 한다 .. < 매개변수 : 제품코드 >
// 실행조건 : [삭제버튼] onclick 했을때
function productDelete(pno) {
    console.log(` >> delete exe `); console.log(pno);
    // (1). 삭제할 번흐의 객체를 찾는다. for
    for (let index = 0; index <= productlist.length - 1; index++) {
        if (productlist[index].pno == pno) { //만약에 index번째 제품코드와 삭제할 제품코드가 같으면
            productlist.splice(index, 1) // 해당 index 해서 요소 1개 삭제
            alert('[성공] 제품 삭제 '); //안내
            productPrint(); // (2) 삭제 이후 제품목록 새로고침/렌더링
            return; // 목표 이뤘으니 함수 종료한다.
        }
    }// for end
    // (2) 못찾았다.
    alert('[오류] 제품번호 불일치');
} // func end // 삭제함수 끝
// 5. 제품 수정함수 :
function productEdit(pno) {
    console.log(` >> Edit exe `); console.log(pno);
    for (let index = 0; index <= productlist.length - 1; index++) {
        if (productlist[index].pno == pno) { //만약에 index번쨰 제품코드가 수정할 제품코드와 같다면
            const pname = prompt('수정할 제품명 : '); // 수정할 값 입력받기/
            const pprice = prompt('수정할 제품명 가격 : ');
            productlist[index].pname = pname;  // 입력받은 값으로 수정
            productlist[index].pprice = Number(pprice);
            productPrint(); // 제품목록 새로고침
            return; //목표를 이뤘으니 함수 강제 종료 * return 사용시 func end로 감
            // break; // * break; 사용시 for end로 감
        }
    }
    // (2)
    alert('[성공] 제품 수정');
} // func end 함수 끝

// 7. 카테고리번호(cno) 에 해당 하는 카테고리객체 1개 반환 함수
function getCategory(cno) {
    console.log(` >> getCategory exe`); console.log(cno);
    // 1. 매개변수(cno) 와 동일한 카테고리객체 찾기
    for (let index = 0; index <= categorylist.length - 1; index++) {
        if (categorylist[index].cno == cno) { // 만일 index번째 cno
            return categorylist[index]; // 찾은 객체를 반환한다.
        } // if end
    } // for end
    // 2. 못찾았다.
    return null;    // 못찾을 경우 null 
} // func end
getCategory();