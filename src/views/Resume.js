import React, { Component } from 'react'
import {data} from '../data/resumeData'
import image from '../assets/pro.png'
import ProgressBar from '../components/ProgressBar'
import jsPDF from 'jspdf'
import ReactDOMServer from "react-dom/server";

export class Resume extends Component {
    generatePDF = () => {
        var doc = new jsPDF();
        // doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
        // doc.save('demo.pdf')
        doc.fromHTML(ReactDOMServer.renderToString(this.render()));
        doc.save("resume.pdf");  
      }

    render() {
        let {
            personal,
            skills,
            achievements,
            objective,
            education,
            experience,
            reference,
            certifications,
            languages 
        } = data
        return (
            <section>
        <div className="template_container ">
            <div className='d-flex flex-row-reverse'>
               <button className='btn button-secondary ' onClick={this.generatePDF} type="primary">Download Resume PDF</button> 
            </div>
            <div className="template1">
                <div className="row">
                   <div  className="col-4 ">
                       <div className="sidebar">
                       <div className="name_section">
                             <img alt="profile" src={image}></img>
                             <div>
                             <p className="section-heading">{personal.name}</p>
                                <p>Gender: {personal.gender}</p>
                                <p>Date of Birth: {personal.DOB}</p>
                                <p>place of Birth: {personal.placeofBirth}</p>
                                <p>national ID: {personal.id}</p>
                             </div>
                       </div>
                       <div className="contact_section">
                            <div className="section-heading">Contact</div>
                            <div>
                           <span className="contact"><i className="fad fa-envelope-open"></i> &nbsp; &nbsp;
                              <p >{personal.email}</p>
                            </span> 
                            <span className="contact"><i className="far fa-phone-square-alt"></i>&nbsp; &nbsp;
                              <p> {personal.phone}</p>
                            </span>
                            <span className="contact"><i className="far fa-map-marker-alt"></i>&nbsp; &nbsp;
                            <address>{personal.address}</address>
                            </span>
                            <div className="contact" ><i className="fab fa-facebook"></i> &nbsp; &nbsp;{personal.facebook}</div>
                           <div className="contact"><i className="fab fa-twitter"></i> &nbsp; &nbsp;{personal.twitter}</div>
                           <div className="contact"><i className="fab fa-linkedin"></i>&nbsp;  &nbsp;{personal.linkedin}</div>
                            </div>
                       </div>
                       <div className="skills_section">
                          <div className="section-heading">Skills</div>

                          {skills && skills.map(skill => {
                              return(
                                      <ProgressBar key={skill.id} bgcolor={skill.bgcolor} completed={skill.value} name={skill.name}/>
                                
                              )
                          })}
                          
                         
                       </div>
                     
                     </div>
                   </div>
                   <div className='col-8'>
                       <div className="main">
                       <div className="objective_section">
                          <div className="section-heading">Self Evaluation</div>
                          <p>{objective}</p>
                       </div>
                       <div className="education_section">
                          <div className="section-heading">Education</div>
                              {education && education.map(e => {
                                  return (
                                <div className="education" key={e.id}>
                                    <div className="title">{e.university}</div>
                                    <div>{e.degree}</div>
                                    <div className="content">
                                        <span>{e.grade}</span>
                                        <span>{e.year}</span>
                                    </div>
                                </div> 
                                  )
                              })}
                         
                       </div>


                       <div className="experience_section">
                          <div className="section-heading">Experience</div>
                          {experience && experience.map(ex => {
                              return(
                                <div className="experience" key={ex.id}>
                                      <div className="section-subheading">
                                        <div className="title">{ex.title}</div>
                                        <div className="date">{ex.year_from} - {ex.year_to}</div>
                                      </div> 
                                        <div>
                                            <p>{ex.description}</p>
                                       </div>
                                </div>
                              )
                          })}
                       </div>


                       <div className="reference_section">
                          <div className="section-heading">Reference</div>
                          {reference && reference.map(e => {
                              return(
                            <div className="reference" key={e.id}>
                               <div className="name"> <i className="fas fa-user"></i>&nbsp; {e.name}</div>
                               <div className="email"><i className="fad fa-envelope-open"></i>&nbsp; {e.email}</div>
                               <div><i className="fas fa-mobile-alt"> </i>&nbsp; {e.phone}</div>
                               <address> <i className="fas fa-map-marker-alt"></i> &nbsp;{e.address}</address>
                            </div>
                              )

                          })}
                       </div>

                       <div className="certification_sections">
                          <div className="section-heading">Certifications</div>
                          <ul>
                              {certifications && certifications.map(e => {
                                  return(
                                  <li key={e.id}>{e.title}, [{e.year}]</li>
                                  )
                              })}
                             
                          </ul>
                       </div>

                       <div className="achievements_section">
                          <div className="section-heading">Achievements &amp; Awards</div>
                          <ul className="achievements">
                          {achievements && achievements.map(achieve => {
                           return( <li key={achieve.id}>{achieve.title}, [{achieve.year}]</li>)
                            })}
                          </ul>
                       </div>

                       <div className="language_section">
                           <div className="section-heading">Languages</div>
                           <ul>
                               {languages && languages.map((language, i) => {
                                   return( <li key={i}>{language}</li>)
                               })}
                               
                           </ul>
                       </div>


                     </div>
                   </div>
                </div>
                
            </div>
        </div>  
            </section>
        )
    }
}

export default Resume
