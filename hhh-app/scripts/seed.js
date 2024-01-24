const { db } = require('@vercel/postgres');
const {
  socials,
  business,
  profile,
  users,
} = require('../src/app/lib/placeholder-data');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, email, password)
        VALUES (${user.id}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding usjers:', error);
    throw error;
  }
} 

async function seedUsersProfile(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users profile" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS userprofile (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        fname VARCHAR(255) NOT NULL,
        lname VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        postcode VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "users profile" table`);

    // Insert data into the "users" table
    const insertedUserProfile = await Promise.all(
      profile.map(async (userp) => {
        return client.sql`
        INSERT INTO userprofile (user_id, fname, lname, address, city, postcode, country)
        VALUES (${userp.user_id}, ${userp.fname}, ${userp.lname}, ${userp.address}, ${userp.city}, ${userp.postcode},  ${userp.country})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUserProfile.length} users profile`);

    return {
      createTable,
      profile: insertedUserProfile,
    };
  } catch (error) {
    console.error('Error seeding kusers:', error);
    throw error;
  }
}

async function seedUsersBusinessAddress(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users profile" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS userbaddress (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        bname VARCHAR(255) NOT NULL,
        blocation VARCHAR(255) NOT NULL,
        bdescription VARCHAR(255) NOT NULL,
        bgender VARCHAR(255) NOT NULL,
        bservice VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "users profile" table`);

    // Insert data into the "users business address" table
    const insertedUserBusinessAddress = await Promise.all(
      business.map(async (userba) => {
        return client.sql`
        INSERT INTO userbaddress (user_id, bname, blocation, bdescription, bgender, bservice)
        VALUES (${userba.user_id}, ${userba.bname}, ${userba.blocation}, ${userba.bdescription}, ${userba.bgender}, ${userba.bservice})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUserBusinessAddress.length} users business address`);

    return {
      createTable,
      business: insertedUserBusinessAddress,
    };
  } catch (error) {
    console.error('Error seeding usersf:', error);
    throw error;
  }
}

async function seedUsersBusinessSocial(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users profile" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS userbsocial (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        bwebsite VARCHAR(255) NOT NULL,
        binstagram VARCHAR(255) NOT NULL,
        bfacebook VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "users social" table`);

    // Insert data into the "users business address" table
    const insertedUserBusinessSocial = await Promise.all(
      socials.map(async (userbs) => {
        return client.sql`
        INSERT INTO userbsocial (user_id, bwebsite, binstagram, bfacebook)
        VALUES (${userbs.user_id}, ${userbs.bwebsite}, ${userbs.binstagram}, ${userbs.bfacebook})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUserBusinessSocial.length} users business social`);

    return {
      createTable,
      socials: insertedUserBusinessSocial,
    };
  } catch (error) {
    console.error('Error seeding usersss:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedUsersProfile(client);
  await seedUsersBusinessAddress(client);
  await seedUsersBusinessSocial(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
