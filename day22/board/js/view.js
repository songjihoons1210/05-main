getBoard(); // js 실행 될때 최초 한번 자동 함수 실행
function getBoard() {
    // 1. URL(웹주소) 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);
    // 2. 웹주소에서 선택된 게시물번호(웨리스트값) 가져오기
    const selectno = url.get('no');
    // 3. localStorage 에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) { boardList = [] }
    else { boardList = JSON.parse(boardList) };
    // 4. 선택된 게시물번호와 일치한 게시물 찾기 <for>
    for (let i = 0; i < boardList.length ; i++) {
        const obj = boardList[i];
        if (obj.no == selectno) { // 만약에 내가 선택한 게시물 번호와 일치
            // 5. 찾으면 내용 출력
            document.querySelector('#title').innerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content;
            return;
        }
    }
}

// (2) 삭제함수

function btnDelete() {
    const url = new URLSearchParams(location.search);
    const selectno = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) { boardList = [] }
    else { boardList = JSON.parse(boardList); }
    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectno) {
            const confie = prompt('비밀번호 입력');
            if (obj.pwd == confie) {
                boardList.splice(i, 1);
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert('삭제');
                location.href = 'list.html';
            } else {
                alert('삭제 실패 : 비밀번호 불일치 ')
            }
        }
    }
}

// [3] 수정 이동 함수

function btnUpdateView() {
    const url = new URLSearchParams(location.search);
    const selectno = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if(boardList == null) {boardList = [] }
    else { boardList = JSON.parse(boardList);}
    for(let i = 0 ; i <= boardList.length; i++){
        const obj = boardList[i];
        if(obj.no == selectno) {
            const cofie = prompt('비밀번호 입력');
            if(obj.pwd == cofie) {
                location.href = `update.html?no=${selectno}`

            } else {
                alert('수정 실패 : 비밀번호 불일치 ')
            }
        }
    }

}