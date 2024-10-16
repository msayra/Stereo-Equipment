/* Here's how you import the products database into our controller */

const { Product, Brand } = require('../models')

// INDEX - app.get
const getAllProducts = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const products = await Product.find()
        res.json(products) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        if (product) {
            return res.json(product)
        } return res.status(404).send(`Product with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That product doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

const getProductByName = async (req, res) => {
    try {
    const { Name } = req.params
    const product = await Product.find({ name: { $regex: new RegExp(Name, 'i') } })
    if (product.length > 0) {
    return res.json(product)
    } return res.status(404).send(`Product with name of ${Name} not found!`) // Technically an else statement
    } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
    return res.status(404).send(`That product doesn't exist`)
    }
    return res.status(500).send(error.message)
    }
    }
    

// CREATE - app.post
const createProduct = async (req, res) => {
    try {
        const product = await new Product(req.body) /* Enables ability to update via tools like Thunderclient */
        await product.save()
        return res.status(201).json({product});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (product) {
            return res.status(200).json(product)
        }
        throw new Error("Product not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Product deleted");
        }
        throw new Error("Product not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    createProduct,
    updateProduct,
    deleteProduct
}