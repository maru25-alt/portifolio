import React, { Component } from 'react'
import  img from '../assets/pro.png'
 class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
        <div >
            <div className="home-body">
                <div className="row ">
                     <div className="col-xl-5  col-md-4  col-sm-6">
                        <img  className="mt-md-3" src={img} alt="" ></img>
                    </div>
                    <div className="col-xl-7 col-md-8 col-sm-6">
                        <div className="home_text ">
                            <h3> Hey , I'm Rudo  Mapfumba </h3>
                            <h3>I'm a Software Developer</h3>
                            <p>I build professional websites and  apps</p>
                            <div className="video_service_btn">
                                <a href="/portifolio" className="btn button-secondary m-2 py-3 py-md-2 py-sm-1">View My Work</a> &nbsp;
                                <a href="/contact" className="btn button-primary m-2 py-3 py-md-2 py-sm-1 px-2"> <i className="fa fa-play"></i>&nbsp;
                                    Contact me</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Home
