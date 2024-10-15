const db = require('../db')
const { Products } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
    const Products = [
      {
        name: 'Sony - STRDH190- 2-Ch. Stereo Receiver',
        description: 'The STR-DH190 stereo receiver delivers quality sound from vinyl and digital music BLUETOOTH® connectivity. Pair with turntables including PS-HX500 and PS-LX310BT to amplify your records. ',
        price: '199.99',
        imageUrl: "https://m.media-amazon.com/images/I/61vJ6wJG5fL.jpg",
        color:'Black',
      },
      {
        name: 'Sony - STRDH590 - 725W 5.2-Ch. Home Theater Receiver',
        description: ' The 5.2ch AV receiver brings movies to life with 4K HDR pass-through, Dolby Vision and flexible surround sound. ',
        price: '349.99',
        imageUrl: "https://m.media-amazon.com/images/I/51RAYidyp-L.jpg",
        color:'Black',
      },
      {
        name: 'Sony - Portable Theater System with 360 Spatial Sound ',
        description: 'The HT-AX7 uses 360 Spatial Sound Mapping technology to envelop you in spatial sound by creating multiple phantom speakers at the front and rear.',
        price: '499.99',
        imageUrl: "https://m.media-amazon.com/images/I/91HDZuw8QDL.jpg",
        color:'Silver',
      },
    ]
  
  

  await Product.insertMany(product) 

  console.log('============================')
  console.log('PRODUCTS have been seeded!')
  console.log('============================')

}

const run = async () => {

  await main()
  
  db.close()
}

run()