// https://youtu.be/Ul3y1LXxzdU
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import BookRoutes from './BookRoutes';
import './App.css';

function App() {
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <nav className='App-Nav'>
        <NavLink activeclasssname='active' to='/' state='hi'>
          Home
        </NavLink>
        <br />
        <NavLink activeclasssname='active' to='/books'>
          BookList
        </NavLink>
        <br />
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* if we have one route that is rendering out bunch of other routes then 
        we need to make sure to add "/*" to the end of the path 
        because we need to match anything that comes after the path */}
        <Route path='/books/*' element={<BookRoutes />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <nav className='App-Nav'>
//         <NavLink activeClasssName="active" to='/'>Home</NavLink>
//         <br />
//         <NavLink activeClasssName="active" to='/blogs'>Blogs</NavLink>
//         <br />
//         <NavLink activeClasssName="active" to='/contact'>Contact</NavLink>
//         <br />
//       </nav>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/blogs' element={<Blogs />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='*' element={<NoPage />} />
//       </Routes>
//     </>
//   );
// }
