import { createClient } from "@supabase/supabase-js";


const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
}
const supabase = createClient("https://lchouwvoxovrxejhuhlr.supabase.co", import.meta.env.VITE_SERVICE_KEY, options)

export default supabase