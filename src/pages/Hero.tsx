import Header from "@/components/Layout/Header";
import IntroCube1 from "@/assets/images/intro-cube 1.png";
import IntroCubes2 from "@/assets/images/intro-cubes 1.png";
import IntroStairs1 from "@/assets/images/intro-stairs 1.png";
import IntroPhone1 from "@/assets/images/intro-phone 1.png";
import IntroPillars1 from "@/assets/images/intro-pillar 1.png";
import Footer from "@/components/Layout/Footer";

const Hero = () => {
    return (
        <div className="relative w-screen h-screen overflow-y-auto bg-black text-white bg-hero-pattern bg-no-repeat bg-center bg-cover md:bg-[length:100%_100%] md:bg-[-1rem]">
            <Header />
            <div className="flex flex-col justify-between h-[calc(100%-80px)]">
                <div className="relative mt-[18.2vh] mx-auto font-agrandir text-9xl md:text-[193px] z-[2] text-center font-extrabold leading-none lg:leading-[166px] tracking-[0.5px]">
                    <p className="relative z-[3] lg:z-[0]">CASH</p>
                    <p className="relative z-[3]">APP</p>
                    <img className="absolute -top-[58px] left-1/2 -translate-x-1/2" src={IntroPhone1} />
                </div>
                <Footer />
            </div>


            {/* All the positioned elements */}
            <>
                <img className="absolute w-8 md:w-[74px] top-[52px] left-[15.5%]" src={IntroCube1} />
                <img className="absolute w-[110px] lg:w-[188px] bottom-3 lg:bottom-[68.23px] left-4 lg:left-[14.1%]" src={IntroCubes2} />
                <img className="absolute w-[100px] md:w-[200px] top-[52px] right-[11.7%]" src={IntroStairs1} />
                <img className="absolute w-[140px] md:w-[288px] bottom-0 right-6 md:right-[20.1%]" src={IntroPillars1} />
            </>
        </div>
    )
} 

export default Hero