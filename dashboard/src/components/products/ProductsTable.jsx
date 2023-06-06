import React from "react";
import PropTypes from "prop-types";
import { ProductsRow } from "./ProductsRow";

export const ProductsTable = ({ products, pages, currentPage, handleGetPage }) => {
  const paginator = []
  for (let i = 1; i <= pages; i++) {
    paginator.push(i)
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Lista de productos</h4>
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm">
            {
              currentPage != 1 && (
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous" onClick={() => handleGetPage(currentPage - 1)}>
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              )
              
            }
            {
              paginator.map(page =>(
                <li key={page} className={`page-item ${page === currentPage && 'active'}`}>
                <a className="page-link" href="#" onClick={() => handleGetPage(page)}>
                  {page}
                </a>
              </li>
              ))
            }
            {
              currentPage != pages && (
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next" onClick={() => handleGetPage(currentPage + 1)}>
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
              )
              
            }

          </ul>
        </nav>
      </div>
      <hr />

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Desc</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductsRow key={index} {...product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
ProductsTable.propTypes = {
  products: PropTypes.array,
  pages: PropTypes.number,
  currentPage: PropTypes.number,
  handleGetPage : PropTypes.func
};
