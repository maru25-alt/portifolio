import React, { Component } from 'react';
//import {data} from '../data/portifolioData'
import Client from '../api'


class componentName extends Component {
  state = {
    projects: [],
    loading: false
  }
  componentWillMount(){
    Client.getEntries({
    content_type : "portifolio", 
      }).then((res) => {
          this.setState({
            projects: res.items,
            loading: true
          })
      })
  }
  render() {
    const data = this.state.projects
    console.log(data)
    return (
      <section className="portifolio jumbotron">
       <h5>My Work</h5>
       <div className='row  justify-content-between portifolio-container'>
          {this.state.loading && data.map(e => {
              return(
                  <div key={e.sys.id} className="portifolio-card my-4 col-xl-5 col-md-5 col-sm-12 ">
                      <div className="card-image">
                        <img src={e.fields.image.fields.file.url}  alt="portifolio"></img>
                      </div>
                      <div className="details">
                          <h6>{e.fields.name}</h6>
                          <p>{e.fields.description}</p>
                          <div>
                              {e.fields.chips.map((a, index) => {
                                 return(
                                 <span key={index} className="badge badge-pill badge-success m-1">{a}</span>
                                 )
                              })}
                          </div>

                          <div>
                              <a className='btn button-primary m-2' href={e.fields.website}>Visit Site</a>
                              <a className="btn button-secondary m-2" href={e.fields.githubUrl}>GitHub Repository</a>
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
