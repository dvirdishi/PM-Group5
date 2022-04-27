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
            <div>
                <br />
                Name:  <input  type="text" name="name" onChange={this.handleChangeName} />
                <br />
                <br />
                Email:  <input  type="text" name="email"  onChange={this.handleChangeEmail}/>
                <br />
                <br />
                Phone:  <input type="number" name="phone"  onChange={this.handleChangePhone}/>
                <br />
                <br />
                Message:<br />  <input className="contact" type="textarea" name="message"  onChange={this.handleChangeMessage}/>
                <br />
                <button  type="submit" onClick={this.sendMail}>Send mail</button>
            </div>
        );
    }
}
export default Mail;
