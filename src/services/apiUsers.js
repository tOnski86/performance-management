import supabase, { supabaseUrl } from './supabase';
import { v4 as uuidv4 } from 'uuid';

// select users
export async function readUsers() {
  const { data: users, error } = await supabase.from('users').select('*');

  if (error) throw new Error('Users cannot be loaded');

  return users;
}

// delete user
export async function deleteUser(id) {
  const { error: photoDeleteError } = await deletePhoto(id);

  if (photoDeleteError) throw new Error('Cannot delete photo');

  const { data, error: deleteError } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (data) console.log(data);

  if (deleteError) throw new Error('User cannot be deleted');
}

// insert new user
export async function insertUser(newUser) {
  const { photoUrl, ...userData } = newUser;
  const photoUpload = await uploadPhoto(photoUrl);

  const { data, error: insertError } = await supabase
    .from('users')
    .insert([{ ...userData, photoUrl: photoUpload }])
    .select();

  if (insertError) throw new Error('User cannot be added');

  return data;
}

// update existing user
export async function updateUser(updatedUser) {
  const { id, photoUrl, ...userData } = updatedUser;

  let photo;
  if (photoUrl?.startsWith?.(supabaseUrl)) {
    photo = photoUrl;
  } else {
    photo = await uploadPhoto(photoUrl);
  }

  const { data: updateUser, error: updateError } = await supabase
    .from('users')
    .update({ ...userData, photoUrl: photo })
    .eq('id', id)
    .select()
    .single();

  if (updateError) throw new Error('User cannot be updated');

  return updateUser;
}

// upload to storage
async function uploadPhoto(photo) {
  const fileName = `${uuidv4()}-${photo.name}`.replaceAll('/', '');

  const photoUrl = `${supabaseUrl}/storage/v1/object/public/user-photos/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('user-photos')
    .upload(fileName, photo, {
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) throw new Error('Photo cannot be uploaded');

  return photoUrl;
}

// delete from storage
async function deletePhoto(id) {
  const { data: photoUrl, photoError } = await supabase
    .from('users')
    .select('photoUrl')
    .eq('id', id);

  if (photoError) throw new Error('PhotoUrl not found');

  const photo = photoUrl[0].photoUrl.split('/').slice(-1);

  const { data, error: photoDeleteError } = await supabase.storage
    .from('user-photos')
    .remove(photo);

  if (photoDeleteError) throw new Error('Photo cannot be deleted');

  return data;
}
