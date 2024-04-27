// https://youtu.be/Ul3y1LXxzdU
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import BookRoutes from './BookRoutes';
import HomeLayout from './HomeLayout';
import './App.css';

function App() {
  const location = useLocation();
  // console.log(location.state);

  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        {/* if we have one route that is rendering out bunch of other routes then 
          we need to make sure to add "/*" to the end of the path 
          because we need to match anything that comes after the path */}
        <Route path='books/*' element={<BookRoutes />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
