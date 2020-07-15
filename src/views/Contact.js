import SimpleReactValidator from 'simple-react-validator';
import React, { Component } from 'react'
import emailjs from 'emailjs-com';

export class Contact extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }
    state = {
        name: "",
        email: "",
        message: "",
        number: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
     handleSubmit = (e) => {
         e.preventDefault();
         if (this.validator.allValid()) {
            emailjs.sendForm('gmail', 'contact', e.target, 'user_MKMbkoKCK0PNJYbeaCWRm')
            .then((result) => {
                console.log(result.text);
                alert("Successfully send message")
            }, (error) => {
                console.log(error.text);
                alert(error.text)
            });
            this.setState({
                name: "",
                email: "",
                message: "",
                number: ""
           })
    }
        else {
            this.validator.showMessages();
            this.forceUpdate();
          }
         
     }
    render() {
        return (
            <section className='contact'>
            <div className="row">
            <div className="col-lg-6">
                <div className="  contact-contacts">
                    <h3>Rudo Mapfumba <br></br> Web Developer</h3>
                    <p>238 Songling Road <br></br> Qingdao 266100 China</p>
                    <p>Cellphone: +86 156 0542 6035 </p>
                     <p>
                        info@mysite.com
                    </p>        
                     <div>
                            <ul className="d-flex ">                            
                                 <li className="p-3">  <a  href="https://www.facebook.com/rudo.mapfumba"><i className="fab fa-facebook "></i> </a> </li>
                                    <li className="p-3"> <a href="https://github.com/maru25-alt"><i className="fab fa-github " ></i></a></li>
                                    <li className="p-3"> <a href="https://www.linkedin.com/in/rudo-mapfumba-6023a9167/"><i className="fab fa-linkedin " ></i></a></li>
                                    <li className="p-3"> <a href="https://twitter.com/MapfumbaRudo"><i className="fab fa-twitter " ></i></a></li>
                                    <li className="p-3"><a href="https://www.instagram.com/mapfurudo/"><i className="fab fa-instagram " ></i></a></li>
                                
                                </ul>         
                     </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="contact-form">
                    <form onSubmit={this.handleSubmit} className="contact-form">
                        <h1>GET IN TOUCH</h1>
                        <input className="form-group form-control" name="user_name" value={this.state.name}  id="name" onChange={this.handleChange} type="text"  placeholder="Name"/>
                        {this.validator.message('name',this.state.name, 'required')}
                        <input className=" form-group form-control" name="user_email" value={this.state.email}  id="email" onChange={this.handleChange} type="email"   placeholder="Email"/>
                        {this.validator.message('email',this.state.email, 'required|email')}
                        <input className=" form-group form-control"  type="telephone" name="user_phone" onChange={this.handleChange} value={this.state.number} id="number"  placeholder="Phone"></input>
                        {this.validator.message('telephone',this.state.number, 'required')}
                        <textarea className=" form-group form-control" name="message" value={this.state.message}  id="message" onChange={this.handleChange}   rows="10" placeholder="Message"></textarea>
                        {this.validator.message('message',this.state.message, 'required')}
                        <button className="form-group btn button-primary" type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </div>
        </section>
        )
    }
}

export default Contact


