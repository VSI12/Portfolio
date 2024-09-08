import React from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import Workitems from './Workitems'

const Works = () => {
  return (
    <div>
        <div className="work__filters">
        {projectsNav.map((item, index) => {
            return (
                <div className="work__filters">
                    <span className="work__item" key={index}>
                        {item.name}
                    </span>        
                </div>
            )
        })}
    </div>

    <div className="work__container container grid">
        {projectsData.map((item, index) => {
            return <Workitems item={item} key ={item.id} />
        })}
    </div>
    </div>
  )
}

export default Works