
const express = require('express') 
const PORT = process.env.PORT || 3001
// const cors = require('cors')
const db = require('./db')
// Insert your database schema files here (??)
const { Product, Brand } = require('./models')

/* Optional (?), for logging functionality */
const bodyParser = require('body-parser')
const logger = require('morgan')

const brandController = require('./controllers/brandController')
const productController = require('./controllers/productController')
// require() imports and middleware here ^ ///////

const app = express() 

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

/* Optional (?), for logging functionality */
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res)=> { // request and response arguements
    res.send('Hello there! Welcome to my website!')
})










// INDEX - app.get
app.get('/brands', brandController.getAllBrands)
// SHOW - app.get
app.get('/brands/:id', brandController.getBrandById)

app.get('/brands/name/:Name', brandController.getBrandByName)

//app.get('/brands/name/:Name', brandController.getBrandByName)
// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/brands', brandController.createBrand) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/brands/:id', brandController.updateBrand)
// DELETE - app.delete
app.delete('/brands/:id', brandController.deleteBrand)

// INDEX - app.get
app.get('/products', productController.getAllProducts)
// SHOW - app.get
app.get('/products/id/:id', productController.getProductById)

app.get('/products/name/:Name', productController.getProductByName)

app.get('/products/waterproof/', productController.getProductByWP)
app.get('/products/notwaterproof/', productController.getProductByWP)
app.get('/products/portable/', productController.getProductByPort)
app.get('/products/notportable/', productController.getProductByNotPort)
app.get('/products/wireless/', productController.getProductByWL)
app.get('/products/notwireless/', productController.getProductByNotWL)
app.get('/products/bluetooth/', productController.getProductByBT)
app.get('/products/notbluetooth/', productController.getProductByNotBT)

// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/products', productController.createProduct) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/products/:id', productController.updateProduct)
// DELETE - app.delete
app.delete('/products/:id', productController.deleteProduct)












app.get('/middleware', (req, res, next) => {
    console.log('middleware is working') // Next will run THIS CODE first BEFORE the response is sent
    next()
},
    (req, res) => /* Must restart req and res */
        {res.send('response complete')}
)

app.get('/*', (req, res)=> { // request and response arguements
    res.send('404 - Webpage Not Found!')
})