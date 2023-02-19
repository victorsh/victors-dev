import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.DATABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
