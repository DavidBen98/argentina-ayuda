import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Hero from '../src/components/Hero'
import { getCountProjectsAR, getProjectsAR } from '../services/getDataAPI'
import {DataProject} from "../types/types"

interface Props {
  data: DataProject,
  countProjectsAR: number,
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

const Home: NextPage<Props> = ({ data, countProjectsAR }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Argentina ayuda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero data={data.projects.project} countProjectsAR={countProjectsAR}/>
      </main>
    </div>
  )
}


// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...
// }

export default Home
