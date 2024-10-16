const { Schema } = require('mongoose')

const brandSchema = new Schema(
  {
    name: { type: String, required: true },
    headquarters: { type: String, required: true },
    owner: { type: String, required: true },
    yearEstablished: { type: Number, required: true, min: 0 },
    logo: {type: String, required: true },
  },
  { timestamps: true }
)

module.exports = brandSchema