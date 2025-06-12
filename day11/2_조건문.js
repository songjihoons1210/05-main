/* 문제1
let 점수1 =prompt("점수입력")*1;
let 점수2 =prompt("점수입력")*1;
let 합계 = 점수1 + 점수2 ;
    if( 합계 >= 90){
        (console.log("성공");
}
        else{
            console.log("불합격");
}
*/

/* 문제 2

let 정수1 = prompt("수 입력 : ")*1;
let 정수2 = prompt("수 입력 : ")*1;
    if( 정수1 >= 정수2 ){
        console.log(`정수1 :${정수1}`)
    }
    else{
        console.log(`정수2 :${정수2}`)
    }

*/

/* 문제3

let id = prompt("id 입력");
let pass = prompt("pass 입력");
    if( id == 'admin' && pass == '1234'){
        console.log("로그인 성공")
    }
    else{
        console.log("로그인 실패")
    }

*/

/* 문제4
let pass = prompt("pass 입력");
let passw =pass.length;
if( passw >= 12){console.log("보안 등급 :강함 "); }
else if( passw >= 8) {console.log("보안 등급: 보통 ");}
    else{
        console.log("보안 약함")
    }

*/

/*/ 문제5

let seatList = ['o', 'x', 'o'];
let 번호 = prompt("ox 입력 0~1");
if (seatList[번호] == 'o') {
    console.log(`예약 성공`);
} else{
    console.log("예약 실패");
    seatList[번호] = 'o'; // 해당하는 좌석목록 상태변경
}




/*/

/* 문제6

let game = prompt(`게임 점수 :`)*1;
if(game >= 900) { console.log(`A급 경품`); }
else if (game >= 700) { console .log('B급'); }
else if (game >= 500) { console.log(`C급`); }
else { console.log(`참가상`); }

*/
/* 문제7
let 사용자 = prompt("");
if (사용자 == 'admin') { console.log("'모든 기능에 접근할 수 있습니다.'"); }
 else if( 사용자 == 'editor'){ console.log('모든 기능에 접근할 수 있습니다.'); }
 else if( 사용자 == 'viewer'){ console.log('모 있습니다.'); }
 else{console.log(`그 외 역할`); }

 */


// 문제 8
/*
let 나이 = prompt("나이 입력 :")*1;
if (나이 >= '65') {console.log(`ㅣ3천ㅣ`);}
else if(나이 >=20){console.log(`1만`);}
else if(나이 >=8){console.log(`5천원`);}
    else{console.log(`무`);}
*/
// 문제 9
/*
let 성적등급 = prompt(`점수 :`)*1;
if(성적등급 >= 90) { console.log(`A`); }
else if (성적등급 >= 80) { console .log('B'); }
else if (성적등급 >= 70) { console.log(`C`); }
else { console.log(`재시험`); }
*/

//문제 10 

