const { Schema } = require('mongoose')

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    category: {type: String, required: true},
    image_url: {type: String, required: true},
    description: {type: String, required: true},
    isWireless: {type: Boolean, required: true},
    isBluetoothEnabled: {type: Boolean, required: true},
    color: { type: String, required: true },
    isWaterProof: {type: Boolean, required: true},
    isPortable: { type: Boolean, required: true },
    brand_id: { type: Schema.Types.ObjectId, ref: 'Brand' },
  },
  { timestamps: true }
)

module.exports = productSchema