import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Simple User Management</h1>
    </StyledHeader>
  );
}

export default Header;
