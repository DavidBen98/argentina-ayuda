import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import Hero from '../src/components/Hero'
import { getProjectsAR } from '../services/getDataAPI'
import {ObjectAPI} from "../types/types"

interface Props {
  data: ObjectAPI,
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const projects = await getProjectsAR()

  return {
      props : {
        data: projects,
      }
  }
}

const Home: NextPage<Props> = ({ data }) => {
  return (
      <>
        <Head>
          <title>Argentina ayuda | Home </title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <Hero data={data}/>
      </>
  )
}

export default Home
