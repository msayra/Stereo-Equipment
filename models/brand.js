const { Schema } = require('mongoose')

const brandSchema = new Schema(
  {
    name: { type: String, required: true },
    headquarters: { type: String, required: true },
    primaryProducts: [{ type: String, required: true }], /* Array of Strings */
    owner: { type: String, required: true },
    yearEstablished: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
)

module.exports = brandSchema