import { AiFillGithub, AiOutlineBook } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { VscCode } from 'react-icons/vsc'


const Sidebar = () => {
    return (
        <div>
            <img
                src="https://avatars.githubusercontent.com/u/24548784?v=4"
                alt="user avatar"
                className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Rafael </span>
                Barros
            </h3>
            <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full">
                <VscCode className="w-6 h-6 mx-1" />
                Web Developer
            </p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
                href=""
                download="name">
                <AiOutlineBook className="w-6 h-6 mx-1" />
                Visualizar Currículo
            </a>
            {/*Link Social*/}
            <div className="flex items-center justify-center mx-auto my-5 text-green md:w-full">
                <a href="https://github.com/BarrosAmorim">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            {/*Endereço*/}
            <div className="py-4 my-5 bg-gray-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Brasília, Brasil</span>
                </div>
                <p className="my-2">barrosamorimd@gmail.com</p>
                <p className="my-2">61-985305660</p>
            </div>
            {/*Botão E-mail*/}
            <button
                className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={() => window.open('mailto:barrosamorimd@gmail.com')}>
                Email
            </button>
            <button className="w-9/12 p-3 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
                Alternar Tema
            </button>
        </div>
    )
}

export default Sidebar