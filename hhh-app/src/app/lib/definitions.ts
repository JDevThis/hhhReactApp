// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  email: string;
  password: string;
};

export type Profile = {
  id: string;
  user_id: string;
  fname: string;
  lname: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
};

export type Business = {
  id: string;
  user_id: string;
  bname: string;
  blocation: string;
  bdescription: string;
  bgender: string;
  bservice: string;
};

export type Socials = {
  id: string;
  user_id: string;
  bwebsite: string;
  binstagram: string;
  bfacebook: string;
};
