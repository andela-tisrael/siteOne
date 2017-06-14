import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as loginActions from './actions/AuthenticationActions';
import ReactDOM from 'react-dom';
// import EnsureNotAuthenticated from './components/EnsureNotAuthenticated';
import App from '../../App';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignup: false
    }
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  focus() {
     this.textInput.focus();
   }

   renderLogInButton() {
     return (
       <div>
         <GoogleLogin
           clientId="199181633214-2ckivsi5ihf67ljrs67ma0s2q5qlggrg.apps.googleusercontent.com"
           buttonText="Login"
           onSuccess={(res)=>{this.props.actions.login(res)}}
          //  onFailure={this.props.actions.loginErr}
           className="btn btn-danger btn-block btn-login mb-30"
         />
       </div>
     )
   }

   renderSignUpButton() {
     return (
       <div className="btn-register-container">
         <GoogleLogin
           clientId="199181633214-2ckivsi5ihf67ljrs67ma0s2q5qlggrg.apps.googleusercontent.com"
           buttonText="Submit"
           onSuccess={(res)=>{this.props.actions.signUp(res, ReactDOM.findDOMNode(this.textInput).value)}}
           onFailure={this.props.actions.loginErr}
           className="btn btn-danger btn-register"
         />
       </div>
     )
   }
   toggleSignUp() {
     this.setState({showSignup: !this.state.showSignup});
   }

    render() {
      return (
      // <EnsureNotAuthenticated>
        <App>
          <Row className="login-container">

            <Col md={12}>
              <div className="mb-30">
                <h1>Login</h1>
              </div>
              <Row>
                <Col md={12}>
                  {this.renderLogInButton()}
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                <div className="btn-signup-container">
                  <div className="btn-signup" onClick={()=>{this.toggleSignUp()}}>Sign up</div>
                </div>
              </Col>
                {this.state.showSignup ?
                  <Col md={12} className="p-30">
                      <Form className="login-form" action="/sessions" method="POST" horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <label>Enter Username *</label>
                            <FormControl ref={(input) => { this.textInput = input; }} type="username" placeholder="Username" />

                        </FormGroup>
                      </Form>
                      <Col md={12} className="no-padding mn-15">
                          {this.renderSignUpButton()}
                      </Col>
                    </Col>
                  : null}
              </Row>
            </Col>
          </Row>
      </App>
    // </EnsureNotAuthenticated>
      );
    }
}

document.getElementById('googleButton')

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
