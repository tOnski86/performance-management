import styled from 'styled-components';
import Heading from './Heading';

const StyledHeader = styled.header`
  padding: 3rem 4.8rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid var(--color-grey-light-2);
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as='h1'>Performance Management</Heading>
    </StyledHeader>
  );
}

export default Header;
