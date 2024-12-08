import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  HiOutlineHome,
  HiOutlineRocketLaunch,
  HiOutlineShieldExclamation,
  HiOutlineUsers,
} from 'react-icons/hi2';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1.2rem 3rem;
    transition: all 0.2s;
  }

  &:hover {
    background-color: var(--color-green-3);
  }

  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-green-2);
  }
`;

function Navigation() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to='/team'>
          <HiOutlineHome />
          <span>Team</span>
        </StyledNavLink>

        <StyledNavLink to='/users'>
          <HiOutlineUsers />
          <span>Users</span>
        </StyledNavLink>

        <StyledNavLink to='/targets'>
          <HiOutlineRocketLaunch />
          <span>Target</span>
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
