import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({ name, description, id, image, price }: { name: string, description: string, id: number, image: string, price:number }) => {
    return (
        <div className='flex-1'>
            <div className="card  w-96 shadow-sm">
                <figure>
                    <img className='w-full aspect-video object-center object-cover' src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <p className="text-lg font-semibold text-gray-900">
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}
                        </p>
                        <Link to={"/checkout?id="+id} className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
