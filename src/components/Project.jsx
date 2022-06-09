import Link from "next/link"

const Project = ({ data, location}) => {
    const {
        image, 
        title, 
        description, 
        organization,
        themeName,
        id
    } = {
        image: data.image.imagelink[3].url, 
        title: data.title, 
        description: data.activities, 
        organization: data.organization,
        themeName: data.themeName,
        id: data.id.toString()
    }

    if (location === 'hero'){
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

    return (
        <div>

        </div>
    )
}

export default Project