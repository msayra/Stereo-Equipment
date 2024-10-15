const { Schema } = require('mongoose')

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    category: {type: String, required: true},
    image_url: {type: String, required: true},
    description: {type: String, required: true},
    playbackFormat: {type: String, required: true},
    measurments: {
        height_inches: { type: Number, required: true },
        width_inches: { type: Number, required: true },
        depth_inches: { type: Number, required: true },
        weight_lbs: { type: Number, required: true },
    },
    powerSource: {
        isWireless: {type: Boolean, required: true},
        isPlugin: {type: Boolean, required: true},
        isBluetoothEnabled: {type: Boolean, required: true},
    },
    color: { type: String, required: true },
    inStock: {type: Boolean, required: true},
    isWaterProof: {type: Boolean, required: true},
    isPortable: { type: Boolean, required: true },
    brand_id: { type: Schema.Types.ObjectId, ref: 'Brand' },
  },
  { timestamps: true }
)

module.exports = productSchema