import { useInsertUser } from './useInsertUser';
import { useUpdateUser } from './useUpdateUser';
import { useForm } from 'react-hook-form';
import { HiOutlinePlusCircle, HiOutlineXCircle } from 'react-icons/hi2';

import Form from '../../ui/Form';
import InputRow from '../../ui/InputRow';
import Input from '../../ui/Input';
import InputGroup from '../../ui/InputGroup';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import InputFile from '../../ui/InputFile';
import Spinner from '../../ui/Spinner';

function UserForm({ editUser = {} }) {
  // useMutation isPending and mutate functions
  const { isInsertingUser, insertUser } = useInsertUser();
  const { isUpdatingUser, updateUser } = useUpdateUser();

  const { id: updateId, ...updateValues } = editUser;
  const isUpdating = Boolean(updateId);

  // if existing user, update form fields, if new user = {}
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isUpdating ? updateValues : {},
  });
  const { errors } = formState;

  if (isInsertingUser || isUpdatingUser) return <Spinner />;

  function onSubmit(data) {
    const photo =
      typeof data.photoUrl === 'string' ? data.photoUrl : data.photoUrl[0];

    isUpdating
      ? updateUser({ ...data, photoUrl: photo, id: updateId })
      : insertUser({ ...data, photoUrl: photo });
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputRow label='Upload Photo' error={errors?.photoUrl?.message}>
        <InputFile
          id='photoUrl'
          accept='image/*'
          {...register('photoUrl', {
            required: isUpdating ? false : 'This file is required',
          })}
        />
      </InputRow>

      <InputGroup columns='2'>
        <InputRow label='First Name' error={errors?.firstName?.message}>
          <Input
            type='text'
            id='firstName'
            {...register('firstName', { required: 'This field is required' })}
          />
        </InputRow>

        <InputRow label='Last Name' error={errors?.lastName?.message}>
          <Input
            type='text'
            id='lastName'
            {...register('lastName', { required: 'This field is required' })}
          />
        </InputRow>
      </InputGroup>

      <InputRow label='Email Address' error={errors?.emailAddress?.message}>
        <Input
          type='email'
          id='emailAddress'
          {...register('emailAddress', { required: 'This field is required' })}
        />
      </InputRow>

      <InputGroup columns='2'>
        <InputRow label='Start Date' error={errors?.startDate?.message}>
          <Input
            type='date'
            id='startDate'
            {...register('startDate', {
              required: 'This field is required',
              valueAsDate: true,
            })}
          />
        </InputRow>

        <InputRow label='End Date'>
          <Input
            type='date'
            id='endDate'
            {...register('endDate', {
              valueAsDate: true,
            })}
          />
        </InputRow>
      </InputGroup>

      <ButtonGroup>
        <Button type='secondary'>
          <HiOutlineXCircle />
          <span>Cancel</span>
        </Button>
        <Button type='primary'>
          <HiOutlinePlusCircle />
          <span>{isUpdating ? 'Update' : 'Add'} User</span>
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default UserForm;
