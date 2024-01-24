// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    email: 'user@nextmail.com',
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
];

const business = [
  {
    user_id: users[0].id,
    bname:'canada waters',
    blocation:'london',
    bdescription:'nice clean water',
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
];

module.exports = {
  users,
  profile,
  business,
  socials,
};
