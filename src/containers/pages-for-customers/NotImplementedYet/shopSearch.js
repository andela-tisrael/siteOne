import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { CardDeck } from 'reactstrap';
import ShopCard from '../../client-side/components/shopCard';
import * as courseActions from '../../client-side/actions/courseActions';

class Shop extends Component {
  componentWillMount() {
    this.props.actions.getAllCourses();
  }
  render() {
    return (
      <div className="App">
        <CardDeck>
          {this.props.courses.map(m =>
            <ShopCard model={m} key={m.course_id}></ShopCard>
          )}
        </CardDeck>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return{
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);


/*

var model = [];
*/
