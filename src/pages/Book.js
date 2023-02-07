import React from 'react';
import { useParams } from 'react-router-dom';

function Book() {
  // useParams() - returns an object that has key as id
  const { id } = useParams();

  return <h1>Book {id}</h1>;
}

export default Book;
