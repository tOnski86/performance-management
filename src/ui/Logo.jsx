import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 500;
  padding: 2rem;
  color: var(--color-white);
  background-color: var(--color-green-1);
`;

const StyledHiOutlineSquare3Stack3D = styled(HiOutlineSquare3Stack3D)`
  height: 3rem;
  width: 3rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <StyledHiOutlineSquare3Stack3D />
      <span>Growth Dojo</span>
    </StyledLogo>
  );
}

export default Logo;
