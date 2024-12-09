import supabase, { supabaseUrl } from './supabase';

// select
export async function readUsers() {
  const { data: users, error } = await supabase
    .from('users')
    .select('*, roles(title)');

  if (error) throw new Error('Users cannot be loaded');

  return users;
}

// insert
export async function insertUser(newUser) {
  const { image, ...userData } = newUser;

  let imageUrl;
  image?.startsWith?.(supabaseUrl)
    ? (imageUrl = image)
    : (imageUrl = await uploadImage(image));

  const { data: user, error } = await supabase
    .from('users')
    .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
    .select();

  if (error) throw new Error('User cannot be added');

  return user;
}
// image upload
const 