
function getProducts() {
    let products = localStorage.getItem('products');

    if (products == null) {
        products = [];
    } else {
        products = JSON.parse(products);
    }
    return products;
}

function setProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));

}

function productAdd() {
    const pnameInputs = document.querySelector('#pnameInput');
    const ppriceInputs = document.querySelector('#ppriceInput');
    const pcontentInputs = document.querySelector('#pcontentInput');
    const pimgInputs = document.querySelector('#pimgInput');

    const pname = pnameInputs.value;
    const pprice = ppriceInputs.value;
    const pcontent = pcontentInputs.value;
    const pimg = pimgInputs.files[0];


    const products = getProducts();

    let pcode = products.length == 0 ? 1 : products[products.length - 1].pcode + 1;

    const obj = {
        pcode: pcode,
        pname: pname,
        pprice: Number(pprice),
        pcontent: pcontent,
        pimg: pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100',



    }; products.push(obj);

    pnameInputs.value = '';
    ppriceInputs.value = '';
    pcontentInputs.value = '';
    pimgInputs.value = '';

    alert('등록 성공');

    setProducts(products);
    productsPrint();

}

function productsPrint() {
    const productBody = document.querySelector('#productBody');
    let html = '';
    let products = getProducts();
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        html += `<tr>
                    <td><img src="${product.pimg}"</td>   <td>${product.pname} </td>   <td>${product.pprice.toLocaleString()}</td>   <td>${product.pcontent}</td>
                    <td> <button class="productDelete()" onclick="productsDelete(${product.pcode})"> 삭제 </button></td>
                </tr>`;

    }
    productBody.innerHTML = html;
}

function productsDelete(pcode) {
    let products = getProducts();
    for (let i = 0; i < products.length; i++) {
        if (products[i].pcode == pcode) {
            products.splice(i, 1);
            alert('제품이 삭제되었습니다.');
            // 변경된 products 배열을 다시 로컬 스토리지에 저장합니다.
            setProducts(products);
            // 제품 목록을 화면에 다시 그려서 최신 상태를 반영합니다.
            productsPrint();
            // 목표를 달성했으므로 함수를 즉시 종료합니다.
            return;
        }
    } // for 반복문 끝

    // 반복문이 끝날 때까지 해당 pcode를 찾지 못했다면, 오류 메시지를 표시합니다.
    alert('오류: 삭제하려는 제품을 찾지 못했습니다.');
} // productDelete 함수 끝