import styled, { css } from 'styled-components'

export const Container = styled.button<{ backgroundColor?: string; width?: string }>`
  padding: 10px 8px;
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : css`var(--purple-light)`};

  border-radius: 6px;
  color: var(--purple-dark);
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  & + button {
    margin-left: 8px;
  }
`
