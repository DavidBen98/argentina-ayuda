import React, {useState} from 'react'
import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { getCountProjectsAR, getProjectsAR } from '../../services/getDataAPI'
import Project from '../../src/components/Project'
import Slider from "../../src/components/Slider"
import { DataProject } from "../../types/types"

interface Props {
  data: DataProject,
  countProjectsAR: number,
}

const index: NextPage<Props> = ({ data, countProjectsAR }) => {
  const [project, setProject] = useState("");

  const portadas = data.projects.project.slice(7,10);

  const handleChange = (e:any) => {
    setProject(e.target.value)
  }

  return (
    <>
      <div>
        <Slider projects={portadas} countProjectsAR={countProjectsAR} />
      </div> 
      
      <div className='flex justify-center w-full mt-8'>
        <div className='w-1/3 relative'>
          <input 
            type="text" 
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
          </button>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const projects = await getProjectsAR()
  const countProjectsAR = await getCountProjectsAR()

  return {
      props : {
      data: projects,
      countProjectsAR: countProjectsAR,
    }
  }
}

export default index
