const headers = { headers :  
    {
      "Content-type": "application/json;charset=UTF-8",
      "Accept": "application/json",
    }
}

export async function getProjectsAR() {
    const url = `https://api.globalgiving.org/api/public/projectservice/countries/AR/projects/active?api_key=${process.env.GLOBAL_API_KEY}`

    const projectsAR = await fetch (url, headers)
    const data = await projectsAR.json()

    return data
}

export async function getProject(id: string) {
    let idNumber = Number(id);
    const url = `https://api.globalgiving.org/api/public/projectservice/projects/collection/ids?api_key=${process.env.GLOBAL_API_KEY}&projectIds=${idNumber}`

    const project = await fetch (url, headers)
    const data = await project.json()
    console.log(data)
    return data
}

export async function getCountProjectsAR(){
    const url = `https://api.globalgiving.org/api/public/projectservice/regions/countries/projects/active/count?api_key=${process.env.GLOBAL_API_KEY}`
    
    const countProjectsAR = await fetch (url, headers)
    .then ((res) => res.json())
    .then (data => data.regions.region[6].countries.country[1].projectCount);

    return countProjectsAR
}

export async function getNextProjectsAR(nextProject: any) {
    let url = "";
    if (nextProject === 0){
        console.log("entre aca")
        url = `https://api.globalgiving.org/api/public/projectservice/countries/AR/projects/active?api_key=a73473bd-0a5a-44ce-be27-44fadd476cbd`
    } else {
        url = `https://api.globalgiving.org/api/public/projectservice/countries/AR/projects/active?api_key=a73473bd-0a5a-44ce-be27-44fadd476cbd&nextProjectId=${nextProject}`
    }

    const projectsAR = await fetch (url, headers)
    const data = await projectsAR.json()

    return data
}