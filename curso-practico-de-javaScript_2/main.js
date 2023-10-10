const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-home');

const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.close');

const menuCarrito = document.querySelector('.carrito-img');
const shoppingCart = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProdutDetail);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu () {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive');
    }

    closeProdutDetail();

    mobileMenu.classList.toggle('inactive')
    
}

function toggleShoppingCart () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive')
}

function openProductDetailAside () {
    shoppingCart.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProdutDetail () {
    productDetailContainer.classList.add('inactive')
}


// agregamos productos con javaScript

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
/* <div class="product-container">
<img src="https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
<div class="product-info">
    <div>
        <p>$ 120,00</p>
        <p>SmartPhone</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">0
    </figure>
</div>
</div>
 */
function renderProduct (arr) {
    for (product of productList) {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product-container');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.append(productPrice, productName);
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
        
        
        productInfo.append(productInfoDiv, productInfoFigure);
        
        
        
        productContainer.append(productImg, productInfo);
        
        cardsContainer.appendChild(productContainer)
    }
}

renderProduct(productList);