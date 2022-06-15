import Link from "next/link"
import { DataProject, Proj } from "../../types/types"

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
        themeName,
        id
    } = {
        image: portada? data.image.imagelink[5].url : data.image.imagelink[3].url, 
        title: data.title, 
        description: data.activities, 
        organization: data.organization,
        themeName: data.themeName,
        id: data.id.toString()
    }

    if (location === 'hero' || !portada){
        return (
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
                  <Link href={`projects/${id}`}> 
                        <a className="bg-blue-400 hover:bg-blue-500 m-auto py-4 px-4 rounded text-white">
                          Ver más
                        </a>
                  </Link>
              </div>
          </div>
        )
    }

    // if (location === 'projects'){
        //Portada
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
                    <Link href={`projects/${id}`}> 
                        <a className="bg-blue-400 w-56 flex align-center justify-center h-16 text-lg hover:bg-blue-500 m-auto mt-8 py-4 px-4 rounded text-white">
                           Conocé más
                           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 ml-1" viewBox="0 0 24 24">
                           <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        )
    // }
}

export default Project