import { languages, tools } from "../data"
import { Bar } from "../src/components/Bar"

const resume = () => {
    return (
        <div className="px-6 py-2">
            {/*Educação e Experiencia */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Educação</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Tecnico em Informática</h5>
                        <p className="font-semibold">Faculdade (2021/2023)</p>
                        <p className="my-3">Descrição curso ou faculdade</p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Experiência</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Análise e Desenvolvimento de Sistemas</h5>
                        <p className="font-semibold">Faculdade (2021/2023)</p>
                        <p className="my-3">Descrição curso ou faculdade</p>
                    </div>
                </div>
            </div>
            {/*Linguagens e Ferramentas */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Linguagens & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map(language =><Bar data={language} key={language.name} />)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Ferramentas & Progamas</h5>
                    <div className="my-2">
                        {
                            tools.map(tool =><Bar data={tool} key={tool.name} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resume
