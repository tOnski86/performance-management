import { capitalize } from '../utilitiles/helpers';
import Button from './Button';
import Heading from './Heading';

function ModalConfirm({
  resource,
  operation,
  disabled,
  onConfirm,
  onCloseModal,
}) {
  return (
    <div>
      <Heading as='h2'>{`${capitalize(operation)} ${capitalize(
        resource
      )}`}</Heading>
      <p>
        Are you sure you want to {operation} this {resource}?
      </p>

      <div>
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button onClick={onConfirm} disabled={disabled}>
          {capitalize(operation)}
        </Button>
      </div>
    </div>
  );
}

export default ModalConfirm;
