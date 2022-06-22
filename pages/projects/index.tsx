import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { getProjectsAR } from '../../services/getDataAPI'
import { ObjectAPI } from "../../types/types"
import Head from 'next/head'
import Projects from '../../src/components/Projects'

interface Props {
  data: ObjectAPI,
}

const index: NextPage<Props> = ({ data }) => {
  // const handleChange = (e:any) => {
  //   setProject(e.target.value)
  // }

  return (
    <>
      <Head>
        <title>Argentina ayuda | Projects </title>
      </Head>
      <Projects data={data} />
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
