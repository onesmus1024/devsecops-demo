import React from 'react'
import products from '~/data/products'
import ProductCard from './ProductCard'

const ProductList = () => {
    
  return (
    <div className='flex flex-wrap gap-4 flex-1'>
      {products.map((product)=>(
        <ProductCard key={product.id} description={product.description} id={product.id} image={product.image} name={product.name} price={product.price} />
      ))}
    </div>
  )
}

export default ProductList
