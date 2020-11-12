import React from 'react'
import Project from '../../components/project'

export default function Portfolio() {
    return (
        <main className="container gallery">
        <div className="row no-gutters">
            <div className="col-md-8 bg-alert">
                <h1>Portfolio</h1>
                <hr/>
                <div className="row no-gutters">
                        <Project name="Recipes by Nutrition" imageURL="./images/recipe-by-nutrition-small.png" githubLink= "https://github.com/mercspring/recipes-by-nutrition" deployedSite="https://mercspring.github.io/recipes-by-nutrition/" />
                        <Project name="The Shark Quiz" imageURL="./images/shark-quiz-small.png" githubLink= "https://github.com/mercspring/the-shark-quiz" deployedSite="https://mercspring.github.io/the-shark-quiz/" />
                        <Project name="Weather Dashboard" imageURL="./images/weather-dashboard-small.png" githubLink="https://github.com/mercspring/weather-forcast-dashboard" deployedSite="https://mercspring.github.io/weather-forcast-dashboard/" />
                        <Project name="The Social Petwork" imageURL="./images/social-petwork-small.jpg" githubLink="https://github.com/sophia2798/social_petwork" deployedSite="https://secret-meadow-51163.herokuapp.com/"/>

                </div>
            </div>
        </div>
        <div className="col-md-4"></div>
    </main>
    )
}
