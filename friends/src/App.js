import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import LoginForm from '../src/component/LoginForm';
import Friends from '../src/component/Friends';
import AddNewFriend from './component/AddNewFriend';
import './App.css';


export function App(props) {
  const onLogout = () => {

    localStorage.clear();

    props.history.replace('/');
  };

  return (
    <div className='container'>
      <nav className='nav-items'>

        <div className='anchor'>
          <NavLink exact to='/api/login'>Login</NavLink>
        </div>

        <div className='anchor'>
          <NavLink to='/friends'>Friends</NavLink>
        </div>

        <div className='anchor'>
          <NavLink to='/addnewfriend'>Add New Friend</NavLink>
        </div>
        
        <div>
          <button onClick={onLogout}>Logout</button>
        </div>

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
