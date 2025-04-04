import React from 'react'
import { Link } from 'react-router'
import Logo from '~/components/Logo'
import mockOrders from '~/data/orders'

const SHIPPING_COST = 4
const OrdersPage = () => {

    return (
        <main className='w-screen bg-gray-50 '>

            <nav className="w-full flex justify-between p-4 container mx-auto pt-8 border-b border-gray-100">
                <Link to="/"><Logo /></Link>
                <div className="flex justify-between items-center gap-8 text-gray-400">
                    <Link to="/" className="text-lg font-semibold">Home</Link>
                    <Link to="/#products" className="text-lg font-semibold">Product</Link>
                    <Link to="/orders" className="text-lg font-semibold">Orders <p className="badge ">0</p></Link>
                    <Link to="/login" className="btn btn-primary font-semibold">
                        Sign In
                    </Link>
                </div>
            </nav>
            <h2 className='text-center text-3xl font-bold underline decoration-primary text-gray-700 underline-offset-4 decoration-4'>Orders</h2>
            <div className='flex flex-wrap gap-4 container mx-auto p-4 bg-gray-50 '>
                {mockOrders.map(order => (
                    <div key={order.orderId} className="card shadow-xl mb-8 text-gray-600 flex-1 min-w-md">
                        <div className="card-body">
                            <h2 className="card-title text-xl mb-4 text-gray-400">Order  <span className='text-gray-600'>{order.orderId}</span></h2>

                            {/* order Item */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 pb-6 border-b border-base-300">
                                <img
                                    src={order.product.image}
                                    alt={order.product.name}
                                    className="w-24 h-24 object-cover rounded-lg shadow"
                                />
                                <div className="flex-grow text-center sm:text-left">
                                    <h3 className="font-semibold">{order.product.name}</h3>
                                    <p className="text-sm text-gray-600">Quantity: 1</p>
                                </div>
                                <p className="font-semibold text-lg">
                                    ${order.product.unitPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>

                            {/* Cost Breakdown */}
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${order.product.unitPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>${SHIPPING_COST.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                                <div className="divider my-2"></div> {/* DaisyUI divider */}
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>${(order.totalAmount + SHIPPING_COST).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                ))}

            </div>
        </main>
    )
}

export default OrdersPage
