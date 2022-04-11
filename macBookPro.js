/*start point*/
function getNumber(product, value) {
    document.getElementById(product + '-cost').innerText = value;
}

function updateTotal(value) {
    const totalDefaultCost = 1299;
    document.getElementById('total-cost').innerText = totalDefaultCost + value;
    document.getElementById('finalCost').innerText = totalDefaultCost + value;
}

function reducePercentageByName(name) {
    if (name !== "ismat") {
        return null;
    }

    let price = document.getElementById('finalCost').innerText;
    let priceNumber = parseInt(price);


    let reducedPrice = priceNumber * 0.2;
    price = price - reducedPrice
    return price;

}

/*for memory cost*/

document.getElementById('firstMemory-btn').addEventListener("click", function () {
    getNumber('memory', 0)
    updateTotal(0)
})

document.getElementById('secondMemory-btn').addEventListener("click", function () {
    getNumber('memory', 20)
    updateTotal(20)


})

/*for storage cost*/


document.getElementById('firstStorage-btn').addEventListener("click", function () {
    getNumber('storage', 0)
    updateTotal(0)
})

document.getElementById('secondStorage-btn').addEventListener("click", function () {
    getNumber('storage', 30)
    updateTotal(30)
})

document.getElementById('thirdStorage-btn').addEventListener("click", function () {
    getNumber('storage', 60)
    updateTotal(60)

})

/*delivery cost*/

document.getElementById('firstDelivery-btn').addEventListener("click", function () {
    getNumber('delivery', 0)
    updateTotal(0)


})

document.getElementById('secondDelivery-btn').addEventListener("click", function () {
    getNumber('delivery', 20)
    updateTotal(20)

})

/*for promo code*/
document.getElementById('apply-btn').addEventListener("click", function () {
    let promoCode = document.getElementById('promo-code').value;
    let reducevalue = reducePercentageByName(promoCode);
    if (reducevalue) {
        document.getElementById('finalCost').innerText = reducePercentageByName(promoCode);
    }

}, {once: true})







