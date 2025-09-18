import Navbar from "../NavBar/Navbar";
import products from "../../productcatalog";
import { useState } from 'react';

const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };
    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productId);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    return prevCart.map(item =>
                        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                    );
                } else if (existingItem.quantity === 1) {
                    return prevCart.filter(item => item.id !== productId);
                } else {
                    return prevCart.filter(item => item.id !== productId);
                }
            } else {
                return prevCart;
            }
        });
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const isInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ paddingTop: '80px' }}>
            <Navbar totalItems={getTotalItems()} />
            <h3>Product Catalog</h3>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '10px', width: '100%', maxWidth: '400px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                            <img src={product.ImageUrl} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                            <h3>{product.name}</h3>
                            <p>Price: ₹{product.price}</p>
                            <p>Category: {product.category}</p>
                            <button style={{ backgroundColor: '#094e00ff', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => addToCart(product)}>Add to Cart</button>
                            {isInCart(product.id) && <button style={{ backgroundColor: '#850b18ff', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => removeFromCart(product.id)}>Remove from Cart</button>}
                        </div>
                    ))
                ) : (
                    <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No products found matching your search.</p>
                )}
            </div>
        </div>
    )
}

export default ProductPage;