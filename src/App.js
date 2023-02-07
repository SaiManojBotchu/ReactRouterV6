import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Blogs from './pages/Blogs';
import NoPage from './pages/NoPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
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
