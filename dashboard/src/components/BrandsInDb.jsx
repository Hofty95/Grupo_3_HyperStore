import React, { useEffect, useState } from "react";
import { CategoryCard } from './CategoryCard'

export const BrandsInDb = () => {
    const [state, setState] = useState({
        loading: true,
        brands: [],
      });
    
      useEffect(() => {
        fetch('http://localhost:3000/api/product/allBrands')
        .then(response => {
          return response.json()
        })
          .then(({ ok, data }) => {
            setState({
              loading: false,
              brands : data,
            });
          })
          .catch(() => console.error);
      }, []);
  return (
    <div className="col-lg-6 mb-4">
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Marcas
        </h5>
      </div>
      <div className="card-body">
        <div className="row">
        {state.loading ? (
              <p>Cargando...</p>
            ) : (
              state.brands.map((brand, index) => (
                <CategoryCard key={brand.name + index} {...brand} />
              ))
            )}
        </div>
      </div>
    </div>
  </div>
  )
}
