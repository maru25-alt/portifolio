import React, { Component } from 'react'
import logo from '../assets/logo.png'

class Footer extends Component {
    state ={
        year: new Date().getFullYear()
    }
   
  render() {
    return (
      <>
       <footer className="footer ">
        <div className="bg-dark">
            <div className="footer-top container">
                <div className="row">
                    <div className=" col-md-8 col-sm-12">
                        <div className="footer_widget">
                                <a className="navbar-brand" href="/" >
                                   <img alt="logo" src={logo} width='60'></img><span className="logo-text">Maru25</span>
                                </a>
                            <p>
                                I am fullstack web developer. Feel free to hire me at any time
                            </p>
                            <div className="socail_links">
                                <ul className=" d-flex  flex-row">
                                      <li >  <a className='p-3'  href="https://www.facebook.com/rudo.mapfumba"><i className="fab fa-facebook "></i> </a> </li>
                                    <li>
                                        <a className='p-3' href="https://www.linkedin.com/in/rudo-mapfumba-6023a9167/">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='p-3' href="https://www.instagram.com/mapfurudo/">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    
                                    <li><a className='p-3' href="mailto:rudomaru25@gmail.com"> <i className="fas fa-envelope"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className=" col-md-4 col-sm-12">
                        <div className="footer_widget">
                            <ul>
                            <h3 className="footer_title">
                                Address
                            </h3>
                                    <li><i className="far fa-map-marker-alt"></i>&nbsp; 238 Songling RD Qingdao 266100 China</li>
                                    <li><i className="far fa-phone-square-alt"></i>&nbsp; +86 156 0542 6035</li>
                                    <li><i className="fad fa-envelope-open"></i> &nbsp;  rudomaru25@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-12">
                        <p className="copy_right text-center">  
                      Copyright &copy;{this.state.year} All rights reserved |  Rudo Mapfumba
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      </>
    )
  }
}

export default Footer
