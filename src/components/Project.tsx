import Link from "next/link"
import { ObjectAPI, Proj } from "../../types/types"

interface Props {
    data: Proj,
    location: string,
    portada: boolean
}

const Project: React.FunctionComponent <Props> = ({ data, location, portada}) => {
    const {
        image, 
        title, 
        description, 
        organization,
        funding,
        goal,
        donations,
        remaining,
        need,
        summary,
        longTermImpact,
        projectLink,
        themeName,
        id,
        additionalDocumentation
    } = {
        image: portada || location==='project'? data.image.imagelink[5]?.url : data.image.imagelink[3].url, 
        title: data.title, 
        description: data.activities, 
        organization: data.organization,
        funding: data.funding,
        goal: data.goal,
        donations: data.numberOfDonations,
        remaining: data.remaining,
        need: data.need,
        summary: data.summary,
        longTermImpact: data.longTermImpact,
        projectLink: data.projectLink,
        themeName: data.themeName,
        id: data.id.toString(),
        additionalDocumentation: data.additionalDocumentation,
    }

    if ((location === 'hero') || (location === 'projects' && !portada)){
        return (
            <>
                <div className="xl:w-1/3 md:w-1/2 p-4 min-h-86">
                    <div className="bg-gray-100 p-6 rounded-lg flex flex-wrap">
                        <img width="100%" height="40px" className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt={title} />
                        <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font w-full">{themeName}</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 h-16">{title}</h2>
                        <span>
                            <p className="leading-relaxed text-base h-40 truncate whitespace-normal">
                                {description}
                            </p>
                            <span>...</span>
                        </span>
                        <Link href={`/projects/${id}`}> 
                            <a className="bg-blue-400 hover:bg-blue-500 m-auto py-4 px-4 rounded text-white">
                                Ver más
                            </a>
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    if (portada){ //Portada
        return (  
            <div className="absolute m-auto top-0 bottom-0 max-h-min rounded w-full flex justify-center align-center">
                <div className="p-6 bg-black/80 rounded-lg flex flex-wrap w-8/12">
                    <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font w-full">
                        {themeName}
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                        {title}
                    </h2>
                    <span>
                        <p className="leading-relaxed text-white truncate whitespace-normal">
                            {description}
                        </p>
                    </span> 
                    {/* <Link href={`/projects/${id}`}>  */}
                        <a className="bg-blue-400 w-56 flex align-center justify-center h-16 text-lg hover:bg-blue-500 m-auto mt-8 py-4 px-4 rounded text-white">
                           Conocé más
                           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 ml-1" viewBox="0 0 24 24">
                           <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    {/* </Link> */}
                </div>
            </div>
        )
    }

    return (  
        <div className="xl:w-11/12 p-4 min-h-86">
              <div className="bg-gray-100 p-6 rounded-lg flex flex-wrap w-full">
                <div className="bg-gray-100 p-6 rounded-lg flex flex-wrap justify-center w-full">
                  <h3 className="tracking-widest text-blue-500 text-sm font-medium title-font w-full text-center">{themeName}</h3>
                  <h1 className="text-gray-900 font-normal text-4xl title-font w-full text-center">{title}</h1>
                  <h2 className="text-lg text-gray-900 font-medium title-font w-full text-center mt-2">{organization.name}</h2>
                </div>
                <div className="lg:w-8/12 pl-4 sm:w-full">
                    <img width="100%" className="rounded object-cover object-center mb-6" src={image} alt={title} />
                    <span>
                        <h3 className="font-semibold text-2xl mb-2">Resumen</h3>
                        <p className="leading-relaxed truncate whitespace-normal mb-8 text-xl">
                            {summary}
                        </p>
                    </span>
                    <span>
                        <h3 className="font-semibold text-2xl mb-2">Desafío</h3>
                        <p className="leading-relaxed truncate whitespace-normal mb-8 text-xl">
                            {description}
                        </p>
                    </span>
                    <span>
                        <h3 className="font-semibold text-2xl mb-2">Solución</h3>
                        <p className="leading-relaxed truncate whitespace-normal mb-8 text-xl">
                            {need}
                        </p>
                    </span>
                    <span>
                        <h3 className="font-semibold text-2xl mb-2">Impacto a largo plazo</h3>
                        <p className="leading-relaxed truncate whitespace-normal mb-8 text-xl">
                            {longTermImpact}
                        </p>
                    </span>
                    {data.additionalDocumentation && 
                        <span>
                            <h3 className="font-semibold text-2xl mb-2">Documentación adicional</h3>
                            <p className="leading-relaxed truncate whitespace-normal mb-8 text-xl">
                                <a href={additionalDocumentation} target="_blank" className="border-b-2 border-blue-400 text-blue-400 hover:text-blue-500 hover:border-blue-500">
                                    Este proyecto tiene información adicional en un archivo PDF (projdoc.pdf).
                                </a>
                            </p>
                        </span>
                    }
                </div>
                <div className="lg:w-4/12 sm:w-full">
                    <div className="bg-gray-800 rounded ml-4 p-4 w-11/12 flex flex-wrap text-xl text-lime-50 sm:mx-auto">
                        <p className="p-2 flex justify-center flex-wrap w-full">
                            <span className="w-full text-center">
                                Han sido recaudados 
                            </span>
                            <span className="text-3xl font-bold" style={{color: "#9BF78F"}} title="United States Dollars">
                                 ${Math.round(Number(funding))}
                            </span> 
                        </p>
                        <p className="p-2 flex justify-center flex-wrap w-full">
                            <span className="w-full text-center">
                                La meta es 
                            </span>
                            <span className="font-bold" title="United States Dollars">${goal}</span>
                        </p>
                        <p className="p-2 flex justify-center flex-wrap w-full">
                            <span className="w-full text-center">
                                Se han realizado 
                            </span>
                            <span className="font-bold w-full text-center" style={{color: "#9BF78F"}}>{donations}</span> 
                            <span>donaciones</span>
                        </p>
                        <p className="p-2 flex justify-center flex-wrap w-full rounded">
                            <span className="w-full text-center">
                                Quedan 
                            </span>
                            <span className="text-3xl font-bold w-full text-center" style={{color: "#F9F871"}} title="United States Dollars">${Math.round(Number(remaining))}</span> 
                            <span>para llegar a la meta</span>
                        </p>
                        <a href={projectLink} target="_blank" className="flex items-center justify-center bg-blue-400 border-0 py-4 px-3 m-auto text-slate-50 rounded w-9/12 text-base focus:outline-none hover:bg-blue-500 hover:cursor-pointer mt-4">
                            DONAR AHORA
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="bg-gray-800 rounded mt-4 ml-4 p-4 w-11/12 flex flex-wrap justify-center text-xl text-lime-50 sm:mx-auto">
                        <div className="m-auto">
                            <h3 className="text-base opacity-80 text-center">Información de la organización</h3>
                            <h2 className="text-3xl my-4 text-center">{organization.name}</h2>
                            <img src={organization.logoUrl} alt="Logo Organización" className="m-auto w-40 h-24 object-cover" />
                        </div>
                        <div>
                            <h4 className="text-base mt-4">
                                <span className="font-semibold">LOCATION: </span>
                                {organization.city} - {organization.addressLine1}
                            </h4>
                            <h4 className="text-base mt-4">
                                <span className="font-semibold">SITIO WEB: </span>
                                <a href={organization.url} target="_blank" className="text-blue-400 border-blue-400 hover:border-blue-500 hover:border-b-2 hover:text-blue-500 cursor-pointer">{organization.url}</a>
                            </h4>
                        </div>
                    </div>
                </div>
              </div>
          </div>
    )
}

export default Project