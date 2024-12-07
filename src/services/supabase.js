import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pikgfzwgqqqxhklficma.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpa2dmendncXFxeGhrbGZpY21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2MDI3NDUsImV4cCI6MjA0OTE3ODc0NX0.3k9FND14OhkzUlAXFVkQJorQXc2cjFC2gf0cf_BJvUU';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
