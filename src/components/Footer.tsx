import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { Github, Linkedin, Twitter, Logo } from '../../utils/svg'
// import Logo from "../assets/logo.svg"

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Link href='/'>
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    {Logo()}
                    <span className="ml-3 text-xl">Argentina ayuda</span>
                </a>
            </Link >

            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Argentina ayuda —
            <a href="https://twitter.com/DavidBenedette" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@DavidBenedette</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://twitter.com/DavidBenedette" target="_blank" className="ml-3 text-gray-500">
                {Twitter()}
            </a>
            <a href="https://www.linkedin.com/in/david-benedette/" target="_blank" className="ml-3 text-gray-500">
                {Linkedin()}
            </a>
            <a href="https://github.com/DavidBen98/" target="_blank" className="ml-3 text-gray-500">
                {Github()}
            </a>
            </span>
        </div>
    </footer>
  )
}

export default Footer