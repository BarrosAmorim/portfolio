import { ServiceProps, SkillProps } from './types'
import { RiComputerLine } from 'react-icons/ri'
import { BsCircleFill } from 'react-icons/bs'
import { FaServer } from "react-icons/fa"
import { AiOutlineApi } from "react-icons/ai"

export const services:ServiceProps[]  = [
    {
        title: 'Desenvolvedor Frontend',
        about: 'Posso construir um SPA bonito e escalável usando HTML e React.js ',
        Icon: RiComputerLine,
    },
    {
        title: 'Desenvolvedor Backend',
        about: 'Posso trabalhar com banco de dados, servidor, API usando Express outras estruturas populares ',
        Icon: FaServer,
    },
    {
        title: 'Desenvolvimento de Api',
        about: 'Posso desenvolver uma API REST robusta usando a API Node ',
        Icon: AiOutlineApi,
    }
]

export const languages: SkillProps[] = [
    {
        name: 'Java Script',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'React',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'React Native',
        level: '75%',
        Icon: BsCircleFill
    }
]

export const tools: SkillProps[] = [
    {
        name: 'Figma',
        level: '60%',
        Icon: BsCircleFill
    }
]

