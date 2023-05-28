import React from 'react'
import PropTypes from 'prop-types'

export const ProductsRow = ({id,name,price,discount}) => {
  return (
    <tr>
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{price}</td>
    <td>{discount}</td>
    <td>
        <div className="d-flex justify-content-around">
            <button className='btn btn-sm btn-success' style={{ width: '30px' }} ><i className='fas fa-edit'></i></button>
            <button className='btn btn-sm btn-danger' style={{ width: '30px' }} ><i className='fas fa-trash'></i></button>
        </div>
    </td>
</tr>
  )
}
ProductsRow.propTypes = {
    id : PropTypes.number,
    name : PropTypes.string,
    price : PropTypes.number,
    discount : PropTypes.number
}