import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import emailjs from 'emailjs-com';

export class HireMe extends Component {
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
       }
       else {
           this.validator.showMessages();
           this.forceUpdate();
         }
        
         this.setState({
            name: "",
            email: "",
            message: "",
           
       })
    }
    
    render() {
        return (
            <div>
                <button type="button" className="btn button-primary" data-toggle="modal" data-target="#staticBackdrop">
                    Hire Me
                 </button>

                 <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Fill in the form</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <form onSubmit={this.handleSubmit}>
                        <div className="modal-body">
                        <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="user_name" value={this.state.name} onChange={this.handleChange} className="form-control" id="name"/>
                                {this.validator.message('name',this.state.name, 'required')}
                        </div>
                          <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="user_email"  value={this.state.email}  onChange={this.handleChange} className="form-control" id="email" />  
                                {this.validator.message('email',this.state.email, 'required|email')}
                            </div>
                           
                            <div className="form-group ">
                            <label className="form-check-label" htmlFor="message">Description</label>
                            <textarea className="form-control" name="message" value={this.state.message} id="message" onChange={this.handleChange} rows='10' aria-describedby="descriptionHelp"></textarea>  
                            {this.validator.message('email',this.state.email, 'required')}
                            <small id="descriptionHelp" className="form-text text-muted">Describe fully the job requirements.</small> 
                            </div>

                           </div>
                            <div className="modal-footer">
                               <button type="button" className="btn btn-secondary px-5" data-dismiss="modal">Close</button>
                               <button type="submit" className="btn button-primary" >Send</button>
                             </div>
                        </form>
                   
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default HireMe
