/* I think this should allow me to CRUD in JavaScript, meaning user can CRUD */

/* ASK JEREMY AND THEM HOW TO DO THIS TOMMOROW MORNING */

/* INSERT DOM VARIABLES HERE */

const searchResultsContainer = document.querySelector('.search-results-container')
const productSearchBar = document.querySelector('#product-search-bar')
const productSearchButton = document.querySelector('#product-search-button')
const colorSearchBar = document.querySelector('#color-search-bar')
const colorSearchButton = document.querySelector('#color-search-button')

const waterproofButton = document.querySelector('#waterproof-button')
const notwaterproofButton = document.querySelector('#not-waterproof-button')
const portableButton = document.querySelector('#portable-button')
const notportableButton = document.querySelector('#not-portable-button')
const wirelessButton = document.querySelector('#wireless-button')
const notwirelessButton = document.querySelector('#not-wireless-button')
const bluetoothButton = document.querySelector('#bluetooth-button')
const notbluetoothButton = document.querySelector('#not-bluetooth-button')

const clearSearchListButton = document.querySelector('#clear-search-list-button')



const deleteProductForm = document.querySelector('#delete-product-form')
const productDeleteButton = document.querySelector('#product-delete-button')

/* INSERT EVENT LISTENERS HERE */

productSearchButton.addEventListener('click', async () => { 

    let productsArray = await getProducts('name', productSearchBar)

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    /* Meant to clear previous search results */

    for (product of productsArray) {

        await collectDataAndPopulateSearch(product)
    }

    /* Confirmation of data */
})

colorSearchButton.addEventListener('click', async () => { 

    let productsArray = await getProducts('colors', colorSearchBar)

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    /* Meant to clear previous search results */

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        await collectDataAndPopulateSearch(product)

    }

    /* Confirmation of data */
})

waterproofButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('waterproof')

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        await collectDataAndPopulateSearch(product)
    }
    
})

notwaterproofButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('notwaterproof')

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        await collectDataAndPopulateSearch(product)
    }
    
})

portableButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('portable')

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        await collectDataAndPopulateSearch(product)
    }
    
})

notportableButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('notportable')

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        await collectDataAndPopulateSearch(product)
    }

    
})

wirelessButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('wireless')

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        await collectDataAndPopulateSearch(product)
    }
    
})

notwirelessButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('notwireless')

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        await collectDataAndPopulateSearch(product)
    }
    
})

bluetoothButton.addEventListener('click', async () => {
    
    let productsArray = await booleanSearch('bluetooth')

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        await collectDataAndPopulateSearch(product)
    }

})

notbluetoothButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('notbluetooth')

    /* Axios call */

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

        await collectDataAndPopulateSearch(product)
    }
    
})

clearSearchListButton.addEventListener('click', async () => {
    ClearSearchResults(searchResultsContainer)
})

/* Delete item by ID function */

productDeleteButton.addEventListener('click', async () => {

    let targetOfDeletionID = deleteProductForm.value

    let foundProduct = await axios.get(`http://localhost:3001/products/id/${targetOfDeletionID}`)

    console.log('deleted', foundProduct.data.name)

    console.log('====================')

    let deletedProduct = await axios.delete(`http://localhost:3001/products/${targetOfDeletionID}`)

    console.log('====================')

    console.log(deletedProduct)

    // alert(
    //     `Still working on this - Jordan
    //     ID of user input ${targetOfDeletionID}
    //     product targeted: ${targetData}`)
})

/* INSERT FUNCTIONS HERE (Normal function notation, no arrows, so it can be hoisted) */

/* Returns array of products matching user's input */

async function getProducts(category, searchBarElement) {
    let userInput = searchBarElement.value
    let response = await axios.get(`http://localhost:3001/products/${category}/${userInput}`)
    return response.data
}

/* This should populate the bottom of the page with ALL search results Whenever search button is clicked. */

async function collectDataAndPopulateSearch(product) {

    let responseBrand = await axios.get(`http://localhost:3001/brands/${product.brand_id}`)

        let productName = product.name
        let productPrice = product.price
        let productDesc = product.description
        let productID = product._id
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
        console.log(productID)
        console.log('==================')

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)
}

/* Fills bottom of page with search results, of ALL items that fit provided criteria */
function appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID) {
    let searchResultItem = document.createElement('article')
        searchResultItem.innerHTML = 
        `<img class="search-result-image" id="brand-image" src="${productLogo}" alt="${brandName}">
        <img class="search-result-image" id="product-image" src="${productPic}" alt="${productName}">
        <h3 id="product-name">${productName} - (${productColor})</h3>
        <h4>$${productPrice}</h4>
        <p id="product-description">${productDesc}</p>
        <p>ID: ${productID}</p>
        <h5>Details</h5>
        <ul>
            <li>(None)</li>
        </ul>`

        searchResultsContainer.appendChild(searchResultItem)
}

/* Sets criteria to whether or not an item is bluetooth/waterproof/wireless/portable */
async function booleanSearch(categoryNameString) {
    let response = await axios.get(`http://localhost:3001/products/${categoryNameString}`)
    return response.data
}

/* Clears previous search results */
function ClearSearchResults(searchResultsContainer) {
    searchResultsContainer.innerHTML = ``
}