import React, { Component } from 'react'
import ProgressBars from '../components/ProgressBarsContainer'

class About extends Component {
  render() {
    return (
      <section className="about">
      <h5>Who Am I</h5>
      <p className='about-text'>
      I am a full stack web developer. I am passionate about building responsive websites and simple websites which users can easily interact with . I prioritize topography of a website
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut iste consectetur doloribus labore obcaecati velit. Perferendis id sapiente provident 
                     tempora porro eaque enim sunt esse sit, officiis debitis itaque</p>

      <div className="subsection">
          <h5>Skill Levels</h5>
          <div className="skillsLevel-container row">
              <div className='card col-md-3 col-sm-12 p-1'>
                <i class="fa fa-code fa-5x " aria-hidden="true"></i>
                 <h6>Front End</h6>
                 <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut iste consectetur doloribus labore obcaecati velit. Perferendis id sapiente provident 
                     tempora porro eaque enim sunt esse sit, officiis debitis itaque.</p>
              </div>
              <div className='card p-1  col-md-3 col-sm-12'>
                <i class="fas fa-database fa-5x"></i>
                  <h6>Back End</h6>
                  <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut iste consectetur doloribus labore obcaecati velit. Perferendis id sapiente provident 
                     tempora porro eaque enim sunt esse sit, officiis debitis itaque.</p>
              </div>
      
              <div className='card  p-1  col-md-3 col-sm-12'>
                <i class="fa fa-laptop fa-5x" aria-hidden="true"></i>
                  <h6>Design</h6>
                  <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut iste consectetur doloribus labore obcaecati velit. Perferendis id sapiente provident 
                     tempora porro eaque enim sunt esse sit, officiis debitis itaque.</p>
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
