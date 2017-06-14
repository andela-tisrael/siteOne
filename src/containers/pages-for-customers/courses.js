import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { CardDeck } from 'reactstrap';
import ShopCard from '../../client-side/components/shopCard';
import * as courseActions from '../../client-side/actions/courseActions';
import App from '../../App';

// How to put lecturer name in

class Courses extends Component {
  constructor(props, context) {
    super(props);
    console.log(props);
    this.state = {
      filteredCourses: props.courses,
      courses: props.courses
    }
  }

// THIS IS WRONG NEED IT TO COME FROM THE DATABASE WHERE THE SUBJECT JOIN TABLE IS USED
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    console.log(this.props)
    return (
      <App>
        <CardDeck>
      {this.props.courses.map((m, i) => (
        <ShopCard model = {m} key={m.course_id}></ShopCard>
      ))}
        </CardDeck>
    </App>
  );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(courseActions.fetchCourses())
});

const mapStateToProps = state => ({
    courses: state.courses
});

// Courses.defaultProps = {
//   titles: ['Finance']
// }

export default connect(mapStateToProps, mapDispatchToProps)(Courses);


/*

 var model = [];
 */
