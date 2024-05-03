import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { productid } = useParams()
    const [product, setProduct] = useState(null)
    const products = [
        {
            productid: 1,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image: "https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"
        },
        {
            productid: 2,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image: "https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 3,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image: "https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 4,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image: "https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 5,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image: "https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 6,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image: "https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 7,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image: "https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },
        {
            productid: 8,
            name: "IPhone 15",
            price: 10000,
            rating: 4.12,
            discount: 10,
            availability: "yes",
            image: "https://media.ldlc.com/ld/products/00/05/44/00/LD0005440098_2_0005440176_0005440261.jpg"

        },

    ]

    useState(() => {
        products.map((product) => {
            if (product.productid == productid) {
                return setProduct(product)
            }
        })
    }, [productid])
    return (
        <div>
            {
                product && <div className=' flex justify-center items-center flex-col gap-5'>
                    <div className=' object-cover'>
                        <img src={product.image} alt="" width={400} height={400}/>
                    </div>
                    <div className=' flex justify-center'>
                        <h2 className=' font-bold font-mono text-5xl'>{product.name}</h2>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <p className="product-price">Price: ${product.price}<br />Discount: {product.discount}%</p>
                        <p>Rating: {product.rating}/5.0</p>
                        <p>Availability: {product.availability ? "In Stock" : "Out of Stock"}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Product