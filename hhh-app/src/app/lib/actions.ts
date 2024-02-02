'use server';
import {  z } from 'zod';
import { sql } from '@vercel/postgres';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
const bcrypt = require('bcrypt');
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

export async function createUser(
  prevState: string | undefined,
  formData: FormData,
) {
  const schema = z.object({
    email: z.string().min(1),
    password: z.string().min(1),
    c_password: z.string().min(1),
    
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
    postcode: z.string().min(1),

    
    business_name: z.string().min(1),
    business_location: z.string().min(1),
    business_about: z.string().min(1),
    business_gender: z.string().min(1),
    business_service: z.array(z.string()).min(1),

    business_website: z.string().min(1),
    business_instagram: z.string().min(1),
    business_facebook: z.string().min(1),
  });

  const data = schema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
    c_password: formData.get("c_password"),

    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    address: formData.get("address"),
    city: formData.get("city"),
    country: formData.get("country"),
    postcode: formData.get("post_code"),
    
    business_name: formData.get("b_name"),
    business_location: formData.get("b_location"),
    business_about: formData.get("b_about"),
    business_gender: formData.get("b_gender"),
    business_service: formData.getAll("b_services[]"),
    
    business_website: formData.get("b_website"),
    business_instagram: formData.get("b_instagram"),
    business_facebook: formData.get("b_facebook"),
  });
  /* Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  } 
*/

if (data.password === data.c_password) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const businessServiceString = data.business_service.join(', ');
  try {
    // Begin a transaction
      // Insert data into the "users" table
      const insertedUsers = await sql`
        INSERT INTO hhhusers (email, password)
        VALUES (${data.email}, ${hashedPassword})
        RETURNING id
      `;
      const insertedUser = insertedUsers.rows[0].id;

      // Insert data into the "userprofile" table
      const insertedUsersProfile = await sql`
        INSERT INTO userprofile (user_id, fname, lname, address, city, country, postcode)
        VALUES (${insertedUser}, ${data.first_name}, ${data.last_name}, ${data.address}, ${data.city}, ${data.country}, ${data.postcode});
      `;
      const insertedBusinessProfile = await sql`
          INSERT INTO userbaddress (user_id, bname, blocation, bdescription, bgender, bservice)
          VALUES (${insertedUser}, ${data.business_name}, ${data.business_location}, ${data.business_about}, ${data.business_gender}, ${businessServiceString});
      `;
      
      const insertedBusinessSocial = await sql`
          INSERT INTO userbsocial (user_id, bwebsite, binstagram, bfacebook)
          VALUES (${insertedUser}, ${data.business_website}, ${data.business_instagram}, ${data.business_facebook});
        `;

    return {
      message: "success",
    };
  } catch (e) {
    // If an error occurs, the transaction will be rolled back
    console.error("Error registering user:", e);
    return {
      message: "Error registering user",
    };
  }
} else {
  console.log("Password doesn't match");
}

}