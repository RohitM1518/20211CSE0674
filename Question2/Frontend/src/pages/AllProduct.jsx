import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

export const AllProduct = () => {

    const products = [
        {
            productid: 1,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image:"https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"
        },
        {
            productid: 2,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image:"https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 3,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image:"https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 4,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image:"https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 5,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image:"https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 6,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image:"https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 7,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image:"https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 8,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image:"https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },

    ]
  return (
    <div className=' grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-6'>
        {
            products.map((product) =>(
                <Link key={product.productid} to={`/getallproducts/${product.productid}`}>
                    <ProductCard pid={product.productid} name={product.name} price={product.price} rating={product.rating} available={product.availability} image={product.image}/>
                </Link>
            ))
        }
    </div>
  )
}
