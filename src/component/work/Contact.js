import React, { Component } from "react";
import { Consumer } from "../../context";
//import uuid from "uuid";
import TextInputGroup, {TextAreaGroup} from "../layout/TextInputGroup";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    errors: {},
    success: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, message } = this.state;
    //Error Checking
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (message === "") {
      this.setState({ errors: { message: "message is required" } });
      return;
    }

    // dispatch({ type: "SUBMIT_FORM", payload: Your data });

    //Clear State
    this.setState({
      name: "",
      email: "",
      message: "",
      errors: {},
      success: true
    });

  };

  render() {
    const { name, email, message, errors, success } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="row">
            <div className="col-12 col-md-4">
                <div>
                    <h1>QUESTION</h1>
                    <h1>WE ARE HERE TO HELP!</h1>
                </div>
            </div>
            <div className="col-12 col-md-8">
            <div className="contactForm">
            {
                success && (<div className="alert alert-success alert-dismissible"> <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Success!</strong> Your Message Submitted!.
                </div>)
            }
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <TextInputGroup
                                lable="Name"
                                name="name"
                                value={name}
                                onChange={this.onChange}
                                error={errors.name}
                            />
                        </div> 
                        <div className="col-sm-12 col-md-6">
                            <TextInputGroup
                                lable="Email"
                                name="email"
                                value={email}
                                onChange={this.onChange}
                                error={errors.email}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <TextAreaGroup
                                lable="Message"
                                name="message"
                                value={message}
                                onChange={this.onChange}
                                error={errors.message}
                            />
                        </div>
                    </div>
                  
                  <input type="submit" className="btn submit-btn" value="Send" />
                </form>
            </div>
            </div>
            
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
