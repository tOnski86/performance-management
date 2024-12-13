import styled, { css } from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 0.8rem;
  }

  ${props =>
    props.$alignment === 'right' &&
    css`
      justify-content: flex-end;
    `}
`;

export default ButtonGroup;
