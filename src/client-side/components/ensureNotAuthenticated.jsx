import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authenticationActions';
import {withRouter} from 'react-router';

class EnsureNotAuthenticated extends React.Component {
  componentDidUpdate() {
    if (this.props.isSignedIn) {
      this.props.router.push('/');
    }
  }

  render() {
    return this.props.children;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isSignedIn: localStorage.getItem('authorization')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EnsureNotAuthenticated));
