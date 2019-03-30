require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user');

const data = [
  {
    username:"matt",
    name:"Mathew Harris",
    nationality:"Australia",
    interests:["cricket","rugby","vegan","surf"],
    languages:["english","spanish"],
    avatar:"https://fabinet.up.ac.za/people/1289/profile_photo.jpg"
  },
  {
    username:"josefine",
    name:"Josefine Durand",
    nationality:"France",
    interests:["vegan","books","cinema","surf"],
    languages:["french","spanish"],
    avatar:"https://static1.squarespace.com/static/5a8affd7a803bb0ee46f2c11/t/5b4c80cf03ce64330331ea00/1531740632574/%40theburgundyblazer+.jpg"
  },
  {
    username:"frank",
    name:"Frank Smith",
    nationality:"USA",
    interests:["cars","hamburgers","hollywood"],
    languages:["english","french"],
    avatar:"https://pbs.twimg.com/profile_images/935329287204302848/Ef4Nbcte.jpg"
  },
  {
    username:"maria",
    name:"Maria Garcia Gonzalez",
    nationality:"Spain",
    interests:["tequila","flamenco","beach"],
    languages:["portuguese","spanish"],
    avatar:"https://i1.trekearth.com/photos/105836/arcos_de_la_frontera_35.jpg"
  },
  {
    username:"yoshi",
    name:"Yoshi Nagao",
    nationality:"Japan",
    interests:["food","coding","travel"],
    languages:["english","japanese"],
    avatar:"https://cdn-static.denofgeek.com/sites/denofgeek/files/7/13/hiro-nakamura.jpg"
  },
]
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected');
    return User.deleteMany();
  })
  .then(() => {
    console.log('deleted');
    return User.insertMany(data);
  })
  .then(() => {
    console.log('loaded data');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('error ', err);
  });
