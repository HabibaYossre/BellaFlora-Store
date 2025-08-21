import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const sort = searchParams.get('sort');

  return (
    <>
      <h2>Products Page</h2>
      <p>Category: {category}</p>
      <p>Sort: {sort}</p>
    </>
  );
}

export default Products;