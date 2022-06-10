import React from 'react'
import { Zoom } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css"
import { Proj } from '../../types/types'
import Image from "next/image"

interface Props {
  projects: Proj[],
  countProjectsAR: number,
}

const zoomInProperties = {
  indicators: true,
  scale: 1.2,
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  prevArrow: (
    <div style={{ width: "30px", height: "30px", marginRight: "-30px", cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#2e2e2e"
      >
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", height: "30px", marginLeft: "-30px", cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#2e2e2e"
      >
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </div>
  ),
};

const Slider: React.FunctionComponent <Props> = ({ projects, countProjectsAR}) => {
  return (
    <div className="m-10">
			<Zoom {...zoomInProperties}>
				{projects.map((project,index) => (
					<div key={index} className="flex justify-center w-full">
						<img
							src={project.image.imagelink[5].url}
							className="w-3/4 object-cover rounded-lg shadow-xl"
              style={{height: "450px"}}
						/>
					</div>
				))}
			</Zoom>
		</div>
  )
}

export default Slider