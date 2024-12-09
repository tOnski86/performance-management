import { useForm } from 'react-hook-form';
import { HiOutlinePlusCircle, HiOutlineXCircle } from 'react-icons/hi2';

import Form from '../../ui/Form';
import InputRow from '../../ui/InputRow';
import Input from '../../ui/Input';
import InputGroup from '../../ui/InputGroup';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import InputFile from '../../ui/InputFile';

function UserForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputRow label='Upload Photo' error={errors?.photo?.message}>
        <InputFile
          type='file'
          id='photo'
          {...register('photo', { required: 'This file is required' })}
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
          type='text'
          id='emailAddress'
          {...register('emailAddress', { required: 'This field is required' })}
        />
      </InputRow>

      <InputRow label='Role' error={errors?.role?.message}>
        <Input
          type='text'
          id='role'
          {...register('role', { required: 'This field is required' })}
        />
      </InputRow>

      <InputGroup columns='2'>
        <InputRow label='Start Date' error={errors?.startDate?.message}>
          <Input
            type='date'
            id='startDate'
            {...register('startDate', {
              required: 'This field is required',
            })}
          />
        </InputRow>

        <InputRow label='End Date'>
          <Input type='date' id='endDate' {...register('endDate')} />
        </InputRow>
      </InputGroup>

      <ButtonGroup>
        <Button type='secondary'>
          <HiOutlineXCircle />
          <span>Cancel</span>
        </Button>
        <Button type='primary'>
          <HiOutlinePlusCircle />
          <span>Add User</span>
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default UserForm;
