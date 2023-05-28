import React, { useEffect, useState } from "react";
import { CategoryCard } from './CategoryCard'
import { UseFetch } from "../hooks/UseFetch";

export const CategoriesInDb = () => {
  const [state, setState] = useState({
    loading: true,
    categories: [],
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/product/category')
    .then(response => {
      return response.json()
    })
      .then(({ ok, data }) => {
        setState({
          loading: false,
          categories : data,
        });
      })
      .catch(() => console.error);
  }, []);
  return (
    <div className="col-lg-6 mb-4">
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Categorias
        </h5>
      </div>
      <div className="card-body">
        <div className="row">
        {state.loading ? (
              <p>Cargando...</p>
            ) : (
              state.categories.map((category, index) => (
                <CategoryCard key={category.name + index} {...category} />
              ))
            )}
        </div>
      </div>
    </div>
  </div>
  )
}
