// Updated mock data with working and relevant images from Unsplash

const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "Noise-canceling over-ear headphones with deep bass and 40-hour battery life.",
      price: 79.99,
      category: "Electronics",
      // Image of over-ear headphones
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      stock: 50,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smartphone X Pro",
      description: "6.7-inch OLED display, 128GB storage, 48MP triple-camera system.",
      price: 999.99,
      category: "Electronics",
      // Image of a modern smartphone
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      stock: 30,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Men's Running Shoes",
      description: "Lightweight and breathable sneakers for maximum comfort and durability.",
      price: 59.99,
      category: "Footwear",
      // Image of running shoes
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      stock: 100,
      rating: 4.3,
    },
    {
      id: 4,
      name: "Gaming Laptop",
      description: "High-performance laptop with RTX 4060 GPU, 16GB RAM, and 1TB SSD.",
      price: 1499.99,
      category: "Computers",
      // Image of a gaming laptop
      image: "https://images.unsplash.com/photo-1603481588273-3f90a985fed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Women's Handbag",
      description: "Premium leather handbag with spacious compartments and elegant design.",
      price: 89.99,
      category: "Fashion",
      // Image of a woman's handbag
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4nMjBoYW5kYmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      stock: 75,
      rating: 4.6,
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      description: "RGB backlit, hot-swappable switches, and ergonomic design for gaming and work.",
      price: 129.99,
      category: "Accessories",
      // Image of a mechanical keyboard (RGB)
      image: "https://images.unsplash.com/photo-1618384887924-6b64f067476a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      stock: 40,
      rating: 4.7,
    },
    {
      id: 7,
      name: "4K Smart TV",
      description: "Ultra HD 55-inch smart TV with built-in streaming apps and voice control.",
      price: 599.99,
      category: "Electronics",
      // Image of a smart TV in a living room setting
      image: "https://images.unsplash.com/photo-1593784999539-01f1798309a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBzbWFydCUyMHR2fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      stock: 15,
      rating: 4.9,
    },
    {
      id: 8,
      name: "Fitness Tracker",
      description: "Waterproof activity tracker with heart rate monitor and sleep tracking.",
      price: 49.99,
      category: "Wearables",
      // Image of a fitness tracker/smartwatch on a wrist
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      stock: 60,
      rating: 4.4,
    },
    {
      id: 9,
      name: "Portable Power Bank",
      description: "20,000mAh fast-charging power bank with dual USB ports and LED display.",
      price: 39.99,
      category: "Accessories",
      // Image of a portable power bank
      image: "https://images.unsplash.com/photo-1588701109033-5d5c4139838d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      stock: 90,
      rating: 4.5,
    },
    {
      id: 10,
      name: "Leather Office Chair",
      description: "Ergonomic office chair with lumbar support and adjustable height.",
      price: 199.99,
      category: "Furniture",
      // Image of an ergonomic office chair
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      stock: 25,
      rating: 4.7,
    },
  ];
  
  export default products;