import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router';
import Logo from '~/components/Logo';
import products from '~/data/products';

// Assuming you have your product data imported or passed as a prop
// Let's use one product from your mock data as an example
const sampleProduct = {
    id: 7,
    name: "4K Smart TV",
    description: "Ultra HD 55-inch smart TV with built-in streaming apps and voice control.",
    price: 599.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593784999539-01f1798309a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBzbWFydCUyMHR2fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    stock: 15,
    rating: 4.9,
};

// Define a fixed shipping cost for the example
const SHIPPING_COST = 5.00;

// --- CheckoutPage Component ---
// Takes the product to checkout as a prop
function CheckoutPage() {
    const location = useLocation();

    // 2. Use useMemo to efficiently create URLSearchParams only when location.search changes
    const queryParams = useMemo(() => {
        // location.search gives you the raw query string (e.g., "?query=react&page=1")
        return new URLSearchParams(location.search);
    }, [location.search]); // Dependency array ensures this runs only when search string changes

    // 3. Read specific query parameters using the .get() method
    const productId = queryParams.get('id');
    if (!productId) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl text-error">No product selected for checkout.</p>
            </div>
        );
    }
    const product = products.find(product => product.id == parseInt(productId))
    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl text-error">No product selected for checkout.</p>
            </div>
        );
    }
    const subtotal = product.price;
    const total = subtotal + SHIPPING_COST;
    
    const handlePlaceOrder = () => {
        // In a real application, this would trigger an API call,
        // process payment, update inventory, etc.
        console.log("Placing order for:", product);
        alert(`Order placed successfully for ${product.name}! Total: $${total.toFixed(2)}`);
        // Redirect or show success message
    };
    return (
        <main className='bg-white min-h-screen w-screen'>
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

            <div className="container mx-auto p-4 md:p-8 max-w-3xl">
                <h1 className="text-3xl font-bold mb-6 text-center underline decoration-primary text-gray-600 underline-offset-4">Checkout</h1>

                <div className="card shadow-xl mb-8 text-gray-600">
                    <div className="card-body">
                        <h2 className="card-title text-xl mb-4">Order Summary</h2>

                        {/* Product Item */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 pb-6 border-b border-base-300">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-24 h-24 object-cover rounded-lg shadow"
                            />
                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-600">Quantity: 1</p>
                            </div>
                            <p className="font-semibold text-lg">
                                ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>
                        </div>

                        {/* Cost Breakdown */}
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${SHIPPING_COST.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="divider my-2"></div> {/* DaisyUI divider */}
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Action Button */}
                <div className="text-center">
                    <button
                        className="btn btn-primary btn-wide" // DaisyUI button styles
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </main>
    );
}

export default CheckoutPage;

