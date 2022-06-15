import Link from 'next/link'
import React from 'react'
import { Logo } from '../../utils/svg'

const Header = () => {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='/'>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {Logo()}
            <span className="mx-2 text-xl">Argentina ayuda</span>
          </a>
        </Link>
        <nav className="font-medium md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href='/'>
            <a className="mr-5 hover:text-gray-900">Inicio</a>
          </Link>
          <Link href='/projects'>
            <a className="mr-5 hover:text-gray-900">Proyectos</a>
          </Link>
          <Link href='/about'>
            <a className="mr-5 hover:text-gray-900">Acerca de</a>
          </Link>
        </nav>
        <a 
          href="https://www.globalgiving.org/search/?size=25&nextPage=1&sortField=sortorder&selectedLocations=00argent&loadAllResults=true"
          className="inline-flex items-center bg-blue-400 border-0 py-2 text-slate-50 hover:text-slate-50 px-3 focus:outline-none hover:bg-blue-500 hover:cursor-pointer rounded text-base mt-4 md:mt-0"
          target="_blank"
        >
          Dona ahora
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header