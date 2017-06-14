import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import App from '../../App';
// form should be inside a row and column
// Use text Area for address

class UserAccount extends Component {

  

  render() {
    return (
      <App>
        <Container>
          <Form>
            <div className="User_log_in_details">
              <h2>Log in details</h2>
              <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input type="username" name="username" id="Username" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="Password" placeholder="password placeholder" />
              </FormGroup>
              <Button>Reset Log In Details</Button>
            </div>
            <div className="User_address_details">
              <h2>Adress details</h2>
              <FormGroup>
                <Label for="examplePostcode">Postcode</Label>
                <Input type="textarea" name="text" id="examplePostcode" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti">Full Address</Label>
                <Input type="select" name="selectMulti" id="SelectMulti" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Manual Address</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <Button>Reset Address Details</Button>
            </div>
          </Form>
        </Container>
      </App>
    );
  }
}

export default UserAccount;
