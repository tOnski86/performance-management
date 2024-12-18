import styled from 'styled-components';
import Heading from './Heading';

const StyledHeader = styled.header`
  padding: 3rem 4.8rem;

  @media (min-width: 1024px) {
    padding: 2rem 4.8rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as='h1'>Performance Management</Heading>
    </StyledHeader>
  );
}

export default Header;
