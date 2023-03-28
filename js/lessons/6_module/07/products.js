import products from '../data/prod.js';

// const product = {
//      name: 'Сервоприводы',
//      description: 
//      'Lcdscsdfs, csddaddasd sdfsdes',
//      price: 2000,
//      available: true,
//      onSale: true,    
// };
{
     /*
   <article class="product">
     <h2 class="product__name">Название</h2>
     <p class="product__descr">Описание</p>
     <p product__price>Цена: 1111 кредитов</p>
   </article>
   */
   }

//    const productEl = document.createElement('article');
//    productEl.classList.add('product');

//    const nameEl = document.createElement('h2');
//    nameEl.textContent = product.name;
//    nameEl.classList.add('product__name');

//    const descrEl = document.createElement('h2');
//    descrEl.textContent = product.description;
//    descrEl.classList.add('product__descr');

//    const priceEl = document.createElement('h2');
//    priceEl.textContent = `Цена: ${product.price} крeдитов`;
//    priceEl.classList.add('product__price');

// productEl.append(nameEl, descrEl, priceEl);
// console.log("🚀 ~ file: products.js:35 ~ productEl:", productEl)

const makeProductsCard = ({name, description, price}) => {
     const productEl = document.createElement('article');
     productEl.classList.add('product');
  
     const nameEl = document.createElement('h2');
     nameEl.textContent = name;
     nameEl.classList.add('product__name');
  
     const descrEl = document.createElement('h2');
     descrEl.textContent = description;
     descrEl.classList.add('product__descr');
  
     const priceEl = document.createElement('h2');
     priceEl.textContent = `Цена: ${price} крeдитов`;
     priceEl.classList.add('product__price');

     productEl.append(nameEl, descrEl, priceEl);

     return productEl;
}

console.log("🚀 ~ file: products.js:40 ~ makeProductsCard ~ makeProductsCard:", makeProductsCard(products[1]))

const productsContainerEl = document.querySelector('.js-products');

const elements = products.map(makeProductsCard);
 console.log("🚀 ~ file: products.js:63 ~ element:", elements)
 
productsContainerEl.append(...elements);