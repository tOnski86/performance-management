import {
  HiOutlineArrowUpOnSquare,
  HiOutlinePlusCircle,
  HiOutlineXCircle,
} from 'react-icons/hi2';

import Form from '../../ui/Form';
import InputRow from '../../ui/InputRow';
import Input from '../../ui/Input';
import InputGroup from '../../ui/InputGroup';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';

function UserForm() {
  return (
    <Form>
      <InputRow label='Photo'>
        <Input type='file' />
      </InputRow>

      <InputGroup columns='2'>
        <InputRow label='First Name'>
          <Input type='text' />
        </InputRow>

        <InputRow label='Last Name'>
          <Input type='text' />
        </InputRow>
      </InputGroup>

      <InputRow label='Email Address'>
        <Input type='text' />
      </InputRow>

      <InputRow label='Job Title'>
        <Input type='text' />
      </InputRow>

      <InputGroup columns='2'>
        <InputRow label='Start Date'>
          <Input type='date' />
        </InputRow>

        <InputRow label='End Date'>
          <Input type='date' />
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
