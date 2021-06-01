import { Bar } from "../src/components/Bar"
import { languages, tools } from "../data"
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation } from '../animations'

const resume = () => {
    
return (
    <motion.div variants={routerAnimation} initial="initial" animate="animate" exit="exit"  className="px-6 py-2">
        {/*Educação e Experiencia */}
        <div className="grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h5 className="my-3 text-2xl font-bold">Educação</h5>
                <div>
                    <h5 className="my-2 text-xl font-bold">Técnico em Informática</h5>
                    <p className="font-semibold">Senac (2016/2017)</p>
                    <p className="my-3">Planejar, construir, publicar, testar e realizar a manutenção de aplicações web e mobile com acesso a banco de dados</p>
                </div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h5 className="my-3 text-2xl font-bold">Formação</h5>
                <div>
                    <h5 className="my-2 text-xl font-bold">Análise e Desenvolvimento de Sistemas</h5>
                    <p className="font-semibold">IESB - Cursando</p>
                    <p className="my-3">Profissional apto a analisar, especificar, construir e testar aplicações comerciais com foco em tecnologias Web e Mobile.</p>
                </div>
            </motion.div>
        </div>
        {/*Linguagens e Ferramentas */}
        <div className="grid gap-6 md:grid-cols-2">
            <div>
                <h5 className="my-3 text-2xl font-bold">Linguagens & Frameworks</h5>
                <div className="my-2">
                    {
                        languages.map(language => <Bar data={language} key={language.name} />)
                    }
                </div>
            </div>
            <div>
                <h5 className="my-3 text-2xl font-bold">Ferramentas & Progamas</h5>
                <div className="my-2">
                    {
                        tools.map(tool => <Bar data={tool} key={tool.name} />)
                    }
                </div>
            </div>
        </div>
    </motion.div>
)
}

export default resume
