import { useState } from 'react'
import { getNextProjectsAR } from '../services/getDataAPI';
import { ObjectAPI } from '../types/types';

function useProjectsStates(data: ObjectAPI) {
  const [project, setProject] = useState("");
  const [projects, setProjects] = useState(data);
  const [amountProj, setAmountProj] = useState(data.projects.numberFound);
  const [pages, setPages] = useState(Math.ceil(amountProj / 9));
  const [actualPage, setActualPage] = useState(1);
  const [idPrev , setIdPrev] = useState([0]);
  const [nextId , setNextId] = useState(data.projects.nextProjectId);

  async function getMoreProjects (id : Array<number>, nextId: number, next: boolean){
    let newProjects = null;

    if (data.projects.hasNext){
      if (next){
        newProjects = await getNextProjectsAR(nextId)
      } else {
        newProjects = await getNextProjectsAR(id[id.length-2])
      }
    }

    if (next){
      setActualPage(actualPage+1);
      setIdPrev ([...id, projects.projects.nextProjectId])
      setNextId (newProjects.projects.nextProjectId)
    } else {
      const newNextId = id[id.length-1];
      setActualPage(actualPage-1);
      setNextId (newNextId)
      setIdPrev (idPrev.filter((elem: number) => elem !== newNextId))
    }

    setProjects (newProjects);
  }

  return {
    project,
    projects,
    amountProj,
    pages,
    actualPage,
    idPrev,
    nextId,
    getMoreProjects
  }
}

export default useProjectsStates

