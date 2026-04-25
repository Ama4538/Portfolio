// Components
import Skill from "../components/utilities/Skill"
import Button from "../components/utilities/Button"

// Layout
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

// Data
import aboutData from "../data/AboutData.json"

const About = () => {
    // Open resume
    const openResume = () => {
        window.open("Kevin Ly Resume.pdf", "_blank");
    }

    return (
        <>
            <Header />
            <main className="px-6 md:px-12 lg:px-16 2xl:px-36 font-body text-white 2xl:text-lg">
                <section className="flex flex-col gap-10 2xl:gap-20 xl:flex-row">
                    <div className="w-full aspect-square md:aspect-[1.5/1] flex xl:aspect-auto xl:w-[50%]">
                        <div className="h-full w-full bg-[url('/picture_of_myself.jpg')] bg-cover bg-center bg-no-repeat rounded-sm"></div>
                    </div>
                    <article className="flex flex-col gap-10 xl:gap-8 2xl:gap-10 xl:w-[50%]">
                        <div>
                            <h3 className="font-subtitle text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl mb-3 xl:mb-2 2xl:mb-4">About Me</h3>
                            <p className="whitespace-pre-line">{aboutData.statement}</p>
                        </div>
                        <div>
                            <h3 className="font-subtitle text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl mb-3 xl:mb-2 2xl:mb-4">Experience</h3>
                            <ul className="flex flex-col gap-6 md:gap-4">
                                {(aboutData.experience).map((exp, index) => (
                                    <li key={`Experience_${index}`} className="grid grid-cols-3 gap-1 text-sm md:text-base xl:text-sm 2xl:text-lg md:gap-0 md:grid-cols-3">
                                        <span>{exp.title} </span>
                                        <em className=" col-start-1 row-start-2 md:text-center md:border-x-1 md:px-2 md:row-start-1 md:col-start-2">{exp.company}</em>
                                        <span className="col-span-2 text-end md:col-span-1">{exp.startData} - {exp.endData}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-subtitle text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl mb-3 xl:mb-2 2xl:mb-4">Education</h3>
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-1 lg:gap-2 md:gap-0.5 xl:text-sm 2xl:text-lg">
                                <span>{aboutData.education.school}</span>
                                <span className="order-3 text-xs opacity-75 md:order-2 md:text-base xl:text-sm 2xl:text-lg md:opacity-100 md:text-end">{aboutData.education.startDate} - {aboutData.education.endData}</span>
                                <span className="order-2 text-sm md:text-base xl:text-sm 2xl:text-lg">{aboutData.education.degree}</span>
                            </div>
                        </div>

                    </article>
                </section>
                <section className="flex flex-col mt-10 xl:mt-20 items-center">
                    <h3 className="font-subtitle text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl mb-6 lg:mb-8 xl:mb-6 2xl:mb-8">Skills</h3>
                    <div className="grid grid-cols-3 md:flex md:flex-wrap gap-6 md:gap-8 lg:gap-10 xl:gap-8 2xl:gap-10">
                        {aboutData.skills.map(skill => (
                            <Skill key={`${skill}_box`} skill={skill} />
                        ))}
                    </div>
                </section>
                <div className="flex justify-center mt-16 lg:mt-12 mb-4 lg:mb-8"/>
            </main>
            <Footer />
        </>
    )
}

export default About