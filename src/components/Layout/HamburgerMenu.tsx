import clsx from 'clsx';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface HamBurgerMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  showNavBar?: boolean;
}

const HamBurgerMenu = ({ showNavBar = false, className, ...props }: HamBurgerMenuProps) => {
  const classes = twMerge(
    'lg:hidden bg-white relative w-[18px] h-0.5 hamburger-menu z-10',
    clsx({
        'h-0 hamburger-menu-active': showNavBar
    }),
    className
  )
  return (
    <div className={classes} {...props} />
  )
}

export default HamBurgerMenu