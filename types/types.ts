export interface DataProject {
    projects : Projects,
}

export interface Projects {
    project: Proj[],
    hasNext: boolean,
    nextProjectId: number,
    numberFound : number
}

export interface Proj {
    id: string,
    image: imagelink, 
    title: string, 
    description: string, 
    activities: string,
    organization: organization,
    themeName: string,
    funding: string,
    goal: string,
    numberOfDonations: string,
    remaining: string,
    need: string,
    summary: string,
    longTermImpact: string,
    projectLink: string,
}

export interface imagelink{
    imagelink: Array<
        {
            url: string
        }
    >
}

export interface organization{
    name: string,
}