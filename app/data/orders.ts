import products from "./products";

const getProductDetails = (productId: number) => {
    const product = products.find(p => p.id === productId);
    return product ? { name: product.name, price: product.price, image: product.image } : { name: 'Unknown Product', price: 0, image: '' };
};

const getRandomPastDate = () => {
    const end = new Date();
    const start = new Date();
    start.setMonth(start.getMonth() - 6); // Go back 6 months
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString(); // Standard ISO format (e.g., "2023-10-27T10:30:00.000Z")
}

// Helper function to get a random element from an array
const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
const customerNames = ['Alice Smith', 'Bob Johnson', 'Charlie Brown', 'Diana Prince', 'Ethan Hunt'];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

// --- Generate Mock Orders ---
const mockOrders = [];
const numberOfOrders = 6; // How many orders to generate

for (let i = 0; i < numberOfOrders; i++) {
    const randomProductId = Math.floor(Math.random() * 10) + 1; // Ensure ID is between 1 and 10
    const productDetails = getProductDetails(randomProductId);
    const randomStatus = getRandomElement(statuses);
    const randomName = getRandomElement(customerNames);
    const randomCity = getRandomElement(cities);

    const order = {
        orderId: `ORD-${1001 + i}`, // Simple sequential ID
        orderDate: getRandomPastDate(),
        customer: {
            name: randomName,
            email: `${randomName.toLowerCase().replace(' ', '.')}@example.com`,
            // You could add a customerId if needed
        },
        shippingAddress: {
            street: `${100 + i} Main St`,
            city: randomCity,
            state: 'CA', // Example state
            zipCode: `${90000 + i}`,
            country: 'USA',
        },
        product: {
            productId: randomProductId,
            name: productDetails.name,
            image: productDetails.image,
            quantity: 1, // Constraint: only one product per order
            unitPrice: productDetails.price, // Price at the time of order
        },
        status: randomStatus,
        // Total amount is just the product price since quantity is 1
        // You could add shipping/tax here if needed
        totalAmount: productDetails.price,
        // Optional: Add tracking number if status is Shipped or Delivered
        trackingNumber: (randomStatus === 'Shipped' || randomStatus === 'Delivered') ? `TRK${786543 + i}` : null,
    };

    mockOrders.push(order);
}

export default mockOrders;