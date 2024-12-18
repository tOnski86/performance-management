import styled from 'styled-components';
import { useBack } from '../hooks/useBack';
import Button from '../ui/Button';

const Row = styled.div`
  padding: 2rem;
  & > p {
    margin-bottom: 1rem;
  }
`;

function ComingSoon() {
  const back = useBack();

  return (
    <Row>
      <p>This feature is coming soon!</p>
      <Button type='primary' onClick={back}>
        &larr; Go back
      </Button>
    </Row>
  );
}

export default ComingSoon;
