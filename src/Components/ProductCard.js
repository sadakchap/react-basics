import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded mb-4">
            <Link to={`products/${product.id}`}>
                <div style={{
                    'backgroundImage' : `url(${product.image})`
                }}
                className="w-full h-64 bg-cover"
                ></div>
            </Link>
            <div className="px-3 py-2">
                <h2 className="font-bold mb-2 text-xl">
                    <Link to={`products/${product.id}`}>
                        { product.name }
                    </Link>
                </h2>
                <div className="font-bold mb-1"> $ { product.price } </div>
                <div className="mb-1 text-xs"> { product.description } </div>
            </div>
            <Link className="w-full p-3 bg-blue-500 text-white flex justify-center" to={`products/${product.id}`}>
                View
            </Link>
            
        </div>
    )
}

export default ProductCard
