import React from 'react'

export default function Home() {
    return (
        <main className="container">
        <div className="row">
          <section className="col-sm-10 col-md-8 bg-alert">
            <h1>About Me</h1>
            <hr/>
            <img src="./images/personal_pic.jpg" alt="headshot" className="aboutme-img"/>
            <p className="aboutme-text"> I am a tech professional with a broad base of skills. I have a bachelors
              degree in Electrical Engineering
              from Washington State University and experience holding electrical engineering, IT and production roles. I am
              currently broadening my base of technical knowledge further by attending the University of Washington's coding
              boot camp. </p>
            <p>Recently, I followed through on my dream of living abroad and spent two years living in Australia and
              nine months living in Singapore. In my free time I enjoy going for long walks, traveling and playing games
              with
              my friends and family.</p>
          </section>
          <div className="col-sm-2 col-md-4">
          </div>
        </div>
      </main> 
    )
}
