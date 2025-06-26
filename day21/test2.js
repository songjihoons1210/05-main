

function getProdunt() {
    let produnts = localStorage.getItem('produnts');
    if (produnts == null) {
        produnts = [];
    } else {
        produnts = JSON.parse(produnts);
    };
    return produnts;
}

function setprodunt(produnts) {
    localStorage.setItem('produnts', JSON.stringify(produnts));
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

    let products = getProdunt();
    let pcode = products.length == 0 ? 1 : products[products.length - 1].pcode + 1;

    const obj = {
        pcode: pcode,
        pname: pname,
        pprice: Number(pprice),
        pcontent: pcontent,
        pimg: pimg ? URL.createObjectURL(pimg) : '#',

    }; products.push(obj);

    pnameInputs.value = '';
    ppriceInputs.value = '';
    pcontentInputs.value = '';

    alert('성공')
    setprodunt(products);
    productsPrint();
}

function productsPrint() {
    const productBody = document.querySelector('#productBody');
    let html = '';
    let products = getProdunt();
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        html += `<tr>
					
						<td> <img src="${product.pimg}" /> </td>
					
						<td> ${product.pname} </td>
					
						<td>${product.pprice.toLocaleString()} </td>
					
						<td> ${product.pcontent} </td>
					
						<td> <button class="productDelete()" onclick="produntDel(${product.pcode})"> 삭제 </button></td>
					</tr>` ; 
    }
    productBody.innerHTML = html;
}

function produntDel(pcode){
    let products = getProdunt();
    for(let i = 0 ; i < products.length; i++){
        const product = products[i];
        if(product.pcode == pcode){
            products.splice(i, 1);
            alert('삭제');

            setprodunt(products);
            productsPrint();
            return;
        }
    }
}