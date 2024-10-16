/* INSERT DOM VARIABLES HERE */

const searchResultsContainer = document.querySelector('.search-results-container')
const productSearchBar = document.querySelector('#product-search-bar')
const productSearchButton = document.querySelector('#product-search-button')

const waterproofButton = document.querySelector('#waterproof-button')
const notwaterproofButton = document.querySelector('#not-waterproof-button')
const portableButton = document.querySelector('#portable-button')
const notportableButton = document.querySelector('#not-portable-button')
const wirelessButton = document.querySelector('#wireless-button')
const notwirelessButton = document.querySelector('#not-wireless-button')
const bluetoothButton = document.querySelector('#bluetooth-button')
const notbluetoothButton = document.querySelector('#not-bluetooth-button')

/* INSERT EVENT LISTENERS HERE */

productSearchButton.addEventListener('click', async () => { 

    let userInput = productSearchBar.value // Collects search results for user input
    /* Consider adding .toLowerCase() */

    let response = await axios.get(`http://localhost:3001/products/name/${userInput}`)


    let productsArray = response.data

    ClearSearchResults(searchResultsContainer)

    /* Meant to clear previous search results */

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        let responseBrand = await axios.get(`http://localhost:3001/brands/${product.brand_id}`)

        let productName = product.name
        let productPrice = product.price
        let productDesc = product.description
        let productPic = product.imageUrl
        let productColor = product.color

        productLogo = responseBrand.data.logo
        brandName = responseBrand.data.name

        /* Confirmation of data */
        console.log('==================')
        console.log(productName)
        console.log(productPrice)
        console.log(productDesc)
        console.log(productPic)
        console.log(productColor)
        console.log(productLogo)
        console.log('==================')

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc)
    }

    /* Confirmation of data */
})


/* INSER FUNCTIONS HERE (Normal function notation, no arrows, so it can be hoisted) */


function ClearSearchResults(searchResultsContainer) {
    searchResultsContainer.innerHTML = ``
}

function appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc) {
    let searchResultItem = document.createElement('article')
        searchResultItem.innerHTML = 
        `<img class="search-result-image" id="brand-image" src="${productLogo}" alt="${brandName}">
        <img class="search-result-image" id="product-image" src="${productPic}" alt="${productName}">
        <h3>${productName} - (${productColor})</h3>
        <h4>$${productPrice}</h4>
        <p>${productDesc}</p>
        <h5>Details</h5>
        <ul>
            <li>(None)</li>
        </ul>`

        searchResultsContainer.appendChild(searchResultItem)
}