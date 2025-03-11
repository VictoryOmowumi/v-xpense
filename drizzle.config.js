/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://v-xpense_owner:LCaHPfnBN4s8@ep-divine-dream-a5fsdkb3.us-east-2.aws.neon.tech/v-xpense?sslmode=require',
    }
  };