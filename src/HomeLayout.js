import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <>
      <nav className='App-Nav'>
        <NavLink activeClassName='active' to='/' state='hi'>
          Home
        </NavLink>
        <br />
        <NavLink activeClassName='active' to='/books'>
          BookList
        </NavLink>
        <br />
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
