const db = require('../db')
const { Parent } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
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
        name: '',
        headquarters: '',
        owner: '',
        yearEstablished: '',
      },
      {
        name: '',
        headquarters: '',
        owner: '',
        yearEstablished: '',
      },
      {
        name: '',
        headquarters: '',
        owner: '',
        yearEstablished: '',
      },
      {
        name: '',
        headquarters: '',
        owner: '',
        yearEstablished: '',
      },
      {
        name: '',
        headquarters: '',
        owner: '',
        yearEstablished: '',
      },
    ]
  
  

  await Parent.insertMany(parents) 

  console.log('============================')
  console.log('PARENTS have been seeded!')
  console.log('============================')

}

const run = async () => {

  await main()
  
  db.close()
}

run()