import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function BookLayout() {
  return (
    <>
      <nav>
        <NavLink activeclasssname='active' to='/books/1'>Book1</NavLink>
        <br />
        <NavLink activeclasssname='active' to='/books/2'>Book2</NavLink>
        <br />
        <NavLink activeclasssname='active' to='/books/new'>NewBook</NavLink>
      </nav>
      {/* The <Outlet> renders the current route selected. */}
      <Outlet />
    </>
  );
}

export default BookLayout;
