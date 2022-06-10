import React from 'react'
import Image from 'next/image'
import ImgHero from '../assets/hero.jpg'
import Project from './Project'
import Link from 'next/link'
import { Proj } from "../../types/types"

interface Props {
    data: any,
    countProjectsAR: number,
}

const Hero: React.FunctionComponent <Props> = ({ data, countProjectsAR }) => {
  return (
    <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 h-4/5 md:flex-row flex-col pb-20 justify-center">
            <div className="lg:flex-grow justify-center md:w-1/2 flex flex-col md:items-start md:text-left items-center m-auto mr-0 text-center max-w-md sm:m-auto">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                    ¡Te <span className='text-cyan-500'>ayuda</span>mos a <span className='text-cyan-500'> ayudar </span>!
                </h1>
                <p className="mb-8 leading-relaxed font-normal">
                    En un mundo sumido por diferentes injusticias <br />
                    nos centramos en resolver problemas concretos. <br />
                    Juntos podemos ver de cerca las dificultades <br />
                    que nos atraviesan, y contribuir para mejorar<br />
                    la realidad de muchos argentinos.
                </p>
                <div className="flex justify-center sm:mb-8">
                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                        Ayudá
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                        Sobre nosotros
                    </button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:m-auto">
            <Image width="720px" height="600px" className="object-cover object-center rounded" alt="hero" src={ImgHero} />
        </div>
    </div>
        <div className="container px-5 py-24 mx-auto bg-cyan-50">
            <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-500">
                    Podés colaborar en los siguientes proyectos
                </h1>
                <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed">
                Diferentes organizaciones sin fines de lucro 
                necesitan recursos, herramientas, capacitación 
                y el apoyo de todos para servir a sus comunidades. <br />
                Entre los {countProjectsAR} proyectos se involucran 
                temáticas como la educación, la salud, la igualdad de género,
                la justicia, los derechos humanos, etc.
            </p>
            </div>
            <div className="flex flex-wrap m-4">
                {data.slice(0,6).map((project: any) => (
                    <Project 
                        data={project}
                        key={project.id}
                        location='hero'
                        portada = {false}
                    />
                ))}
            </div>
            <div className='flex'>
                <Link href="/projects">
                    <a className='m-auto bg-blue-400 hover:bg-blue-500 rounded px-24 py-4 font-semibold text-white'>
                        Ver todos los proyectos
                    </a>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero