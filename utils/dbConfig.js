import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
const sql = neon('postgresql://v-xpense_owner:LCaHPfnBN4s8@ep-divine-dream-a5fsdkb3.us-east-2.aws.neon.tech/v-xpense?sslmode=require');
export const db = drizzle(sql, {schema});