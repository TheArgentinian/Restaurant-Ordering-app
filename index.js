import { menuArray } from "/data.js"


const renderMenuEl = document.getElementById("feed")

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