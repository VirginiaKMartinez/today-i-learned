import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://doqbsujtptyutpjzbwjc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvcWJzdWp0cHR5dXRwanpid2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzNTk2NTAsImV4cCI6MTk4ODkzNTY1MH0.0LxRjRGOBRDW1mhTJGe5REA_brYPB9OoDx6eHOAVktA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
