import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { CardDeck } from 'reactstrap';
import ShopCard from '../../client-side/components/shopCard';
import * as courseActions from '../../client-side/actions/courseActions';
import App from '../../App';

// How to put lecturer name in

class Shop extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      filteredCourses: props.courses,
      courses: props.courses
    }
  }

// THIS IS WRONG NEED IT TO COME FROM THE DATABASE WHERE THE SUBJECT JOIN TABLE IS USED
//   componentWillMount() {
//     this.props.actions.getAllCourses();
//   }

  handleChange(e) {
    this.setState({
      filteredCourses:  e.target.value === 'All'
      ? this.props.courses
      : this.props.courses.filter( (c) => (
        c.title === e.target.value
      ))
    })
  }

  render() {
    return (
      <App>
        <select  onChange={this.handleChange.bind(this)}>
          <option key={0}>All</option>
          {this.props.titles.map( (title, i) =>
            <option key={i}>{title}</option>
          )}
        </select>
        <CardDeck>
          {this.state.filteredCourses.map( (m, i) => (
              <ShopCard model={m} key={m.course_id}></ShopCard>
          ))}
        </CardDeck>
      </App>
    );
  }
}

function mapStateToProps(state) {
  return{
    courses: state.courses,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
    goToIndividualCourse: (payload) => dispatch ({type: 'GET_COURSE_SUCCESS', payload})
  }
}

Shop.defaultProps = {
  titles: ['Finance']
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);


/*

var model = [];
*/
