searchButton.addEventListener('click', async () => { 

    let userInput = userInput.value // Collects search results for user input
    /* Consider adding .toLowerCase() */

    let responseSearch = await axios.get(`http://localhost:3001/${userInput}`)

    let responseID = await axios.get(`http://localhost:3001/${userInput}`)

    let itemData = responseSearch.data

    let itemPic = itemData.imageUrl
    /* Confirmation of data */
})
