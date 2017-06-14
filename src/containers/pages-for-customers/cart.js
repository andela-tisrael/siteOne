import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import App from '../../App';

class Cart extends Component {
  render() {
    return (
      <App>
        <Container>
          <Row>
            <Col xs="8">
              <ListGroup>
                <ListGroupItem>
                  <Row>
                    <Col>
                      Item 1
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="4" lg="2"><img src="http://via.placeholder.com/90x90" alt="placeholer"/></Col>
                    <Col><span>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</span></Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <Button color="danger" className="float-right">
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </App>
    );
  }
}

export default Cart;
