import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

function NoPage() {
  const navigate = useNavigate();

  // To Navigate to a specific page
  // Here after 1sec we are again going to the home page
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
      // navigate(-1); // navigate back ontime
    }, 1000);
  }, [navigate]);

  return <h1>404</h1>;
  // return <Navigate to='/' />;
}

export default NoPage;
