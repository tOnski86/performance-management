import supabase from './supabase';

// select
export async function getUsers() {
  const { data: users, error } = await supabase
    .from('users')
    .select('*, roles(title)');

  if (error) throw new Error('Users cannot be loaded');

  return users;
}

// insert

// image upload
