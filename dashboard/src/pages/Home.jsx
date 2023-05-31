import React from 'react'
import {ContentRowMetrics} from '../components/ContentRowMetrics'
import {CategoriesInDb} from '../components/CategoriesInDb'
import { BrandsInDb } from '../components/BrandsInDb'

export const Home = () => {
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>

    <ContentRowMetrics/>
    

    <div className="row">
      <BrandsInDb/>

      <CategoriesInDb />
    </div>
  </div>
  )
}
