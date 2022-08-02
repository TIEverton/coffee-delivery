import React from 'react';

import * as S from './styles'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  width?: string;
  children: React.ReactNode;
}


export function Button({ backgroundColor, width, children, ...rest }: IButtonProps) {

  return (
    <S.Container {...rest} backgroundColor={backgroundColor} width={width}>
      {children}
    </S.Container>
  )
}