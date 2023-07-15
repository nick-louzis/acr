import atv250 from '../assets/atvs/ATV-250cc.avif'
import atv300 from '../assets/atvs/ATV-300cc.avif'
import gforce from '../assets/atvs/Cforce-450cc.avif'

import sym50 from '../assets/scooters/Symphony-50cc.avif'
import sym125 from '../assets/scooters/Symphony-125cc.avif'
import sym200 from '../assets/scooters/Symphony-200cc.avif'
import vision from '../assets/scooters/vision.avif'
import people from '../assets/scooters/peoples.avif'

const scooter= [
 [

  
    {
        name:"Symphony ST 125cc",
        cc:125,
        color:'White, Blue, Brown, Black',
        licence:'A1',
        passengers:'For 2 Persons',
        img:sym125
    },
    {
        name:"Symphony ST 200cc",
        cc:200,
        color:'Brown',
        licence:'A2',
        passengers:'For 2 Persons',
        img:sym200
    },
    {
        name:"Symphony 50cc",
        cc:50,
        color:'Silver',
        licence:'AM',
        passengers:'For 1 Person',
        img:sym50
    },
    {
        name:" Honda Vision 110cc",
        cc:200, 
        color:'Black, White',
        licence:'A1',
        passengers:'For 2 Persons',
        img:vision
    },
    {
        name:"People S",
        cc:125,
        color:'Silver, Red, Blue',
        licence:'AM',
        passengers:'For 2 Persons',
        img:people
    }
  ],
  [
    {
        name:" ATV Kymco",
        cc:250, 
        color:'Black, White',
        licence:'A1',
        passengers:'For 1 Persons',
        img:atv250
    },

    {
        name:" ATV Kymco ",
        cc:300, 
        color:'Black, White',
        licence:'A1',
        passengers:'For 1 Persons',
        img:atv300
    },

    {
        name:" Honda Vision ",
        cc:200, 
        color:'Black, White',
        licence:'A1',
        passengers:'For 1 Persons',
        img:gforce
    }

  ]

    

];

export default scooter