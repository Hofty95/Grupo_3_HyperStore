import React from 'react'
import PropTypes from 'prop-types'

export const UsersRow = ({id,email,name,surname,provider}) => {
  return (
    <tr>
    <th scope="row">{id}</th>
    <td>{email}</td>
    <td>{name}</td>
    <td>{surname}</td>
    <td>{provider}</td>
    <td>
        <div className="d-flex justify-content-around">
            <button className='btn btn-sm btn-danger' style={{ width: '30px' }} ><i className='fas fa-trash'></i></button>
        </div>
    </td>
</tr>
  )
}
UsersRow.propTypes = {
    id : PropTypes.number,
    email : PropTypes.string,
    name : PropTypes.string,
    surname : PropTypes.string,
    provider : PropTypes.number
}
