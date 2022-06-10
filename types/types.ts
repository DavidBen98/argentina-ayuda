export interface DataProject {
    projects : Projects
}

export interface Projects {
    project: Proj[]
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