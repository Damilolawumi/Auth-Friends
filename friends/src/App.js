import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import LoginForm from '../src/component/LoginForm';
import Friends from '../src/component/Friends';
import AddNewFriend from './component/AddNewFriend';


export function App(props) {
  const onLogout = () => {

    localStorage.clear();

    props.history.replace('/');
  };

  return (
    <div className='container'>
      <nav>
        <span>
          <NavLink exact to='/api/login'>Login</NavLink>
          <NavLink to='/friends'>Friends</NavLink>
          <NavLink to='/addnewfriend'>Add New Friend</NavLink>
        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route
          exact
          path='/api/login'
          component={LoginForm}
        />

        <Route
          exact
          path='/friends'
          render={props => {
            if (localStorage.getItem('payload')) {
              return <Friends {...props} />
            }
            return <Redirect to='/api/login' />
          }}
        />

        <Route
          exact
          path='/addnewfriend'
          render={props => {
            if (localStorage.getItem('payload')) {
              return <AddNewFriend {...props} />
            }
            return <Redirect to='/api/login' />
          }}
        />
      </main>
    </div>
  );
}


export default withRouter(App);
