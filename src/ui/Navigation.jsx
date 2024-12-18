import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  HiOutlineHomeModern,
  HiOutlineRocketLaunch,
  HiOutlineShieldExclamation,
  HiOutlineUsers,
} from 'react-icons/hi2';

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  & > * {
    flex: 1;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1.2rem 3rem;
    transition: all 0.2s;

    @media (min-width: 1024px) {
      justify-content: flex-start;
    }
  }

  &:hover {
    background-color: var(--color-green-2);
  }

  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-green-3);
  }
`;

function Navigation() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to='/team'>
          <HiOutlineHomeModern />
          <span>Team</span>
        </StyledNavLink>

        <StyledNavLink to='/users'>
          <HiOutlineUsers />
          <span>Users</span>
        </StyledNavLink>

        <StyledNavLink to='/targets'>
          <HiOutlineRocketLaunch />
          <span>Targets</span>
        </StyledNavLink>

        <StyledNavLink to='/issues'>
          <HiOutlineShieldExclamation />
          <span>Issues</span>
        </StyledNavLink>
      </NavList>
    </nav>
  );
}

export default Navigation;
