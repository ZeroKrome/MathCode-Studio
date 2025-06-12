// ✅ 1. backend/supabase/client.js
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE // ⚠️ Ne jamais exposer ceci côté client !
);

export default supabase;
