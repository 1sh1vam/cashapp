import clsx from 'clsx';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface IBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: 'dark' | 'light';
}

const Button = ({ className, variant = 'dark', children, ...props }: IBtnProps) => {
  const classes = twMerge(
    'w-[170px] h-[50px] text-xs font-extrabold leading-[18px] outline-none px-[25px] flex items-center justify-between bg-black text-white border border-white rounded-[7px]',
    className,
    clsx({
        'bg-white text-black border-black': variant === 'light' 
    })
  )
  return (
    <button {...props} className={classes}>
        {children}
    </button>
  )
}

export default Button