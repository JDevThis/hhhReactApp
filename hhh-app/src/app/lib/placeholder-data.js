// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: 'd47b266d-dc06-49e7-b841-185ff7a24c8a',
    email: 'user2@nextmail.com',
    password: '123456',
  },
];

const profile = [
  {
    user_id: users[0].id,
    fname: 'John',
    lname: 'Barnycles',
    address: '1 john street',
    city: 'london',
    postcode: 'e154rz',
    country: 'united kingdom',
  },
  {
    user_id: users[1].id,
    fname: 'Sam',
    lname: 'BarnBryantycles',
    address: '2 john street',
    city: 'london',
    postcode: 'e122rz',
    country: 'united kingdom',
  },
];

const business = [
  {
    user_id: users[0].id,
    bname:'canada waters',
    blocation:'london',
    bdescription:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
    bgender:'Her',
    bservice:'1-1 classes',
  },
  {
    user_id: users[1].id,
    bname:'canada waters',
    blocation:'london',
    bdescription:'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    bgender:'His',
    bservice:'Hair wash',
  },
];

const socials = [
  {
    user_id: users[0].id,
    bwebsite:'needaweb.co.uk',
    binstagram:'unmidev',
    bfacebook:'unmiweb',
  },
  {
    user_id: users[1].id,
    bwebsite:'unmilimited.co.uk',
    binstagram:'unmilimited',
    bfacebook:'unmilimited',
  },
];

module.exports = {
  users,
  profile,
  business,
  socials,
};
