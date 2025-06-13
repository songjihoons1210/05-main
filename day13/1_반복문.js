// [1] i(iterator :반복자) : 반복변수( 반복문의 반복횟수 체크하는 변수 목적 )
for (let i = 1; i <= 3; i++) {
    console.log(i);
}


// [2] for 중첩 : for() 안에 for() 포함
for (let i = 1; i <= 2; i++) { //한달간 반복 해석 : i 는 1부터 2 이하 까지 1씩 증가
    console.log(i);
    for (let h = 1; h <= 3; h++) {
        // h는 1부터 3 이하 까지  1증가한다
        console.log(h);
    }
} // for end
// 생각해보니 출력 되는 순서
// i = 1    -> true -> console.log -> h = 1 -> true -> console.log
//                                    h = 2 -> true -> console.log
//                                    h = 3 -> true -> console.log
//                                    h = 4 -> false
// i = 2    -> true -> console.log -> h = 1 -> true -> console.log
//                                    h = 2 -> true -> console.log
//                                    h = 3 -> true -> console.log
//                                    h = 4 -> false
// i = 3    -> false    

// [3] 구구단 : 단 안에 곱 포함 인가?? 곱 안에 단 포함 인가??
// 1. 단 : 2 ~ 9 , 패턴 : 2부터 9까지 1씩증가
for (let 단 = 2; 단 <= 9; 단++) {
    console.log(단); //2  3 4 5 6 7 8 
}

// 2. 곱 : 1 ~ 9 , 패턴 1 부터 9 까지 1씩 증가
for (let 곱 = 1; 곱 <= 9; 곱++) {
    console.log(곱); // 1  2 3 4 5 6 7 8 9
}
// 3. 합치기 : 단마다 곱 반복(포함)
for (let 단 = 2; 단 <= 9; 단++) {
    for (let 곱 = 1; 곱 <= 9; 곱++) {
        console.log(`${단} X ${곱} = ${단 * 곱} `)
    }    // for 2 end
} // for 1 end
/* 순서도
    단 변수     단 조건(단<=9)           곱 변수        곱 조건(곱<=9)
    단 = 2      ture                    곱 = 1         true                 console.log출력         곱++
                                        곱 = 2         true                     출력                곱++
                                        ~~ 곱 = 9       ~                       ~                   ~
                                        곱 = 10        false                       


 */

let output = ""; //문자열 공백
for (let line = 1; line <= 5; line++) { // ---- 행 (line) , 5번
    // line는 1부터 5이하까지 1씩증가
    for (let star = 1; star <= line ; star++) { // --- 열(star)  , 
        output += "*"; // 별 찍기 
    }       // 행 for end
    output += "\n"; // \n : 이스케이프문자(줄바꿈처리)
    console.log(output); // output = "*\n**\n***\n****\n*****\n" 
} // 열 for end

    // [ 반복문 제어 키워드 ]
    // (1) continue;    : 가장 가까운 for문의 증강식으로 (코드흐름)이동
            // 1부터 5까지 출력 , 단 3이면 출력 하지않는다
    for(let i = 1 ; i<=5 ; i++) {
        if(i == 3 || i == 5) {continue;} // i 가 3일때 continue; 이므로 아래 console 생략안됨 단] 3이면 출력하지 않는다
        console.log( i ) //  1 2 3 4 5
//아래도 같은 의미
        if( i == 3) {

        }else{
            console.log( i ) ;
        }
        }
    // (2) break;       : 가장 가까운 for문의 종료/탈출/끝내기
        // 1부터 10까지 누적합계 , 단] 누적합계 10 초과하면 종료 된다.
        let sum = 0;
        for( let i = 1 ; i <= 10 ; i++ ) {
            sum += i; // 누적합계 vs sum = sum + i
            if( sum > 10 ) {break;} // 코드 흐름이 break 만나면 for() 종료
        }
        console.log(sum); // 15

    // (3) 무한루프         : for( ; ; ) {}
    //    for( ; ;){
    //    console.log("무한루프중");   }

    // ~[ todrkrgoqhrl ] 1~45 사이의 6개 정수를 입력받아 하나의 배열 저장하시오. <로또번호>
    // - 조건 1 1~45 사이 -  조건2 : 중복 값 제외 한다. - 조건3 : 총 6개만 저장한다.
/*
    let numlist = [] ; // (1) 입력받은 6개 수를 저장하는 배열 선언 < 고객이 선택한 로또 번호 >
    for ( ; ; ) {// (2) 무한 루프 이용하여  반복적으로 입력받기
    let num =  prompt(" 로또 번호 입력 : ")*1; // 입력받은 값을 변수에 저장
        // (조건1) :만약에 입력받은 값이  1~45 사이가 아니면
        if(num < 1 || num > 45){ //1보다 작고 이면서 45보다 초과
            console.log('[경고] 1~45사이만 입력해주세요')
            continue;  // 가장 가까운 for{} 증강식으로 이동
            }
            // (조건2) : 만약에 입력받은 값이 이미 입력한(배열내 존재) 값이면
            if( numlist.indexOf(num) != - 1) { //변수명.indexOf(찾을값); : 만일 찾을값이 존재하면 인덱스 , 
                console.log( ' [경고] 이미 선택한 수 입니다.')
            continue;
        }
        //배열 저장
        numlist.push(num); // 변수명.push(새로운값)
        // (조건3) : 반약에 배열의 저장된 자료가 6개 이면 무한 입력 종료 
        if(numlist.length == 6 ){ //변수명.length : 현재 배열의 전체 자료수 == 총길이
            break; // 코드 흐름을 가장 가까운 for() 끝낸다.

        }
    } // for end
console.log(numlist); // 배열 출력
*/