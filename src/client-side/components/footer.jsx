import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import '../../index.css';

class Footer extends Component {
  render() {
    return (
    <footer className="footer">
      <div className="container">
        <Row>
          <Col>
            <a className="text-muted" href="/home">Home</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="text-muted" href="/about">About</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="text-muted" href="/about">Contact</a>
          </Col>
        </Row>
      </div>
    </footer>
    );
  }
}
export default Footer;

// this.props
// this.state

// this.setState({
//   showSignUp: false
// })

// In footer: Contact and About us

// When not logged in teh home page will showand when
// logged in the shop will be the home page
