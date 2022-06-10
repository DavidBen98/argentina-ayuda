import React from 'react'
import { Zoom } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css"
import { Proj } from '../../types/types'
import Image from "next/image"
import Project from './Project';
import Link from "next/link"

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
    <div style={{ width: "50px", height: "60px",display:"flex",justifyContent:"center", alignItems:"center", cursor: "pointer", background: "rgb(0,0,0,0.8)", borderRadius:"0.5rem", margin:".5rem" }}>
      <svg className="svg-icon" viewBox="0 0 20 20">
				<path fill="#fff" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
			</svg>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "50px", height: "60px", display:"flex",justifyContent:"center", alignItems:"center", cursor: "pointer", background: "rgb(0,0,0,0.8)", borderRadius:"0.5rem", margin:".5rem" }}>
      <svg className="svg-icon" viewBox="0 0 20 20">
				<path fill="#fff" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
			</svg>
    </div>
  ),
};

const Slider: React.FunctionComponent <Props> = ({ projects, countProjectsAR}) => {
  return (
    <div className="m-10">
			<Zoom {...zoomInProperties}>
				{projects.map((project,index) => (
					<div key={index} className="flex justify-center w-full cursor-pointer">
            <Link href={`projects/${project.id.toString()}`}>
              <div className='relative h-3/5'>
                <img
                  src={project.image.imagelink[5].url}
                  className="w-screen rounded-lg shadow-xl object-cover"
                  style={{height: "450px"}}
                  />
                <Project 
                    data={project}
                    key={project.id}
                    location='projects'
                    portada = {true}
                />
              </div>
            </Link>
					</div>
				))}
			</Zoom>
		</div>
  )
}

export default Slider