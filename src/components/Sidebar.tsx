import { AiFillGithub, AiOutlineBook } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { VscCode } from 'react-icons/vsc'
import { useTheme } from 'next-themes'


const Sidebar = () => {
    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <img
                src="https://avatars.githubusercontent.com/u/24548784?v=4"
                alt="user avatar"
                className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan dark:bg-dark-500">
                <span className="text-green">Rafael </span>
                Barros
            </h3>
            <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
                <VscCode className="h-6 mx-0 w-7" />
                Desenvolvedor Web
            </p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
                href=""
                download="name">
                <AiOutlineBook className="h-6 mx-0 w-7" />
                Visualizar Currículo
            </a>
            {/*Link Social*/}
            <div className="flex items-center justify-center mx-auto my-5 text-green md:w-full">
                <a href="https://github.com/BarrosAmorim">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            {/*Endereço*/}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
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
            <button
                onClick={changeTheme}
                className="w-9/12 p-3 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
                Alternar Tema
            </button>
        </div>
    )
}

export default Sidebar
