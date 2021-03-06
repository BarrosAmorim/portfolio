import ProjectCard from '../src/components/ProjectCard'
import { projects as projectsData } from '../data'
import ProjectNavbar from '../src/components/ProjectNavbar'
import { useState } from 'react'
import { Category } from '../types'
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation, stagger } from '../animations'

const Projects = () => {

    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState('Todos')

    const hadlerFilterCategory = (category: Category | 'Todos') => {
        if (category === 'Todos') {
            setProjects(projectsData)
            setActive(category)
            return
        }
        const newArray = projectsData.filter(project => project.category.includes(category))
        setProjects(newArray)
        setActive(category)
    }

    return (
            <motion.div variants={routerAnimation} initial="initial" animate="animate" exit="exit" className="px-5 py-2 overflow-y-scroll " style={{ height: '65vh' }}>
                <ProjectNavbar hadlerFilterCategory={hadlerFilterCategory} active={active} />
                <motion.div variants={stagger} initial="initial" animate="animate" className="relative grid grid-cols-12 gap-4 my-3">
                    {projects.map((project) => (
                        <motion.div key={project.name} variants={fadeInUp} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                            <ProjectCard project={project}/>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
    )
}

export default Projects
