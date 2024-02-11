'use server';
import {  z } from 'zod';
import { sql } from '@vercel/postgres';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache';
const bcrypt = require('bcrypt');


const FormSchema = z.object({
  email:  z.string({invalid_type_error: 'Please select a customer.',}),
  password:  z.string({invalid_type_error: 'Please select a customer.',}),
  c_password:  z.string({invalid_type_error: 'Please select a customer.',}),

  first_name:  z.string({invalid_type_error: 'Please select a customer.',}),
  last_name:  z.string({invalid_type_error: 'Please select a customer.',}),
  address:  z.string({invalid_type_error: 'Please select a customer.',}),
  city:  z.string({invalid_type_error: 'Please select a customer.',}),
  country:  z.string({invalid_type_error: 'Please select a customer.',}),
  postcode:  z.string({invalid_type_error: 'Please select a customer.',}),

  business_name:  z.string({invalid_type_error: 'Please select a customer.',}),
  business_location:  z.string({invalid_type_error: 'Please select a customer.',}),
  business_about:  z.string({invalid_type_error: 'Please select a customer.',}),
  business_gender:  z.string({invalid_type_error: 'Please select a customer.',}),
  business_service: z.array(z.string()),

  business_website:  z.string({invalid_type_error: 'Please select a customer.',}),
  business_instagram:  z.string({invalid_type_error: 'Please select a customer.',}),
  business_facebook:  z.string({invalid_type_error: 'Please select a customer.',}),
});

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
    c_password?: string[];
    first_name?: string[];
    last_name?: string[];
    address?: string[];
    city?: string[];
    country?: string[];
    postcode?: string[];
    business_name?: string[];
    business_location?: string[];
    business_about?: string[];
    business_gender?: string[];
    business_service?: string[];
    business_website?: string[];
    business_instagram?: string[];
    business_facebook?: string[];
  };
  message?: string | null;
};



const schema = z.object({
  service: z.string({
    invalid_type_error: 'Invalid service',
  }),
  location: z.string({
    invalid_type_error: 'Invalid location',
  }),
  gender: z.string({
    invalid_type_error: 'Invalid gender',
  }),
})

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function searchQuery(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    service: z.string().min(1),
    location: z.string().min(1),
    gender: z.string().min(1),
  });
  const data = schema.parse({
    service: formData.get("service"),
    location: formData.get("location"),
    gender: formData.get("gender"),
  });

  /* Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  } 

*/
  try {
  const qResults =  await sql`
              SELECT *
              FROM userbaddress
              JOIN userbsocial ON userbaddress.user_id = userbsocial.user_id
              WHERE
              userbaddress.blocation ILIKE ${data.location} AND
              userbaddress.bservice ILIKE ${data.service} AND
              userbaddress.bgender ILIKE ${data.gender};
    `;

    return { message: "success", resultsQ: qResults.rows };
  } catch (e) {
    return { message: "Fail" };
  }

} 


export async function regUser(prevState: any, formData: FormData) {
  
  // Validate form using Zod
  const validatedFields = FormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    c_password: formData.get('c_password'),

    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    address: formData.get('address'),
    city: formData.get('city'),
    country: formData.get('country'),
    postcode: formData.get('post_code'),
    
    business_name: formData.get('b_name'),
    business_location: formData.get('b_location'),
    business_about: formData.get('b_about'),
    business_gender: formData.get('b_gender'),
    business_service: formData.getAll('b_services[]'),
    
    business_website: formData.get('b_website'),
    business_instagram: formData.get('b_instagram'),
    business_facebook: formData.get('b_facebook'),
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }
 
  // Prepare data for insertion into the database
  const { email, password, c_password, first_name, last_name, address, city, country, postcode, business_name, business_location, business_about, business_gender, business_service, business_website, business_instagram, business_facebook } = validatedFields.data;
  if (password === c_password) {
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const businessServiceString = business_service.join(', ');

  // Insert data into the database

  try {
    // Begin a transaction
      // Insert data into the "users" table
      const insertedUsers = await sql`
        INSERT INTO hhhusers (email, password)
        VALUES (${email}, ${hashedPassword})
        RETURNING id
      `;
      const insertedUser = insertedUsers.rows[0].id;

      // Insert data into the "userprofile" table
      const insertedUsersProfile = await sql`
        INSERT INTO userprofile (user_id, fname, lname, address, city, country, postcode)
        VALUES (${insertedUser}, ${first_name}, ${last_name}, ${address}, ${city}, ${country}, ${postcode});
      `;
      const insertedBusinessProfile = await sql`
          INSERT INTO userbaddress (user_id, bname, blocation, bdescription, bgender, bservice)
          VALUES (${insertedUser}, ${business_name}, ${business_location}, ${business_about}, ${business_gender}, ${businessServiceString});
      `;
      
      const insertedBusinessSocial = await sql`
          INSERT INTO userbsocial (user_id, bwebsite, binstagram, bfacebook)
          VALUES (${insertedUser}, ${business_website}, ${business_instagram}, ${business_facebook});
        `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard');
  redirect('/dashboard');
  } else {
    console.log("Password doesn't match");
  }
}


export async function getUser() {

  try {
    // Begin a transaction
        const result = await sql `

      SELECT *   
      FROM hhhusers u, userprofile up, userbaddress uba, userbsocial ubs  
      WHERE u.id = up.user_id 
      AND u.id = uba.user_id
      AND u.id = ubs.user_id;  
      `
    return {
      message: "success",
      results: result.rows
    };
  } catch (e) {
    // If an error occurs, the transaction will be rolled back
    console.error("Error registering user:", e);
    return {
      message: "Error registering user",
    };
  }
}

