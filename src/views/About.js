import React, { Component } from 'react'
import ProgressBars from '../components/ProgressBarsContainer'

class About extends Component {
  render() {
    return (
      <section className="about">
      <h5>Who Am I</h5>
      <p className='about-text'>
      I am a Full Stack Web Developer.I am passionate about building excellent software that improves the lives of those around me. My main priority is building responsive websites  which users can easily interact with . I prioritize creating  intuitive and  dynamic user experiences  websites
     </p>

      <div className="subsection">
          <h5>Skill Levels</h5>
          <div className="skillsLevel-container row justify-content-around">
              <div className='card col-md-3 col-sm-12 p-1'>
                <div className="card__side card__side--front-1">
                  <div className="card__title">
                     <i class="fa fa-code fa-5x " aria-hidden="true"></i>
                  </div>
                  <div className="card__details">
                    <h6>Code</h6>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                  <h6>Code</h6>
                   <p>I try to write simple reuseble code. I aim to reach simplicity, modularity, efficiency and elegance  </p>
                  </div>
                </div>
  
              </div>

              <div className='card p-1  col-md-3 col-sm-12'>
                <div className="card__side card__side--front-1">
                  <div className="card__title">
                      <i class="fas fa-database fa-5x"></i>
                  </div>
                  <div className="card__details">
                      <h6>Back End</h6>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                     <h6>Back End</h6>
                      <p>
                      I use modern technologies for back-end programming to allow websites to fast load times and lag free interaction,
                      </p>
                  </div>
                </div>
              </div>
      
              <div className='card  p-1  col-md-3 col-sm-12'>
              <div className="card__side card__side--front-1">
                  <div className="card__title">
                    <i class="fa fa-laptop fa-5x" aria-hidden="true"></i>
                  </div>
                  <div className="card__details">
                     <h6>Design</h6>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                  <h6>Design</h6>
                  <p> I design responsive layouts that will work on any device, big or small.The designs a modern with correct use of topograph</p>
                  </div>
                </div>
               
              </div>
          </div>
      </div>
      <div className="subsection">
          <h5>Skills</h5>
          <div className='container'>
           <ProgressBars/>
          </div>
      </div>
      </section>
    )
  }
}

export default About
