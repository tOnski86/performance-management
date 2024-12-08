import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  & :not(:last-child) {
    padding-right: 0.8rem;
  }
`;

export default ButtonGroup;
