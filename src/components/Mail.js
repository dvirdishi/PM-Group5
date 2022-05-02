import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
class Mail extends Component{
    constructor(props) {
        super(props);
        this.state= {
            name:'',
            email:'',
            phone:'',
            message:''
        }
    }

    handleChangeName=(event)=>{
        this.setState({
            name:event.target.value,
        });

    }
    handleChangeEmail=(event)=>{
        this.setState({
            email:event.target.value,
        });
    }
    handleChangePhone=(event)=>{
        this.setState({
            phone:event.target.value,
        });
    }
    handleChangeMessage=(event)=>{
        this.setState({
            message:event.target.value,
        });
    }
    sendMail=()=>{
        let template_params = {
            "name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
            "message":this.state.message,
        }
        let service_id = "gmail";
        let template_id = "template_lx5muow";
        emailjs.send(service_id,template_id,template_params,'ucm6ZRPzaTroZMZbp')
            .then(function() {
                alert('SUCCESS!');
            }, function(err) {
                console.log('FAILED...', err);
            });
    };
    render(){
        return(
            <div className="form">
                <div className="contact" >
                <br />
                Name: <br /> <input placeholder=" Name" type="text" className="contactname" name="name" onChange={this.handleChangeName} />
                <br />
                <br />
                Email: <br /> <input placeholder=" Email Address" type="text" className="contactemail" name="email"  onChange={this.handleChangeEmail}/>
                <br />
                <br />
                Phone: <br /> <input  placeholder=" Phone Number" type="number" className="contactphone" name="phone"  onChange={this.handleChangePhone}/>
                <br />
                <br />
                Message:<br />  <textarea  placeholder=" Type message here..." className="contactmessage"     name="message"  onChange={this.handleChangeMessage}/>
                <br />
                <button  type="submit" onClick={this.sendMail}>Send mail</button>
            </div>
            </div>
        );
    }
}
export default Mail;
