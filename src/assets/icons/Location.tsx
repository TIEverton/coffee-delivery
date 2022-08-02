import React from 'react';
import { IIconsProps } from '../../types/icon.types';


export function IconLocation({ width = '22', color = 'var(--purple)', height = '28' }: IIconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 28"
    >
      <path
        fill={color}
        d="M11 0A11.013 11.013 0 000 11c0 9.413 10 16.525 10.425 16.825a1.038 1.038 0 001.15 0C12 27.525 22 20.413 22 11A11.012 11.012 0 0011 0zm0 7a4 4 0 110 8 4 4 0 010-8z"
      ></path>
    </svg>
  );
}
