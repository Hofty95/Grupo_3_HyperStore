import React, { useEffect, useState } from "react";
import { Metric } from "./Metric";

export const ContentRowMetrics = () => {

  const [state, setState] = useState({
    product:{
      title: "Productos",
      color: "primary",
      value: 0,
      icon: "fa-laptop-code",
    },
    sales:{
      title: "Ventas",
      color: "success",
      value: 0,
      icon: "fa-cart-plus",
    },
    users:{
      title: "Usuarios",
      color: "warning",
      value: 0,
      icon: "fa-user",
    }
  })

  useEffect(() => {
    // el pedido por fetch
    fetch('http://localhost:3000/api/admin/metrics')
    .then(response => {
      return response.json()
    })
    .then(({ok,data}) =>{
      if(ok){
        const {totalProducts, totalOrders, totalUsers} = data
        setState({
          product : {
            ...state.product,
            value : totalProducts
          },
          sales : {
            ...state.sales,
            value : totalOrders
          },
          users : {
            ...state.users,
            value : totalUsers
          }
        })
      }
      
    }).catch(error => console.error)
   
  }, []);

  return (
    <div className="row">
      <Metric {...state.product}/>
      <Metric {...state.sales}/>
      <Metric {...state.users}/>
    </div>
  );
};
