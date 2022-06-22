import Link from 'next/link'
import Project from './Project'
import Slider from "./Slider"
import { ObjectAPI } from "../../types/types"
import useProjectsStates from '../../hooks/useProjectsStates'

interface Props {
    data: ObjectAPI,
}

const Projects: React.FunctionComponent <Props> = ({data}) => {
    const {project,
        projects,
        amountProj,
        pages,
        actualPage,
        idPrev,
        nextId,
        getMoreProjects
    } = useProjectsStates(data);
      
    const banners = data.projects.project.slice(7,10);

    return (
        <>
            <div>
                <Slider projects={banners} />
            </div> 
        
            <div className='flex justify-center w-full mt-8'>
                <div className='w-1/3 relative'>
                {/* <input 
                    type="text" 
                    id="search"
                    placeholder='Buscar...'
                    className='w-full py-4 pl-2 border-2 rounded'
                    value={project}
                    onChange={(e) => handleChange(e)}
                    />
                    <button
                    className='absolute right-2 py-4'
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button> */}
                </div>
            </div>
            <div className='flex flex-wrap w-full mt-8' id="search">
                {projects.projects.project.map((project) => (
                    <Project 
                        data={project}
                        key={project.id}
                        location='projects'
                        banner = {false}
                    />
                ))}
            </div>

            <div className='flex w-full justify-center bg-gray-100'>
                {actualPage > 1 &&
                    <Link href="/projects/#search">
                        <button onClick={() => getMoreProjects(idPrev, nextId, false)} className='m-2 p-4 bg-blue-400 text-white hover:bg-blue-500 rounded'> Previous </button>
                    </Link>
                }
                <span className='m-2 p-4 rounded'>
                    <span className='bg-gray-400 rounded p-4 mx-2 hover:cursor-pointer text-white'>
                        {actualPage} 
                    </span>
                    of {pages} 
                </span>
                {actualPage < pages &&
                    <Link href="/projects/#search">
                        <button onClick={() => getMoreProjects(idPrev, nextId, true)} className='m-2 p-4 bg-blue-400 text-white hover:bg-blue-500 rounded'> Next </button>
                    </Link>
                }
            </div>
        </>
    )
}

export default Projects