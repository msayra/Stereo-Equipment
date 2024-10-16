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
      },
      {
        name: 'Bose',
        headquarters: 'Framingham, Massachusetts, USA',
        owner: 'Amar Bose',
        yearEstablished: '1964',
      },
      {
        name: 'Yamaha',
        headquarters: 'Iwata, Shizuoka, Japan',
        owner: 'Hiroyuki Yanagi',
        yearEstablished: '1887',
      },
      {
        name: 'Denon',
        headquarters: 'Shirakawa, Japan',
        owner: 'Frederick Whitney Horn',
        yearEstablished: '1910',
      },
      {
        name: 'Devialet',
        headquarters: 'Paris, France',
        owner: 'Franck Lebouchard ',
        yearEstablished: '2007',
      },
      {
        name: 'Pioneer',
        headquarters: 'Bunkyo City, Tokyo, Japan',
        owner: 'Nozomu Matsumoto',
        yearEstablished: '1938',
      },
      {
        name: 'LG Electronics',
        headquarters: 'Seoul, South Korea',
        owner: 'Koo In-Hwoi',
        yearEstablished: '1947',
      },
      {
        name: 'VIZIO',
        headquarters: 'Irvine, CA',
        owner: 'William Wang',
        yearEstablished: '2002',
      },
      {
        name: 'Logitech',
        headquarters: 'Lausanne, Switzerland',
        owner: 'Hanneke Faber',
        yearEstablished: '1969',
      },
      {
        name: 'Marantz',
        headquarters: 'Carlsbad, CA',
        owner: 'Saul Marantz',
        yearEstablished: '1953',
      },
      {
        name: 'Sharp Corporation',
        headquarters: 'Sakai, Osaka, Japan',
        owner: 'Tokuji Hayakawa',
        yearEstablished: '1912',
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