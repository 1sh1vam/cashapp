import { useState } from "react";
import HamBurgerMenu from "@/components/Layout/HamburgerMenu"
import Hero from "./pages/Hero"
import NavBar from "@/components/Nav";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div className="relative">
      <div className="absolute top-7 right-5 z-[100]">
        <HamBurgerMenu showNavBar={showNavBar} onClick={() => setShowNavBar((prev) => !prev)} />
      </div>
      <NavBar className="lg:hidden" showNavBar={showNavBar} />
      <Hero />
    </div>
  )
}

export default App
