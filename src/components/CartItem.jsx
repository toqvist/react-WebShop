import React from 'react'


export default function Item({ item }) {
  return (
    <>
      <h2>{item.name}</h2>
      <p>€{item.price}</p>
      <p>{item.quantity}</p>
    </>
  )
}
