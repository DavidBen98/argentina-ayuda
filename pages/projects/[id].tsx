import type {GetStaticPaths, GetStaticProps, NextPage, GetServerSideProps} from "next";
import type {ParsedUrlQuery} from "querystring";
import { ObjectAPI, Proj, Projects, imagelink } from "../../types/types";
import { getProjectsAR, getProject } from "../../services/getDataAPI";
import Project from "../../src/components/Project";
import Head from "next/head";

interface Props {
  project: ObjectAPI,
}

interface Params extends ParsedUrlQuery {
  id: string,
}

export const getStaticPaths: GetStaticPaths = async () => {
  const listProjects = await getProjectsAR();
  const projects = listProjects.projects.project;

  return {
    paths: projects.map((project: Proj) => ({
      params: {
        id: project.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  const {id} = params as Params;
  const project = await getProject(id)

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

const projects: NextPage<Props> = ({project}) => {
  const dataUndefined = {
    id: "",
    image: {imagelink: [{url:""}]}, 
    title: "", 
    description: "", 
    activities: "",
    organization: {name: "",
      city: "",
      activeProjects: "",
      logoUrl: "",
      url: "",
      addressLine1: ""
    },
    themeName: "",
    funding: "",
    goal: "",
    numberOfDonations: "",
    remaining: "",
    need: "",
    summary: "",
    longTermImpact: "",
    projectLink: "",
    additionalDocumentation: "",
  }

  const dataProject = project.projects !== undefined ? project.projects.project[0] : dataUndefined;
  return (
    <>
      <Head>
        <title>Argentina ayuda | {dataProject.title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Project data={dataProject} location='project' portada={false} />
      </div>
    </>
  );
};

export default projects;