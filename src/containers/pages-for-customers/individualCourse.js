import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Container, Row, Col, Card, CardBlock, CardText } from 'reactstrap';
import * as courseActions from '../../client-side/actions/courseActions';
import App from '../../App';

class CourseContainer extends Component {
  componentWillMount() {
    this.props.actions.getCourse(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <App>
        <Container>
          <Row>
            <Col>
            <Row>
              <Col>
                <h2>{this.props.course.title}</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{backgroundColor: '#eee'}}>
                  <CardBlock>
                    <CardText>
                      <ul>
                        <li>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                        </li>
                      </ul>
                    </CardText>
                  </CardBlock>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Lecturers, Links</h2>
                This is a comprehensive course on a technology called Language Integrated Query (LINQ). LINQ is a core part of .NET that is responsible for helping us iterate through, filter, search, transform and manipulate collections, be it local objects (arrays, lists, etc.) or remote objects (e.g., databases).
                This course covers:
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Description</h2>
                {this.props.course.description}
              </Col>
            </Row>
            </Col>
            <Col xs="4">
              <Row>
                <Col>
                  <img src={this.props.course.course_image} alt="placeholder"/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button>Buy Now</Button>
                </Col>
                <Col>
                  <Button>Add to Cart</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </App>
    );
  }
}

function mapStateToProps(state) {
  return{
    course: state.course
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);
