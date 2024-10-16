const db = require('../db')
const { Brand } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {

  /* All brands written by Sayra */

    const brands = [
      {
        name: 'Sony',
        headquarters:'Minato City, Tokyo, Japan' ,
        owner: 'Kenichiro Yoshida',
        yearEstablished: '1946',
        logo:"https://cdn.worldvectorlogo.com/logos/sony-2.svg",
      },
      {
        name: 'Bose',
        headquarters: 'Framingham, Massachusetts, USA',
        owner: 'Amar Bose',
        yearEstablished: '1964',
        logo:"https://cdn.worldvectorlogo.com/logos/bose.svg",
      },
      {
        name: 'Yamaha',
        headquarters: 'Iwata, Shizuoka, Japan',
        owner: 'Hiroyuki Yanagi',
        yearEstablished: '1887',
        logo:"https://cdn.worldvectorlogo.com/logos/yamaha-2-1.svg",
      },
      {
        name: 'Denon',
        headquarters: 'Shirakawa, Japan',
        owner: 'Frederick Whitney Horn',
        yearEstablished: '1910',
        logo:"https://cdn.worldvectorlogo.com/logos/denon.svg",
      },
      {
        name: 'Devialet',
        headquarters: 'Paris, France',
        owner: 'Franck Lebouchard ',
        yearEstablished: '2007',
        logo:"https://cdn.worldvectorlogo.com/logos/logo-de-devialet.svg",
      },
      {
        name: 'Pioneer',
        headquarters: 'Bunkyo City, Tokyo, Japan',
        owner: 'Nozomu Matsumoto',
        yearEstablished: '1938',
        logo:"https://cdn.worldvectorlogo.com/logos/pioneer.svg", 
      },
      {
        name: 'LG Electronics',
        headquarters: 'Seoul, South Korea',
        owner: 'Koo In-Hwoi',
        yearEstablished: '1947',
        logo:"https://cdn.worldvectorlogo.com/logos/lg-electronics.svg",
      },
      {
        name: 'VIZIO',
        headquarters: 'Irvine, CA',
        owner: 'William Wang',
        yearEstablished: '2002',
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/VIZIO_logo.svg/512px-VIZIO_logo.svg.png?20201116185359"
      },
      {
        name: 'Logitech',
        headquarters: 'Lausanne, Switzerland',
        owner: 'Hanneke Faber',
        yearEstablished: '1969',
        logo:"https://cdn.worldvectorlogo.com/logos/logitech-2-1.svg" 
      },
      {
        name: 'Marantz',
        headquarters: 'Carlsbad, CA',
        owner: 'Saul Marantz',
        yearEstablished: '1953',
        logo:"https://cdn.worldvectorlogo.com/logos/marantz.svg"
      },
      {
        name: 'Sharp Corporation',
        headquarters: 'Sakai, Osaka, Japan',
        owner: 'Tokuji Hayakawa',
        yearEstablished: '1912',
        logo:"https://cdn.worldvectorlogo.com/logos/logo-of-the-sharp-corporation.svg"
      },
    ]
  
  

  await Brand.insertMany(brands) 

  console.log('============================')
  console.log('Brands have been seeded!')
  console.log('============================')

}

const run = async () => {

  await main()
  
  db.close()
}

run()