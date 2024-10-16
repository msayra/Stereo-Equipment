const db = require('../db')
const { Product, Brand } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {

  const sony = await Brand.find({ name: 'Sony' })
  const bose = await Brand.find({ name: 'Bose' })
  const yamaha = await Brand.find({ name: 'Yamaha' })
  const denon = await Brand.find({ name: 'Denon' })
  const pioneer = await Brand.find({ name: 'Pioneer' })
  const devialet = await Brand.find({ name: 'Devialet' })
  const lgElectronics = await Brand.find({ name: 'LG Electronics' })
  const vizio = await Brand.find({ name: 'VIZIO' })
  const logitech = await Brand.find({ name: 'Logitech' })
  const marantz = await Brand.find({ name: 'Marantz' })
  const sharpCorp = await Brand.find({ name: 'Sharp Corporation' }) 

  const products = [

    // Sony - Written by Sayra
    {
      name: 'Sony - STRDH190- 2-Ch. Stereo Receiver',
      description: 'The STR-DH190 stereo receiver delivers quality sound from vinyl and digital music BLUETOOTH® connectivity. Pair with turntables including PS-HX500 and PS-LX310BT to amplify your records. ',
      price: 199.99,
      imageUrl: "https://m.media-amazon.com/images/I/61vJ6wJG5fL.jpg",
      color:'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: sony[0]._id,
    },
    {
      name: 'Sony - STRDH590 - 725W 5.2-Ch. Home Theater Receiver',
      description: ' The 5.2ch AV receiver brings movies to life with 4K HDR pass-through, Dolby Vision and flexible surround sound. ',
      price: 349.99,
      imageUrl: "https://m.media-amazon.com/images/I/51RAYidyp-L.jpg",
      color:'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: sony[0]._id,
    },
    {
      name: 'Sony - Portable Theater System with 360 Spatial Sound',
      description: 'The HT-AX7 uses 360 Spatial Sound Mapping technology to envelop you in spatial sound by creating multiple phantom speakers at the front and rear.',
      price: 499.99,
      imageUrl: "https://m.media-amazon.com/images/I/91HDZuw8QDL.jpg",
      color:'Silver',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: true,
      brand_id: sony[0]._id,
    },

    // The following products were populated by ChatGPT in accordance to the Schema Template, 
    // and edited for accuracy/image URLs by Jordan
    // I ain't writing allah dat dummy data about something I don't know about

    // Bose
    {
      name: 'Bose QuietComfort 45 Headphones',
      description: 'High-fidelity noise-canceling wireless headphones with adjustable noise-cancellation.',
      price: 279.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51Ltm3tbH2L._AC_SL1200_.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: true,
      brand_id: bose[0]._id,
    },
    {
      name: 'Bose Smart Soundbar 900',
      description: 'Dolby Atmos soundbar with Voice4Video™ technology and immersive sound experience.',
      price: 899.99,
      imageUrl: 'https://m.media-amazon.com/images/I/61s3PvOHOrL._AC_SL1500_.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: bose[0]._id,
    },
    {
      name: 'Bose Portable Smart Speaker',
      description: 'Durable, portable speaker with 360-degree sound and built-in voice assistants.',
      price: 399.99,
      imageUrl: 'https://m.media-amazon.com/images/I/71lkFhVlOtL._AC_SL1500_.jpg',
      color: 'Silver',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: true,
      isPortable: true,
      brand_id: bose[0]._id,
    },
    // Yamaha
    {
      name: 'Yamaha RX-V6A 7.2-Channel AV Receiver',
      description: 'AV receiver with 4K/120Hz support, HDMI 2.1, Dolby Atmos, and MusicCast multi-room audio.',
      price: 749.95,
      imageUrl: 'https://www.yamaha.com/yamahavgn/PIM/Images/01-rx-v6a-bl-ic_af031ac4310c970ea04e34c7ef7ab384.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: yamaha[0]._id,
    },
    {
      name: 'Yamaha YAS-209 Soundbar with Wireless Subwoofer',
      description: 'Soundbar with built-in Alexa voice control, DTS Virtual:X 3D surround sound, and Bluetooth streaming.',
      price: 349.95,
      imageUrl: 'https://m.media-amazon.com/images/I/51LO7rdEpDL._AC_SL1200_.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: yamaha[0]._id,
    },
    {
      name: 'Yamaha MusicCast 50 Wireless Speaker',
      description: 'Multi-room wireless speaker with MusicCast technology and high-resolution audio.',
      price: 499.95,
      imageUrl: 'https://www.yamaha.com/yamahavgn/PIM/Images/EB8C0C3EA1EF401EA95071ECDF2D9D54_12073_5000x3903_c3b6f878994e35d79edd9eeb68e80713.jpg',
      color: 'White',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: true,
      brand_id: yamaha[0]._id,
    },
    // Denon
    {
      name: 'Denon AVR-X3700H 9.2 Channel Receiver',
      description: '9.2 channel receiver with 3D audio support, Dolby Atmos, and 8K upscaling.',
      price: 1299.00,
      imageUrl: 'https://www.denon.com/dw/image/v2/BGJH_PRD/on/demandware.static/-/Sites-master-catalog-soundunited/default/dw9a7c7fa1/denon/PDP_images/AVReceivers/AVR-X3700H/AVR-X3700H_scene-angle.png',
      color: 'Black',
      isWireless: false,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: denon[0]._id,
    },
    {
      name: 'Denon Home 350 Wireless Speaker',
      description: 'Wireless speaker with HEOS built-in, high-resolution audio, and multi-room capability.',
      price: 699.00,
      imageUrl: 'https://m.media-amazon.com/images/I/71yVoE+aL8L._AC_SL1500_.jpg',
      color: 'White',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: true,
      brand_id: denon[0]._id,
    },
    {
      name: 'Denon DHT-S516H Soundbar',
      description: 'Soundbar with wireless subwoofer and HEOS multi-room streaming built-in.',
      price: 599.00,
      imageUrl: 'https://www.denon.com/dw/image/v2/BGJH_PRD/on/demandware.static/-/Sites-master-catalog-soundunited/default/dw5288ee0f/denon/PDP_images/SoundBars/DHT-S516/DHT-S516_scene-angle.png',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: denon[0]._id,
    },
    // Pioneer
    {
      name: 'Pioneer Elite VSX-LX505 11.2-Channel AV Receiver',
      description: '11.2-channel AV receiver with 120W per channel, 8K, HDR10+, and Dolby Atmos support.',
      price: 1399.00,
      imageUrl: 'https://pioneer-av.imgix.net/product-images/VSX-LX505BUS_Angle_Right_2000x2000.png',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: pioneer[0]._id,
    },
    {
      name: 'Pioneer SP-BS22-LR Andrew Jones Bookshelf Speakers',
      description: 'Affordable bookshelf speakers designed by Andrew Jones, featuring a 4-inch woofer and 1-inch soft dome tweeter.',
      price: 129.99,
      imageUrl: 'https://noaudiophile.com/Pioneer_BS-22/Pioneer_BS22_LR.jpg',
      color: 'Blue',
      isWireless: false,
      isBluetoothEnabled: false,
      isWaterProof: false,
      isPortable: false,
      brand_id: pioneer[0]._id,
    },
    {
      name: 'Pioneer VSX-534 5.2-Channel AV Receiver',
      description: '5.2-channel AV receiver with Dolby Atmos and DTS:X support, Bluetooth streaming, and HDMI 4K pass-through.',
      price: 349.99,
      imageUrl: 'https://pioneer-av.imgix.net/product-images/VSX-534B_Angle-R_2000x2000.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: pioneer[0]._id,
    },
    // Devialet
    {
      name: 'Devialet Phantom I 108 dB',
      description: 'High-end wireless speaker with ultra-dense sound and precise bass response.',
      price: 6700.00,
      imageUrl: 'https://assets.devialet.com/en-us/media/dvl_media/Visual_Packshots_Phantom_I_Limited_Edition_1-1.png',
      color: 'Red',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: devialet[0]._id,
    },
    {
      name: 'Devialet Phantom II 95 dB',
      description: 'Compact wireless speaker delivering high-fidelity sound and deep bass.',
      price: 1199.00,
      imageUrl: 'https://assets.devialet.com/en-us/media/dvl_media/Devialet_Phantom_II_White_1.png',
      color: 'White',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: devialet[0]._id,
    },
    {
      name: 'Devialet Gemini Wireless Earbuds',
      description: 'True wireless earbuds with adaptive noise-cancellation and superior sound quality.',
      price: 299.00,
      imageUrl: 'https://assets.devialet.com/en-us/media/dvl_media/Devialet_Gemini_002.png',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: true,
      isPortable: true,
      brand_id: devialet[0]._id,
    },
    // LG Electronics
    {
      name: 'LG SP9YA 5.1.2-Channel Soundbar',
      description: 'Dolby Atmos soundbar with wireless subwoofer, works with Alexa and Google Assistant.',
      price: 579.95,
      imageUrl: 'https://m.media-amazon.com/images/I/31XpgqikI5S._AC_SL1200_.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: false,
      isWaterProof: false,
      isPortable: false,
      brand_id: lgElectronics[0]._id,
    },
    {
      name: 'LG Tone Free FP9 Wireless Earbuds',
      description: 'Wireless earbuds with UVnano charging case, active noise-cancellation, and 3D sound.',
      price: 199.99,
      imageUrl: 'https://m.media-amazon.com/images/I/61oGGQpLcnL._AC_SL1500_.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: true,
      brand_id: lgElectronics[0]._id,
    },
    {
      name: 'LG XBOOM Go PL7 Portable Bluetooth Speaker',
      description: 'Waterproof Bluetooth speaker with Meridian technology and long battery life.',
      price: 195.07,
      imageUrl: 'https://m.media-amazon.com/images/I/51wOL5X5f8L._AC_SL1230_.jpg',
      color: 'Blue',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: true,
      isPortable: true,
      brand_id: lgElectronics[0]._id,
    },
    // VIZIO
    {
      name: 'VIZIO M-Series 5.1 Soundbar',
      description: '5.1-channel soundbar system with Dolby Atmos and DTS:X support for immersive sound.',
      price: 329.99,
      imageUrl: 'https://www.vizio.com/content/dam/vizio/us/en/images/product/2020/audio/soundbars/m51a-h6/gallery/2020_M51a-H6_Hero_Right-Angle.jpg/jcr:content/renditions/cq5dam.web.1920.1200.png',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: vizio[0]._id,
    },
    {
      name: 'VIZIO Elevate 5.1.4 Soundbar',
      description: 'Premium soundbar with rotating speakers for Dolby Atmos and DTS:X 3D surround sound.',
      price: 799.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51PgLzyCQDS._AC_SL1500_.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: vizio[0]._id,
    },
    {
      name: 'VIZIO V-Series 2.1 Home Theater Soundbar',
      description: 'Compact 2.1-channel soundbar with a wireless subwoofer for room-filling audio.',
      price: 149.99,
      imageUrl: 'https://m.media-amazon.com/images/I/61cRjyEkjbL._AC_SL1500_.jpg',
      color: 'Black',
      isWireless: false,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: vizio[0]._id,
    },  
  
    // Logitech
    {
      name: 'Logitech G560 LIGHTSYNC PC Gaming Speakers',
      description: 'RGB gaming speakers with 240 watts of peak power and surround sound.',
      price: 199.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51fBODtSLnL._AC_SL1024_.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: logitech[0]._id,
    },
    {
      name: 'Logitech Z906 5.1 Surround Sound Speaker System',
      description: 'THX-certified 5.1 surround sound system with 1000 watts of peak power.',
      price: 399.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51s54H-J94L._AC_SL1500_.jpg',
      color: 'Black',
      isWireless: false,
      isBluetoothEnabled: false,
      isWaterProof: false,
      isPortable: false,
      brand_id: logitech[0]._id,
    },
    {
      name: 'Logitech Z407 Bluetooth Computer Speakers',
      description: 'Powerful desktop speakers with wireless Bluetooth streaming and immersive sound.',
      price: 119.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51s54H-J94L._AC_SL1500_.jpg',
      color: 'Grey',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: logitech[0]._id,
    },
  
    // Marantz
    {
      name: 'Marantz SR7015 9.2-Channel AV Receiver',
      description: '9.2-channel AV receiver with 8K upscaling, Dolby Atmos, and HEOS multi-room audio.',
      price: 2299.00,
      imageUrl: 'https://m.media-amazon.com/images/I/718lualUWiL._AC_SL1500_.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: marantz[0]._id,
    },
    {
      name: 'Marantz CD6007 CD Player',
      description: 'Designed for the aspiring audio enthusiast, the Marantz CD6007 lets you enjoy masterfully recreated audio from CD and USB sources.',
      price: 599.00,
      imageUrl: 'https://m.media-amazon.com/images/I/415L185XEdL._AC_SL1000_.jpg',
      color: 'Black',
      isWireless: false,
      isBluetoothEnabled: false,
      isWaterProof: false,
      isPortable: false,
      brand_id: marantz[0]._id,
    },
    {
      name: 'Marantz Model 30 Integrated Amplifier',
      description: 'Get the most musical sound possible from this Sound Master tuned integrated amplifier. Its custom designed technology delivers exquisite detail and unforgettable musicality from any style of music.',
      price: 2999.00,
      imageUrl: 'https://m.media-amazon.com/images/I/510Bcnys-ML._AC_SL1200_.jpg',
      color: 'Black',
      isWireless: false,
      isBluetoothEnabled: false,
      isWaterProof: false,
      isPortable: false,
      brand_id: marantz[0]._id,
    },
  
    // Sharp Corporation
    {
      name: 'Sharp HT-SB603 2.1 Soundbar System',
      description: '2.1 soundbar system with wireless subwoofer and Bluetooth connectivity.',
      price: 349.50,
      imageUrl: 'https://images.electronicexpress.com/product.c.xl/179959.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: sharpCorp[0]._id,
    },
    {
      name: 'Sharp HT-SBW460 3.1 Soundbar',
      description: '3.1-channel soundbar with Dolby Atmos and a wireless subwoofer for powerful bass.',
      price: 399.99,
      imageUrl: 'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/07fe2c78-dbd3-11ea-935b-1ef7a8fb4356.jpg',
      color: 'Silver',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: sharpCorp[0]._id,
    },
    {
      name: 'Sharp HT-SB110 2.0 Slim Soundbar',
      description: 'Slim 2.0-channel soundbar with Bluetooth for streaming audio and TV sound enhancement.',
      price: 62.49,
      imageUrl: 'https://m.media-amazon.com/images/I/41Z8fl2vpjL._AC_SL1280_.jpg',
      color: 'Black',
      isWireless: true,
      isBluetoothEnabled: true,
      isWaterProof: false,
      isPortable: false,
      brand_id: sharpCorp[0]._id,
    }  
  ]
  
  

  await Product.insertMany(products) 

  console.log('============================')
  console.log('PRODUCTS have been seeded!')
  console.log('============================')

}

const run = async () => {

  await main()
  
  db.close()
}

run()