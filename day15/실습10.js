document.write(`<h1>학생</h1>`);



const studentInfo = [
    { name: '재영', sid: '1', major: '컴퓨터공학과' },
    { name: '철수', sid: '2', major: '인공지능학과' },
    { name: '영희', sid: '3', major: '데이터사이언스학과' }
]

const subjectInfo = [
    { subid: '11', subname: '웹 프로그래밍 기초', profname: '이교수' },
    { subid: '11', subname: '머신러닝 입문', profname: '최교수' },
    { subid: '11', subname: '데이터 시작화', profname: '박교수' }
]


const regInfo = [
    { regid: '20', sid: '1', subid: '11', grad: 'A' },
    { regid: '20', sid: '1', subid: '11', grad: 'B' },
    { regid: '20', sid: '1', subid: '11', grad: 'C' }
]
let pass = false;
let names = "";
let studen = "";
let subject = "";
let 이수여부 = '';
for (let i = 0; i <= studentInfo.length - 1; i++) {
    let studen = studentInfo[i];
    for (let a = 0; a <= subjectInfo.length - 1; a++) {
        subject = subjectInfo[a];

    }
}

let html = "";
for (let c = 0; c <= studentInfo.length - 1; c++) {
    let reg = regInfo[c];
    if (regInfo[c].grad == 'F') {
        이수여부 = "fail";
    } else {
        이수여부 = "pass";
    }
    html +=  `<hr/> <h4> ${studentInfo[c].name} (${studentInfo[c].major})</h4>`
    html += `
            <div>
            <h4>  ${subjectInfo[c].subname} <span>(${subjectInfo[c].profname})</span></h4>
                <ul>
                    <li>성적 : ${regInfo[c].grad} </li>
                    <li>이수 여부 : ${이수여부} </li>
                </ul> 
                </div>`
    html += `
            <div>
            <h4>  asd <span>(${subjectInfo[c].profname})</span></h4>
                <ul>
                    <li>성적 : ${regInfo[c].grad} </li>
                    <li>이수 여부 : ${이수여부} </li>
                </ul> 
                </div>`
}
document.write(html);