// components
import ProjectCard from "../components/utilities/ProjectCard"

// Layout
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

// Data
import { projects } from "../data/ProjectData.json"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="grid gap-3 mb-4 lg:mb-6 md:px-12 lg:grid-cols-2 lg:px-16 2xl:px-36 lg:gap-2">
                {projects.map((project) => (
                    <Link to={`/projects/${project.name.replace(" ", "-").toLowerCase()}`}>
                        <ProjectCard
                            key={`Home_${project.name}_Card`}
                            id={project.id}
                            name={project.name}
                            coverLocation={project.coverImageLocation}
                            imageType={false}
                        />
                    </Link>
                ))}
            </main>
            <Footer />
        </div>
    )
}

export default Home