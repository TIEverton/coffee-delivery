import React from 'react';
import { IIconsProps } from '../../types/icon.types';


export function IconCart({ width = '20', color = '#C47F17', height = '19' }: IIconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 19"
    >
      <path
        fill={color}
        d="M19.241 4.62l-1.048 5.75a2.063 2.063 0 01-2.028 1.693H6.196l.378 2.062h9.239a2.063 2.063 0 11-2.063 2.063c0-.235.04-.467.12-.688H8.817a2.062 2.062 0 11-3.506-.653L2.93 1.75H1.374a.688.688 0 110-1.375H2.93a1.375 1.375 0 011.35 1.126l.42 2.312h13.863a.68.68 0 01.524.249.662.662 0 01.154.558z"
      ></path>
    </svg>
  );
}
