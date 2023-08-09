import LogoIcon from "@/assets/images/logo.svg";
import EyeIcon from "@/assets/images/eye button.png";
import NavBar from "../Nav";

const Header = () => {
  return (
    <div className="w-full px-5 py-4 lg:px-[60px] lg:py-[18px] flex items-center justify-between sticky top-0">
        <img className="w-5 lg:w-[30px]" src={LogoIcon} />
        <NavBar className="hidden lg:flex" />
        <img className="hidden lg:block" src={EyeIcon} />
    </div>
  )
}

export default Header