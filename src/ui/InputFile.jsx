import styled from 'styled-components';

const InputFile = styled.input.attrs({ type: 'file' })`
  &::file-selector-button {
    margin-right: 1rem;
    padding: 0.8rem 1.4rem;
    border: none;
    border-radius: 50rem;
    cursor: pointer;
    background-color: var(--color-green-4);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-green-3);
    }
  }
`;

export default InputFile;
