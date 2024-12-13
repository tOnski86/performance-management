import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;

  ${props =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    `}

  ${props =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 2rem;
    `}

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${props =>
    props.$align === 'center' &&
    css`
      text-align: center;
    `}

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

Row.defaultProps = { type: 'vertical' };

export default Row;
