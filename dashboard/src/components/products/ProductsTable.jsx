import React from 'react'
import PropTypes from 'prop-types'
import { ProductsRow } from './ProductsRow'


export const ProductsTable = ({products}) => {
    return (
        <>
          <div className='d-flex justify-content-between'>
            <h4>Lista de productos</h4>
          </div>
          <hr />
    
          <div className='table-responsive'>
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
                {
                  products.map((product, index) => (
                    <ProductsRow
                    key={index}
                      {...product}
                    />
                  ))
                }
    
              </tbody>
            </table>
          </div>
        </>
      )
}
ProductsTable.propTypes = {
    products : PropTypes.array
  }