import type { NextPage } from 'next'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getProjectsAR } from '../../services/getDataAPI'
import Project from '../../src/components/Project'
import Slider from "../../src/components/Slider"
import { ObjectAPI } from "../../types/types"
import Head from 'next/head'
import useProjectsStates from '../../hooks/useProjectsStates'

interface Props {
  data: ObjectAPI,
}

const index: NextPage<Props> = ({ data }) => {
  // const [project, setProject] = useState("");
  // const [projects, setProjects] = useState(data);
  // const [amountProj, setAmountProj] = useState(data.projects.numberFound);
  // const [pages, setPages] = useState(Math.ceil(amountProj / 9));
  // const [actualPage, setActualPage] = useState(1);
  // const [idPrev , setIdPrev] = useState([0]);
  // const [nextId , setNextId] = useState(data.projects.nextProjectId);

  // async function getMoreProjects (id : Array<number>, nextId: number, next: boolean){
  //   let newProjects = null;

  //   if (data.projects.hasNext){
  //     if (next){
  //       newProjects = await getNextProjectsAR(nextId)
  //     } else {
  //       newProjects = await getNextProjectsAR(id[id.length-2])
  //     }
  //   }

  //   if (next){
  //     setActualPage(actualPage+1);
  //     setIdPrev ([...id, projects.projects.nextProjectId])
  //     setNextId (newProjects.projects.nextProjectId)
  //   } else {
  //     const newNextId = id[id.length-1];
  //     setActualPage(actualPage-1);
  //     setNextId (newNextId)
  //     setIdPrev (idPrev.filter((elem: number) => elem !== newNextId))
  //   }

  //   setProjects (newProjects);
  // }

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

  // const handleChange = (e:any) => {
  //   setProject(e.target.value)
  // }

  return (
    <>
      <Head>
        <title>Argentina ayuda | Projects </title>
      </Head>
      
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

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const projects = await getProjectsAR()

  return {
      props : {
      data: projects,
    }
  }
}

export default index
