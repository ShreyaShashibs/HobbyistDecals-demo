// src/lib/db.ts
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

// Connect using Neon-compatible serverless client
const sql = neon(process.env.DATABASE_URL!); // Add ! if you're confident it's defined

export default sql;
