import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ProductList = () => {
  const [product, setProduct] = useState(null);
  const { cartId, productId } = useParams();

  useEffect(() => {
    fetchCartDetails();
  }, [cartId, productId]);

  const fetchCartDetails = async () => {
    const data = await fetch(`https://dummyjson.com/carts/${cartId}`);
    const json = await data.json();

    // 🔥 Find specific product inside cart
    const selectedProduct = json.products.find(
      (p) => p.id === Number(productId)
    );

    setProduct(selectedProduct);
  };

  if (!product) return <Shimmer />;

  return (
    <div className="product-card">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width="150" />
      <p>Price: ₹{product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Discount: {product.discountPercentage}%</p>
    </div>
  );
};

export default ProductList;