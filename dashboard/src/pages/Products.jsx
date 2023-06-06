import React from 'react'
import { useEffect, useState } from "react";
import { AddProduct } from '../components/products/AddProduct';
import { ProductsTable } from '../components/products/ProductsTable';
import { UseFetch } from '../hooks/UseFetch';

export const Products = () => {
  const [state, setState] = useState({
    loading: true,
    products: [],
    pages : null,
    currentPage : null
  });

  useEffect(() => {
    UseFetch('/product/results')
      .then(({ok, data}) => {
        ok &&
        setState({
          loading : false,
          products : data.products,
          pages : data.pages,
          currentPage : data.currentPage
        })
      })
      .catch(() => console.error)
  }, []);

  const handleGetPage = (page) => {
    UseFetch(`/product/results?page=${page}`)
    .then(({ok, data}) => {
      ok &&
      setState({
        loading : false,
        products : data.products,
        pages : data.pages,
        currentPage : data.currentPage
      })
    })
    .catch(() => console.error)
  }

  return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-7">
              <ProductsTable 
              products = {state.products}
              pages = {state.pages}
              currentPage = {state.currentPage}
              handleGetPage ={handleGetPage}
              />
            </div>
            <div className="col-12 col-md-5">
              <AddProduct />
            </div>
          </div>
        </div>
      </div>
  );
}
