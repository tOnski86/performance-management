import supabase from './supabase';

// select
export async function getUsers() {
  const { data: users, error } = await supabase.from('user').select('*');

  if (error) throw new Error('Users cannot be loaded');

  return users;
}
