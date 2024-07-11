/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-Content-Gen_owner:kpl2ucM4miTd@ep-wispy-frost-a5o8no3c.us-east-2.aws.neon.tech/AI-Content-Gen?sslmode=require',

    }
  };