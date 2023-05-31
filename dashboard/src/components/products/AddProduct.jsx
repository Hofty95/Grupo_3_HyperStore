import React from 'react'
import { useEffect, useState } from "react";

export const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const [Gamas, setGamas] = useState([]);
    const [Brands, setBrand] = useState([]);
  
  
    return (
      <>
            <div className='d-flex justify-content-between'>
  
        <h4>Agregar Producto </h4>
        </div>
        <hr />
        <form className="row">
          <div className="col-12 mb-3">
            <label htmlFor="name" className="form-label">
              Nombre *
            </label>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="chef" className="form-label">
              Gama *
            </label>
            <select 
              className="form-control" 
              name="gama"
               
              >
             <option hidden defaultValue value="">Seleccione...</option>
                {
                  Gamas.map((gama, index) => (
                    <option value={gama} key={index}>{gama}</option>
                  ))
                }
              </select>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="chef" className="form-label">
              Marca *
            </label>
            <select 
              className="form-control" 
              name="brand"
               
              >
             <option hidden defaultValue value="">Seleccione...</option>
                {
                  Brands.map((brand, index) => (
                    <option value={brand} key={index}>{brand}</option>
                  ))
                }
              </select>
          </div>
          <div className="col-12 col-md-12 mb-3">
            <label htmlFor="category" className="form-label">
              Categoría *
            </label>
                {
                  categories.map((category)=>{
                    {category.name}
                    <input type="checkbox" value={category.id} />
                  })
                }
                
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="price" className="form-label">
              Precio *
            </label>
            <input 
            type="number" 
            className="form-control" 
            name="price" 
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="discount" className="form-label">
              Descuento
            </label>
            <input 
            type="number" 
            className="form-control" 
            name="discount" 
            defaultValue = {0}
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="description" className="form-label">
              Descripción *
            </label>
            <textarea
              className="form-control"
              name="description"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="description" className="form-label">
              Especificaciones *
            </label>
            <textarea
              className="form-control"
              name="description"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="col-12 mb-3">
                    
                      <input
                          className="form-control"
                          type="file"
                          name="image"
                          id="image"
                          hidden
                      />
                      <div className="d-flex align-items-center justify-content-around">
                      <label className="btn btn-success my-1" htmlFor="image" >
                          Cargar imagenes *
                      </label>
                      <button className="btn btn-dark my-1 " type="reset" >
                          Limpiar
                      </button>
                      <button className="btn btn-primary my-1" type="submit" disabled>
                          Guardar
                      </button>
                      
                      </div>
                  
                      </div>
  
                  <div className="col-12">
  
                  </div>
  
        </form>
      </>
    );
}
