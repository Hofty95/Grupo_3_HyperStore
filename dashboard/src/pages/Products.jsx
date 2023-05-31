import React from 'react'
import { useEffect, useState } from "react";
import { AddProduct } from '../components/products/AddProduct';
import { ProductsTable } from '../components/products/ProductsTable';
import { UseFetch } from '../hooks/UseFetch';

export const Products = () => {
  const [state, setState] = useState({
    loading: true,
    products: [],
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/product/allProducts')
    .then(response => {
      return response.json()
    })
      .then(({ok, data}) => {
        ok &&
        setState({
          loading : false,
          products : data.products
        })
      })
      .catch(() => console.error)
  }, []);
  return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-7">
              <ProductsTable products = {state.products}/>
            </div>
            <div className="col-12 col-md-5">
              <AddProduct />
            </div>
          </div>
        </div>
      </div>
  );
}
