import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import type {ParsedUrlQuery} from "querystring";
import { DataProject, Proj } from "../../types/types";
import { getProjectsAR, getProject } from "../../services/getDataAPI";

interface Props {
  project: DataProject;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  const {id} = params as Params;
  console.log(id);
  const project = await getProject(id)

  if (!projects) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const listProjects = await getProjectsAR();
  const projects = listProjects.projects.project;

  return {
    paths: projects.map((project: any) => ({
      params: {
        id: project.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

const projects: NextPage<Props> = ({project}) => {
  console.log(project.projects.project[0]);
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

    </div>
  );
};

export default projects;