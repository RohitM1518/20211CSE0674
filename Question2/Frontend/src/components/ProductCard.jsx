import React from 'react'

const ProductCard = ({pid,name,price,available,rating,discount,image}) => {
  return (
    <div className=' bg-slate-100 p-5 rounded-lg '>
        <div className=' object-cover'>
            <img src={image} alt="" />
        </div>
        <div className=' flex justify-center'>
        <h2 className=' font-bold font-mono text-2xl'>{name}</h2>
        </div>
        <p className="product-price">Price: ${price}<br/>Discount: {discount}%</p>
        <p>Rating: {rating}/5.0</p>
        <p>Availability: {available ? "In Stock" : "Out of Stock"}</p>
    </div>
  )
}

export default ProductCard