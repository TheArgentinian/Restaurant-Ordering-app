import { menuArray } from "/data.js"


const renderMenuEl = document.getElementById("feed")
const renderCartEl = document.getElementById("cart")
const hidden = document.getElementById('hidden')

let addItemsToCart = []

document.addEventListener("click", function(e){
    if(e.target.dataset.buy){
        addItemsToShoppingCart(e.target.dataset.buy)
        hidden.style.display ='block'
    }else if(e.target.dataset.remove){
        removeItemFromCart(e.target.dataset.remove)
    }
})

function displayMenu(){
    let renderMenu = ''
    menuArray.forEach(function(item){
        renderMenu += `
        <div class='shop-item-line'>
                <div class='shop-item'>
                    <img src='${item.emoji}' class='emoji'>
                    <div class='item-info'>
                        <p class='item-name'>${item.name}</p>
                        <p class='item-ingredients'>${item.ingredients}</p>
                        <p class='item-price'><span class='dollar-sign'>$</span>${item.price}</p>
                    </div>
                </div>
                    <button 
                        data-buy='${item.id}'
                        type='button' 
                        class='add-btn' 
                        id='add-btn'>+
                    </button>
            </div>`
    
    })
    renderMenuEl.innerHTML = renderMenu
}

displayMenu()

function addItemsToShoppingCart(itemId){
    const addedItem = menuArray.filter(function(item){
        return item.id == itemId  
    })[0]
    addItemsToCart.push(addedItem)   
    displayCart()
}

 function displayCart(){
    let renderCart = ""
    addItemsToCart.forEach(function(item, index){
    renderCart += `<div class="cart-items" id="cart-items">
                <div class = 'item-and-remove'>
                <p class='cart-item-name'> ${item.name}</p>
                <button 
                    type='button' 
                    class='remove-btn' 
                    id='remove-btn'
                    data-remove='${index}'
                    >remove
                </button>
            </div>
                <p class='cart-item-name'><span class='dollar-sign-cart'>$
                </span>${item.price}</p>                
         </div>`               
})

renderCartEl.innerHTML = renderCart

}

displayCart()

function addingOfPrices(){
    let prices = 0 
    addItemsToCart.forEach(function(item){
        prices += item.price
    })
    totalPrice.textContent =  '$ ' + prices
}

function removeItemFromCart(ItemIndex){
    addItemsToCart.splice(ItemIndex, 1)
    if(addItemsToCart.length === 0){
        hidden.style.display ='none'
    }}

