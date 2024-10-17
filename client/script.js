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

    let productsArray = await getProductsByName(productSearchBar)

    ClearSearchResults(searchResultsContainer)

    /* Meant to clear previous search results */

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

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

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)

    }

    /* Confirmation of data */
})

waterproofButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('waterproof')

    

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

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

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)
    }
    
})

notwaterproofButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('notwaterproof')

    

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

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

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)
    }
    
})

portableButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('portable')

    

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

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

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)
    }
    
})

notportableButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('notportable')

    

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

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

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)
    }

    
})

wirelessButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('wireless')

    

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

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

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)
    }
    
})

notwirelessButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('notwireless')

    

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

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

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)
    }
    
})

bluetoothButton.addEventListener('click', async () => {
    
    let productsArray = await booleanSearch('bluetooth')

    

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

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

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)
    }

})

notbluetoothButton.addEventListener('click', async () => {

    let productsArray = await booleanSearch('notbluetooth')

    

    ClearSearchResults(searchResultsContainer)

    for (product of productsArray) { /* This should populate the bottom of the page with ALL
        search results Whenever search button is clicked. */

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

        /* Temporary name and format until HTML is finalized */

        appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID)
    }
    
})

/* INSERT FUNCTIONS HERE (Normal function notation, no arrows, so it can be hoisted) */

/* Returns array of products matching user's name input */
async function getProductsByName(searchBarElement) {
    let userInput = searchBarElement.value
    let response = await axios.get(`http://localhost:3001/products/name/${userInput}`)
    return response.data
}

/* Fills bottom of page with search results, of ALL items that fit provided criteria */
function appendSearchResults(searchResultsContainer, productLogo, brandName, productPic, productName, productColor, productPrice, productDesc, productID) {
    let searchResultItem = document.createElement('article')
        searchResultItem.innerHTML = 
        `<img class="search-result-image" id="brand-image" src="${productLogo}" alt="${brandName}">
        <img class="search-result-image" id="product-image" src="${productPic}" alt="${productName}">
        <h3>${productName} - (${productColor})</h3>
        <h4>$${productPrice}</h4>
        <p>${productDesc}</p>
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