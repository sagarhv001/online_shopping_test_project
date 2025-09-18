import Navbar from "../NavBar/Navbar";
import products from "../../productcatalog";

const ProductPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Navbar />
            <h3>Product Catalog</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
                {products.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <img src={product.ImageUrl} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                        <h3>{product.name}</h3>
                        <p>Price: ₹{product.price}</p>
                        <p>Category: {product.category}</p>
                        <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductPage;