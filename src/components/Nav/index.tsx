import NavItem from "./NavItem";
import EyeIcon from "@/assets/images/eye button.png";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface INavBarProps extends React.HTMLAttributes<HTMLUListElement> {
  showNavBar?: boolean;
}

const NavBar = ({ showNavBar = false, className, ...props }: INavBarProps) => {
  const classes = twMerge(
    'relative text-white w-1/2 min-w-fit p-4 lg:p-0 bg-black lg:bg-transparent z-50 font-agrandir lg:flex lg:flex-1 gap-5 items-center justify-center absolute lg:static top-0 right-0 bottom-0 animate-navopen lg:animate-none',
    className,
    clsx({
      'hidden': !showNavBar
    })
  )

  return (
    <ul {...props} className={classes}>
        <img className="w-8 mb-4 lg:hidden" src={EyeIcon} />
        <NavItem>Sign In</NavItem>
        <NavItem>Legal</NavItem>
        <NavItem>Licenses</NavItem>
        <NavItem>Security</NavItem>
        <NavItem>Careers</NavItem>
        <NavItem>Press</NavItem>
        <NavItem>Support</NavItem>
        <NavItem>Status</NavItem>
        <NavItem>Codeblog</NavItem>
    </ul>
  )
}

export default NavBar