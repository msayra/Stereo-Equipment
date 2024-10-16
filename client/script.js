/* INSERT DOM VARIABLES HERE */


/* INSERT EVENT LISTENERS HERE */

searchButton.addEventListener('click', async () => { 

    let userInput = userInput.value // Collects search results for user input
    /* Consider adding .toLowerCase() */

    let response = await axios.get(`http://localhost:3001/products/name/${userInput}`)


    let productsArray = response.data

    searchResultsContainer.innerHTML = ``
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

        let searchResultItem = document.createElement('article')
        searchResultItem.innerHTML = 
        `<img class="search-result-image" id="brand-image" src="${productLogo}" alt="TEST BRAND IMAGE">
        <img class="search-result-image" id="product-image" src="${productPic}" alt="TEST ITEM IMAGE">
        <h3>${productName} - (${productColor})</h3>
        <h4>$${productPrice}</h4>
        <p>${productDesc}</p>`

        searchResultsContainer.appendChild(searchResultItem)
    }

    /* Confirmation of data */
})


/* INSER FUNCTIONS HERE (Normal function notation, no arrows, so it can be hoisted) */