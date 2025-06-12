// src/supabase/client.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hhwmqxtelcxpnjptvrvt.supabase.co";

// ✅ Utiliser la clé `anon`, PAS `service_role`
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhod21xeHRlbGN4cG5qcHR2cnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NzgzODMsImV4cCI6MjA2NTI1NDM4M30.1AHqihfzZVYRIjwDrR5yBtlxVDwqPSRxmj6ZGMJZNl0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
