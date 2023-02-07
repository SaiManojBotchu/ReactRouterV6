import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav className='App-Nav'>
        <NavLink activeClasssName='active' to='/'>
          Home
        </NavLink>
        <br />
        <NavLink activeClasssName='active' to='/blogs'>
          Blogs
        </NavLink>
        <br />
        <NavLink activeClasssName='active' to='/contact'>
          Contact
        </NavLink>
        <br />
      </nav>
      {/* The <Outlet> renders the current route selected. */}
      <Outlet />
    </>
  );
}

export default Layout;
