import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 2.2rem;
      font-weight: 400;
      color: var(--color-green-1);
    `}

  ${props =>
    props.as === 'h2' &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--color-green-3);
    `}

  line-height: 1.4;
`;

export default Heading;
