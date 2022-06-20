export interface ObjectAPI {
    projects : Projects,
}

export interface Projects {
    hasNext: boolean,
    nextProjectId: number,
    numberFound : number
    project: Proj[],
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
    additionalDocumentation: string,
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
    city: string,
    activeProjects: string,
    logoUrl: string,
    url: string,
    addressLine1: string,
}