
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

for(let index = 0 ; index <= studentInfo.length -1 ; index++){
    const studen = studentInfo[index];
    document.write( `<h3> ${studen.name} (${studen.major} )</h3> `);
    for( let j = 0 ; j <=subjectInfo.length -1 ; j++){
        const subject = subjectInfo[j]
    }
}