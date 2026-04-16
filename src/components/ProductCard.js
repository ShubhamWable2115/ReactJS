const ProductCard = ({ product }) => {

  return (
    <div className="product-card">
      <img
        className="reslogo"
        src={product.thumbnail}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <h4>💰 ${product.price}</h4>
      <h4>🛒 Qty: {product.quantity}</h4>
      <h4>🏷️ {product.discountPercentage}% OFF</h4>
      <h4>Total: ${product.discountedTotal.toFixed(2)}</h4>
    </div>
  );
};

export default ProductCard;
