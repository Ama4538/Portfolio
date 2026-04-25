// Imports
import { Link, useParams } from "react-router-dom";

// Components
import ProjectCard from "../components/utilities/ProjectCard";

// Layout
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

// Data
import { projects } from "../data/ProjectData.json"

const Project = () => {
    // Getting project
    const { projectName } = useParams<{ projectName?: string }>();
    const formatProjectName = projectName ? projectName.replace(/ |%20/g, "-") : undefined;
    const currentProject = projects.find((project) => project.id == formatProjectName);

    console.log(formatProjectName);
    console.log(currentProject);
    
    

    return (
        <>
            <Header />
            <main className="flex flex-col px-6 md:px-12 lg:px-16 2xl:px-36 font-body text-white text-base 2xl:text-lg">
                <h3 className="mx-auto lg:mx-0 font-subtitle text-4xl md:text-5xl xl:text-4xl 2xl:text-6xl">{currentProject?.name}</h3>
                <span className="mx-auto lg:mx-0 text-sm md:text-base lg:text-lg 2xl:text-xl opacity-80 mb-5 md:mb-6 lg:mb-7 xl:mb-10">{currentProject?.projectType}</span>
                <div className="flex flex-col gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
                    <img className="aspect-video object-center object-cover" src={`/ProjectImages/${currentProject?.id}/${currentProject?.coverImageLocation}`} alt={`${currentProject?.name}_Main_Images`} />
                    <section className="flex flex-col gap-10 lg:gap-12 xl:gap-0 justify-between xl:flex-row">
                        <div className="xl:w-[50%]">
                            <h4 className="font-subtitle text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl mb-3 lg:mb-4 xl:mb-2 2xl:mb-4">Overview</h4>
                            <p>{currentProject?.overview}</p>
                        </div>
                        <div className="flex flex-col xl:w-[30%] gap-10 lg:gap-12">
                            <div>
                                <h4 className="font-subtitle text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl mb-3 lg:mb-4 xl:mb-2 2xl:mb-4">Technologies & Design</h4>
                                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-1.5 list-disc list-inside">
                                    {currentProject?.tools.map(tool => (
                                        <li key={`Project_Tool_${tool}`}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            {currentProject?.links && currentProject?.links.length > 0 ?
                                <div>
                                    <h4 className="font-subtitle text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl mb-3 lg:mb-4 xl:mb-2 2xl:mb-4">Links</h4>
                                    <div className={`grid gap-2 md:gap-4 md:w-[80%] lg:w-[70%] xl:w-full ${currentProject?.links && currentProject?.links.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                        {currentProject?.links.map(link => (
                                            <a
                                                className="flex justify-center text-lg md:text-xl 2xl:text-xl xl:text-lg py-1 md:py-1.5 xl:py-1 2xl:py-1.5 bg-white font-subtitle text-black rounded-md cursor-pointer duration-[0.30s] transition-all ease-in-out hover:translate-y-[-5%] hover:bg-acent hover:text-white"
                                                key={`Project_Link_${link.label}`}
                                                href={link.address}
                                                target="_blank"
                                            >
                                                {`View ${link.label}`}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                : <></>}
                        </div>
                    </section>
                    <section className="flex flex-col gap-10 md:gap-10 mt-4 lg:mt-3 lg:gap-12 xl:gap-10 2xl:gap-16">
                        {currentProject?.styleGuideLocation
                            ? <div className="flex flex-col">
                                <h4 className="font-subtitle text-center text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl mb-3 lg:mb-5 2xl:mb-6">Style Guide</h4>
                                <img className="aspect-video object-center object-contain w-full" src={`/ProjectImages/${currentProject?.id}/${currentProject?.styleGuideLocation}`} alt={`${currentProject.name} Style Guide`} />
                            </div>
                            : <></>}
                        {currentProject?.additionalImageLocation.length && currentProject?.additionalImageLocation.length > 0
                            ? <div>
                                <h4 className="font-subtitle text-center text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl mb-3 lg:mb-5 2xl:mb-6">Images</h4>
                                <div className={`grid grid-cols-1 lg:${currentProject.imageTypeLong ? `grid-cols-1 lg:gap-4` : `grid-cols-2 lg:gap-2`} gap-3 `}>
                                    {currentProject?.additionalImageLocation.map(image => (
                                        <ProjectCard key={`Addition_Project_Image_${image}`} id={currentProject.id} name={image.slice(0, image.indexOf("."))} coverLocation={image} imageType={currentProject.imageTypeLong ? currentProject.imageTypeLong : false} />
                                    ))}
                                </div>
                            </div>
                            : <></>
                        }

                        <Link
                            className="flex justify-center mx-auto mt-2 lg:mt-0 w-full text-xl md:text-2xl xl:text-xl 2xl:text-2xl py-2 md:py-2.5 xl:py-2 2xl:py-2.5 md:w-max md:px-24 mb-4 bg-white font-subtitle text-black rounded-md cursor-pointer duration-[0.30s] transition-all ease-in-out hover:translate-y-[-5%] hover:bg-acent hover:text-white"
                            to={"/"}
                        >View More Projects</Link>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Project