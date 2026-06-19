// Layout
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

// SVG
import ContactIllustration from "../components/svg/ContactIllustration"

const Contact = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex flex-col gap-4 mb-4 lg:mb-6 md:gap-6 lg:gap-5 xl:grid xl:grid-cols-2 flex-1 px-6 md:px-12 lg:px-16 2xl:px-36 pb-1 font-title text-white text-3xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                <div className="flex flex-col items-center gap-4 xl:items-start md:gap-8 lg:gap-10 order-2">
                    <span>Innovation Starts</span>
                    <span>With Curiosity,</span>
                    <span>Let's Talk!</span>
                    <div className="flex flex-col items-center xl:items-start mt-4 gap-3 md:gap-4 md:mt-6 lg:pt-5 xl:pt-2">
                        <a href="mailto:Kevin.t.ly@outlook.com" target='_blank' className="relative w-max md:text-3xl xl:pb-1 text-lg lg:text-4xl 2xl:text-4xl xl:text-3xl before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-white duration-[0.30s] transition-all ease-in-out hover:translate-y-[-5%] cursor-pointer">Kevin.t.ly@Outlook.com</a>
                    </div>
                </div>
                <div className="mx-auto aspect-square w-[100%] md:w-[75%] lg:w-[65%] xl:w-[80%] 2xl:w-[75%] xl:ml-auto xl:mx-0 order-1 xl:order-2">
                    <ContactIllustration height={`100%`} width={`100%`}/>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Contact