import Form from '../../ui/Form';
import InputRow from '../../ui/InputRow';
import Input from '../../ui/Input';
import InputGroup from '../../ui/InputGroup';

function UserForm() {
  return (
    <Form>
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
    </Form>
  );
}

export default UserForm;
