import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Shop from './containers/pages-for-customers/shop';
import Cart from './containers/pages-for-customers/cart';
import UserAccount from './containers/pages-for-customers/account';
import CourseContainer from './containers/pages-for-customers/individualCourse';
import Courses from './containers/pages-for-customers/courses';
import Home from './containers/pages-for-customers/home';
import LogInSignUp from './containers/pages-for-customers/logInSignUp';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import configureStore from './client-side/stores/createStore';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

const store = configureStore();


// const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <div>
      <Route path="/" component = {App} exact>
        {/* <IndexRoute component={App}/> */}
      </Route>
      <Route path= "/shop" component={Shop}/>
      <Route path= "/cart" component={Cart}/>
      <Route path= "/userAccount" component={UserAccount}/>
      <Route path= "/logInSignUp" component={LogInSignUp}/>
      <Route path="/courses" component={Courses} />
      <Route  exact path= "/course" component={CourseContainer}  history={history}/>
      <Route path= "/home" component={Home}/>
      <Route path= "/course/:id" component={CourseContainer}/>
    </div>
  </Router>

</Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
