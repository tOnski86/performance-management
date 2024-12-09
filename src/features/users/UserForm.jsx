import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

function UserForm() {
  return (
    <Form>
      <FormRow label='First Name'>
        <Input type='text' />
      </FormRow>

      <FormRow label='Last Name'>
        <Input type='text' />
      </FormRow>

      <FormRow label='Email Address'>
        <Input type='text' />
      </FormRow>
    </Form>
  );
}

export default UserForm;
