"use server"
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  User,
  Profile,
  Business,
  Socials,
} from './definitions';

const ITEMS_PER_PAGE = 3;
export async function fetchBusiness() {
  noStore();
  try {
    const data = await sql<Business>`
      SELECT
        id,
        bname
      FROM userbaddress
      ORDER BY bname ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}
export async function FetchBusinessByID(id: string) {
  noStore();
  try {
    const data = await sql<Business>`
      SELECT
        userbaddress.id,
        userbaddress.user_id,
        userbaddress.blocation,
        userbaddress.bservice,
        userbaddress.bgender
      FROM  userbaddress
      WHERE userbaddress.user_id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
    }));
    console.log(invoice); // Invoice is an empty array []
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export default async function fetchFilteredBusiness(query: string,currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const userbusiness = await sql<Business>`SELECT *
    FROM userbaddress
    JOIN userbsocial ON userbaddress.user_id = userbsocial.user_id
    WHERE
    userbaddress.blocation ILIKE ${`%${query}%`} OR
    userbaddress.bservice ILIKE ${`%${query}%`} OR
    userbaddress.bgender ILIKE ${`%${query}%`}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;
    return userbusiness.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchBusinessPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM userbaddress
    JOIN userbsocial ON userbaddress.user_id = userbsocial.user_id
    WHERE
    userbaddress.blocation ILIKE ${`%${query}%`} OR
    userbaddress.bservice ILIKE ${`%${query}%`} OR
    userbaddress.bgender ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch totssal number of invoices.');
  }
}
export async function fetchBusinessPagesByQuery(formData: FormData) {
  const rawFormData = {
    location: formData.get('location'),
    service: formData.get('service'),
    gender: formData.get('gender'),
    
  };
  console.log(rawFormData.location);
  //const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const userbusiness = await sql<Business>`SELECT *
      FROM userbaddress
      JOIN userbsocial ON userbaddress.user_id = userbsocial.user_id
      WHERE
      userbaddress.blocation ILIKE ${`%${rawFormData.location}%`} OR
      userbaddress.bservice ILIKE ${`%${rawFormData.service}%`} OR
      userbaddress.bgender ILIKE ${`%${rawFormData.gender}%`}
    `;

      console.log(rawFormData.location);
      return userbusiness.rows;

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.');
    }
}
export async function getUser(email: string) {
    try {
      const user = await sql`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0] as User;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }


 