import React from 'react'

export default function Project(props) {
    return (
        <div className="col-md-6 justify-content-center">
            <div className="card" >
                <h5 className="card-title">{props.name}</h5>
                <img src={props.imageURL} alt={props.name} />
                <div className="card-body">
                    <a href={props.githubLink} rel="noreferrer" target="_blank" className="card-link">Github Repo</a>
                    <a href={props.deployedSite} rel="noreferrer" target="_blank" className="card-link">Deployed Site</a>
                </div>
            </div>
        </div>
    )
}
