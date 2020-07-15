import React, { Component } from 'react';
import {data} from '../data/portifolioData'

class componentName extends Component {
  render() {
    return (
      <section className="portifolio jumbotron">
       <h5>My Work</h5>
       <div className='row jumbotron portifolio-container'>
          {data && data.map(e => {
              return(
                  <div key={e.id} className="portifolio-card m-4 col-xl-5 col-md-10 col-sm-12 ">
                      <div>
                        <img src={e.image}  alt="portifolio"></img>
                      </div>
                      <div>
                          <h6>{e.title}</h6>
                          <p>{e.description}</p>
                          <div>
                              {e.languages.map((a, index) => {
                                 return(
                                 <span key={index} class="badge badge-pill badge-success m-1">{a}</span>
                                 )
                              })}
                          </div>

                          <div>
                              <a className='btn button-primary m-2' href={e.website}>Visit Site</a>
                              <a className="btn button-secondary m-2" href={e.github}>GitHub Repository</a>
                          </div>
                      </div>
                      

                  </div>
              )
          })}
       </div>
      </section>
    )
  }
}

export default componentName
