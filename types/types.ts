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
    organization :string,
    themeName: string,
}

export interface imagelink{
    imagelink: Array<
        {
            url: string
        }
    >
}