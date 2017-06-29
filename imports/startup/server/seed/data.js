import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Products} from '/imports/api/products/products.js';

console.log('inserting data...');

let data = [{
  name: 'New Nintendo 3DS XL',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCJhoiCPKvAWPsGb_ox8Bu96f9yJ1YGfjv3QAE3XP-t0TGOu-LQ',
  price: 199.99,
  flavors: ['nintendo', 'portable', 'console']
},
{
  name: 'PS4 Pro',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloy5myFeXHG-cUhih7-SNpWW_zN_Mzb7o4ObdsrPmcXr3DwhQ',
  price: 399.99,
  flavors: ['sony', 'console']
},
{
  name: 'PS Vita',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxZRF1cFLzSCJ7gZ0GMWMkokDmDkL9MGJgTtrrLxv6frfdm_N',
  price: 299.99,
  flavors: ['sony', 'portable', 'console']
},
{
  name: 'Xbox One S',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDf0P1OG3CZ7_V-Swb5-rP7cA1b042d3bzJzul8dwybi08TOjOwg',
  price: 299.99,
  flavors: ['microsoft', 'console']
},
{
  name: 'HTC Vive',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbvN-oVH-676-y7HuQSpBP6uZrPiZKYlmD0-4XwhpSLQFY6eR',
  price: 799.99,
  flavors: ['virtual reality', 'headset']
},
{
  name: 'Nintendo Switch',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZiClp3asbKIrfnACIAdLFUBzc4-cE-P8-yVxcB17NrnVRmcr8w',
  price: 299.99,
  flavors: ['nintendo', 'console']
}
];

let checkProducts = Products.find({}).count();

//console.warn('checkProducts ', checkProducts);

for(i = 0; i < data.length; i++){
  let selector = {name: data[i].name};
  Products.upsert(selector, {$set: data[i]});
}

/*
if(checkProducts == 0){
  for(i = 0; i < data.length; i++){
    Products.insert(data[i]);
  }
}
*/
