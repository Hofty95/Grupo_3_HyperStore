import React from "react";
import { useEffect, useState } from "react";
import { UseFetch } from "../../hooks/UseFetch";
import { prepareDataForValidation, useFormik } from "formik";
import validate from '../../validations/productAddValidations'

export const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [Gamas, setGamas] = useState([]);
  const [Brands, setBrand] = useState([]);

  useEffect(() => {
    UseFetch("/product/category")
      .then(({ ok, data }) => {
        const categories = data;
        ok && setCategories(categories);
      })
      .catch(() => console.error);
    UseFetch("/product/allBrands")
      .then(({ ok, data }) => {
        const Brands = data;
        ok && setBrand(Brands);
      })
      .catch(() => console.error);
    UseFetch("/product/allGamas")
      .then(({ ok, data }) => {
        const Gamas = data;
        ok && setGamas(Gamas);
      })
      .catch(() => console.error);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      discount: 0,
      description: "",
      specifications: "",
      gama: "",
      brand: "",
      categories: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate : validate
  });

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Agregar Producto </h4>
      </div>
      <hr />
      <form className="row" onSubmit={formik.handleSubmit}>
        <div className="col-12 mb-3">
          <label htmlFor="name" className="form-label">
            Nombre *
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {
            <small className="text-danger">{formik.errors.name}</small>
          }
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="chef" className="form-label">
            Gama *
          </label>
          <select className="form-control" name="gama" onChange={formik.handleChange}
            value={formik.values.gama}>
            <option hidden defaultValue value="">
              Seleccione...
            </option>
            {Gamas.map((gama, index) => (
              <option value={gama.id} key={index}>
                {gama.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="chef" className="form-label">
            Marca *
          </label>
          <select className="form-control" name="brand" onChange={formik.handleChange}
            value={formik.values.brand}>
            <option hidden defaultValue value="">
              Seleccione...
            </option>
            {Brands.map((brand, index) => (
              <option value={brand.id} key={index}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-12 mb-3">
          <label htmlFor="categories" className="form-label">
            Categoría *
          </label>
          {categories.map((category, index) => {
             return <div>
              <label htmlFor={`category${category.id}`}>{category.name}</label>
             <input
             id={`category${category.id}`}
              name="categories"
              type="checkbox"
              value={category.id}
              key={index}
              onChange={formik.handleChange}
              checked={formik.values.categories}
            />;
            </div>
          })}
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="price" className="form-label">
            Precio *
          </label>
          <input type="number" className="form-control" name="price" onChange={formik.handleChange}
            value={formik.values.price}/>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="discount" className="form-label">
            Descuento
          </label>
          <input
            type="number"
            className="form-control"
            name="discount"
            onChange={formik.handleChange}
            value={formik.values.discount}
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
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="specifications" className="form-label">
            Especificaciones *
          </label>
          <textarea
            className="form-control"
            name="specifications"
            style={{ resize: "none" }}
            onChange={formik.handleChange}
            value={formik.values.specifications}
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
            <label className="btn btn-success my-1" htmlFor="image">
              Cargar imagenes *
            </label>
            <button className="btn btn-dark my-1 " onClick={formik.handleReset}>
              Limpiar
            </button>
            <button className="btn btn-primary my-1" type="submit">
              Guardar
            </button>
          </div>
        </div>

        <div className="col-12"></div>
      </form>
    </>
  );
};
