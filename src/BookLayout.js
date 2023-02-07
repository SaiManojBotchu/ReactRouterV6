import React from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get('n');
  return (
    <>
      <nav className='App-Nav'>
        <NavLink activeclasssname='active' to='/books/1'>
          Book1
        </NavLink>
        <br />
        <NavLink activeclasssname='active' to='/books/2'>
          Book2
        </NavLink>
        <br />
        <NavLink activeclasssname='active' to={`/books/${number}`}>
          Book{number}
        </NavLink>
        <br />
        <NavLink activeclasssname='active' to='/books/new'>
          NewBook
        </NavLink>
      </nav>
      {/* The <Outlet> renders the current route selected. */}
      <Outlet />
      <input
        type='number'
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}

export default BookLayout;
