/* Here's how you import the brands database into our controller */

// If only ONE item type, you can do this 
// const Brand = require('../models/brand');

const { Product, Brand } = require('../models')

// INDEX - app.get
const getAllBrands = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const brands = await Brand.find()
        res.json(brands) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
const getBrandById = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.findById(id)
        if (brand) {
            return res.json(brand)
        } return res.status(404).send(`Brand with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That brand doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

// CREATE - app.post
const createBrand = async (req, res) => {
    try {
        const brand = await new Brand(req.body) /* Enables ability to update via tools like Thunderclient */
        await brand.save()
        return res.status(201).json({brand});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateBrand = async (req, res) => {
    try {
        let { id } = req.params;
        let brand = await Brand.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (brand) {
            return res.status(200).json(brand)
        }
        throw new Error("Brand not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Brand.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Brand deleted");
        }
        throw new Error("Brand not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
}