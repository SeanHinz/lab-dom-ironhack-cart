// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here  

}
let subtoltalBut = document.querySelector("#calculate");
subtoltalBut.onclick = function () {
  productsArray = document.querySelectorAll(".product");
  subtotalAmount = 0
  for (let i = 0; i < productsArray.length; i++) {
    // if (i === 0) {
    //   let findSubtotal = Number(document.querySelector(`.product:first-child > .price span`).innerText) * Number(document.querySelector(`.product:first-child > .quantity input`).value);
    //   document.querySelector(`.product:first-child > .subtotal span`).innerText = findSubtotal;
    //   subtotalAmount += findSubtotal;
    // } else if (i === productsArray.length - 1) {
    //   let findSubtotal = Number(document.querySelector(`.product:last-child > .price span`).innerText) * Number(document.querySelector(`.product:last-child > .quantity input`).value);
    //   document.querySelector(`.product:last-child > .subtotal span`).innerText = findSubtotal;
    //   subtotalAmount += findSubtotal;
    // } else {
    //   let findSubtotal = Number(document.querySelector(`.product:nth-child(${i}) > .price span`).innerText) * Number(document.querySelector(`.product:nth-child(${i}) > .quantity input`).value);
    //   document.querySelector(`.product:nth-child(${i}) > .subtotal span`).innerText = findSubtotal};
    //   subtotalAmount += findSubtotal;      
    // }
      let row = productsArray[i]
      let unitPrice = row.querySelector('.price span').innerText
      let quantity = row.querySelector('.quantity input').value
      let subtotalSpan = row.querySelector('.subtotal span')
      subtotalSpan.innerText = (Number(unitPrice) * Number(quantity)).toFixed(2);
      subtotalAmount += Number(subtotalSpan.innerText);

    //So I have the cart able to use multiple products and get the subtotal for each
    console.log(subtotalSpan)

  // subtotalArray =  [Number(document.querySelector(".subtotal span").innerText)];
  //console.log(document.querySelectorAll(".subtotal span").innerText)
  //returns undefined
  // console.log(document.querySelectorAll(".subtotal span"))
  //returns [span, span]
  // console.log(subtotalArray)
  // document.querySelector("#total-value span").innerText = subtotalArray.reduce((a, b) => {
  //   return a + b;
  // }, 0)

  
}
console.log(subtotalAmount)
  document.querySelector('#total-value span').innerText = subtotalAmount.toFixed(2)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4
let refreshButtons = () => {
let removeButtons = document.querySelectorAll('.btn-remove')
for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].onclick = function (event) {
      event.currentTarget.parentElement.parentElement.remove()
    }
  }
}
refreshButtons()

let createProduct = document.querySelector('#create');
createProduct.onclick = function () {
  let newName = document.querySelector('.create-product input[type = "text"]').value
  let newPrice = document.querySelector('.create-product input[type = "number"]').value

  let newRow = document.createElement('tr')
  newRow.classList.add('product')
  newRow.innerHTML = `
  <td class="name">
  <span>${newName}</span>
</td>
<td class="price">$<span>${newPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
`
document.querySelector('tbody').insertBefore(newRow, document.querySelector('.create-product'));
refreshButtons()
}




