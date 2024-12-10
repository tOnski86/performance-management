import supabase, { supabaseUrl } from './supabase';
import { v4 as uuidv4 } from 'uuid';

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
  const { photoUrl, ...userData } = newUser;
  const photoUpload = await uploadPhoto(photoUrl);

  const { data, error: insertError } = await supabase
    .from('users')
    .insert([{ ...userData, photoUrl: photoUpload }])
    .select();

  console.log(insertError);

  if (insertError) throw new Error('User cannot be added');

  return data;
}
// image upload
async function uploadPhoto(photo) {
  const fileName = `${uuidv4()}-${photo.name}`.replaceAll('/', '');

  const photoUrl = `${supabaseUrl}/storage/v1/object/public/user-photos/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('user-photos')
    .upload(fileName, photo, {
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) throw new Error('Image cannot be uploaded');

  return photoUrl;
}
