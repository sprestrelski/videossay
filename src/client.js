import { createClient } from '@supabase/supabase-js'

const URL = 'https://zatcdoxkdzowbsmieuyw.supabase.co'
const API_KEY = process.env.REACT_APP_SUPABASE
export const supabase = createClient(URL, API_KEY);