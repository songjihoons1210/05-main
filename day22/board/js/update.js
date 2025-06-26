getBoard();
// 기존데이터 조회
// (1) 수정페이지 접속했을때 기존 데이터 호출
function getBoard() {
    const url = new URLSearchParams(location.search);
    const selectno = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {
        boardList = [];
    } else { boardList = JSON.parse(boardList); }
    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectno) {
            document.querySelector('#titleInput').value = obj.title
            document.querySelector('#contentInput').value = obj.content
        }
    }
}


// (2) 수정처리 함수
// 1. url 경로 가져오기
// 2. url경로에서 내가 선택한 게시물번호(no) 가져오기
// 3. localStorage 에서 배열 가져오기
// 4. 반복문 이용하여 선택한 게시물 찾기
// 5. 찾은 게시물에 새롭게 입력받은 값으로 수정
// 6. localStorage 에서 배열 저장
// 7 (성공) view.html 이동하기.


function btnins() {
    const url = new URLSearchParams(location.search);
    const selectno = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {
        boardList = [];
    } else { boardList = JSON.parse(boardList); }
    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectno) {
            obj.title = document.querySelector('#titleInput').value;
            obj.content = document.querySelector('#contentInput').value;
            obj.pwd = document.querySelector('#pwdInput').value;


            localStorage.setItem('boardList', JSON.stringify(boardList));

            alert('수정 완료');
            location.href = `view.html?no=${selectno}`
        }
    }
}