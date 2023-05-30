import React from 'react'
import { UsersRow } from './UsersRow'
import PropTypes from 'prop-types'

export const UsersTable = ({users}) => {
  return (
    <>
    <div className='d-flex justify-content-between'>
      <h4>Lista de usuarios</h4>
    </div>
    <hr />

    <div className='table-responsive'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Proveedor</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <UsersRow
              key={index}
                {...user}
              />
            ))
          }

        </tbody>
      </table>
    </div>
  </>
  )
}
UsersTable.propTypes = {
    users : PropTypes.array
  }
