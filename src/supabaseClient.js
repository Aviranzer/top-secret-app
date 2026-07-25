import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qljldqmczkdbangrakeo.supabase.co'
const supabaseAnonKey = 'sb_publishable_rDuHSBtc2EsI3v4zg25EWQ_6ZdoOE2D'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)