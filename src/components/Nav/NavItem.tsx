import React from 'react'

const NavItem = ({ children }: React.HTMLAttributes<HTMLDataListElement>) => {
  return (
    <li className="font-extrabold text-xs leading-[18px] uppercase tracking-[0.5px] mb-3 lg:mb-0">
        {children}
    </li>
  )
}

export default NavItem