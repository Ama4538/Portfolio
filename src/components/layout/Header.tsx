// Components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="relative flex flex-col text-white">
            <div className="flex flex-col px-6 pt-8 pb-10 md:px-12 md:pt-10 lg:pb-6 lg:pt-8 gap-2 justify-center lg:items-center select-none">
                <div className="flex justify-between items-center">
                    <h1 className="font-title font-medium text-5xl md:text-7xl 2xl:text-8xl">Kevin Ly</h1>
                    <MobileNav extra="lg:hidden" />
                </div>
                <h2 className="font-body text-sm md:text-lg 2xl:text-xl">Software Engineering</h2>
            </div>
            <Nav extra="hidden lg:flex" />
        </header>
    )
}

export default Header