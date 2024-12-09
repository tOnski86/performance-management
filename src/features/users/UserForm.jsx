import { HiOutlinePlusCircle, HiOutlineXCircle } from 'react-icons/hi2';

import Form from '../../ui/Form';
import InputRow from '../../ui/InputRow';
import Input from '../../ui/Input';
import InputGroup from '../../ui/InputGroup';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import InputFile from '../../ui/InputFile';

function UserForm() {
  return (
    <Form>
      <InputRow label='Upload Photo'>
        {/* <InputFile type='file' /> */}
        <InputFile type='file' id='photo' />
      </InputRow>

      <InputGroup columns='2'>
        <InputRow label='First Name'>
          <Input type='text' id='firstName' />
        </InputRow>

        <InputRow label='Last Name'>
          <Input type='text' id='lastName' />
        </InputRow>
      </InputGroup>

      <InputRow label='Email Address'>
        <Input type='text' id='emailAddress' />
      </InputRow>

      <InputRow label='Role'>
        <Input type='text' id='role' />
      </InputRow>

      <InputGroup columns='2'>
        <InputRow label='Start Date'>
          <Input type='date' id='startDate' />
        </InputRow>

        <InputRow label='End Date'>
          <Input type='date' id='endDate' />
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
