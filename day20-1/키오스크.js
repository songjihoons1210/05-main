/*const products = [
    { pcode: 1, pname: '이름1', pprice: '1000', textarea: '설명1', imginput: 'https:placehold.co/100x100' },
    { pcode: 2, pname: '이름2', pprice: '2000', textarea: '설명2', imginput: 'https:placehold.co/100x100' },
    { pcode: 3, pname: '이름3', pprice: '3000', textarea: '설명3', imginput: 'https:placehold.co/100x100' }
]
    */

function getproducts() {
    // 1.
    localStorage.getItem('products');
}

function setProducts(products) {
    // 2. 
    if (products == null) (products = [])
    else { // 아니면 json타입 변환
        products = JSON.parse(products);
    }
    return products;
}
const products = [];
let pcode = 0;

function func1() {
    console.log('func1 실행');
    const pnames = document.querySelector('.pname'); console.log('pname');
    const pprices = document.querySelector('.pprice'); console.log('pprice');
    const textareas = document.querySelector('.textarea'); console.log('textarea');
    const imginputs = document.querySelector('.imginput'); console.log('imginput');
    const pname = pnames.value; console.log(pname);
    const pprice = pprices.value; console.log(pprice);
    const textarea = textareas.value; console.log(textarea);
    const imginput = imginputs.files[0]; console.log(imginput);

    const obj = {
        pcode: ++pcode,
        pname: pname,
        pprice: Number(pprice),
        textarea: textarea,
        imginput: imginput ? URL.createObjectURL(imginput) : 'https:placehold.co/100x100',
    }; console.log(obj);

    products.push(obj); // products 에 obj 저장하기

    pname.value = '';
    pprice.value = ''; // 초기값 
    textarea.value = '';
    alert('등록');

    productsPrint(); //제품 함수 조회
}

function productsPrint() {
    console.log('Print 실행');
    const tbody1 = document.querySelector('.tbody'); console.log(tbody1); // tbody 변환
    let html = ''; // 변수
    for (let i = 0; i <= products.length - 1; i++) {
        const product = products[i];
        html += `<tr> 
                    <td><img src="${product.imginput}"/> </td> <td>${product.pname}</td> <td>$${product.pprice.toLocaleString()} ,</td> <td>${product.textarea}</td>
                    <td><button onclick="func2( ${product.pcode} )" class="btnDe">삭제</button></td>
                </tr>`;
    }
    tbody1.innerHTML = html; console.log(html);

}

function func2(pcode) {
    console.log('func2 실행');
    console.log(pcode);
    for (let i = 0; i <= products.length - 1; i++) {
        if (products[i].pcode == pcode) {
            products.splice(i, 1); // i번쨰 인덱스 값 1개 삭제 
            alert('삭제완료')
            productsPrint();
            return; // 함수 종료
        }
    }
}

function func3() {
    console.log('func3 실행');
    const stocks = document.querySelector('#stock'); console.log(stocks);
    const changes = document.querySelector('.change'); console.log(changes);
    const entrys = document.querySelector('.entry'); console.log(entrys);
    const entryimgs = document.querySelector('.entryimg'); console.log(entryimgs);
    const stock = stocks.value; console.log(stock);
    const change = changes.value; console.log(change);
    const entry = entrys.value; console.log(entry);
    const entryimg = entryimgs.files[0]; console.log(entryimg);

    if (stock == '' || change == '' || entry == '') {
        alert('비어있음');
        return;
    }

    const obj = {
        stock: Number(stock),
        change: change,
        entry: entry,
        entryimg: entryimg ? URL.createObjectURL(entryimg) : 'https:placehold.co/100x100',
    }; console.log(obj);

    products.push(obj);
    func3print();
}

function func3print() {
    console.log('facn3 print s');
    const tbody2 = document.querySelector('.tbody2'); console.log(tbody2);
    let html = '';
    for (let i = 0; i <= products.length - 1; i++) {
        const product = products[i];
        html += `<tr>
                        <td><img src="https://placehold.co/100x100" /> </td>
                        <td>${product.pname}</td> <td>${product.pprice.toLocaleString()} </td> <td> ${product.change} </td> <td>${product.entry}</td> 
                        <td><button class="btnSession" onclick="btnSeeio(${product.pcode})">입출 사유 변경 </button></td>
                 </tr>`;
    }
    tbody2.innerHTML = html;
}

function btnSeeio(){
    
}
