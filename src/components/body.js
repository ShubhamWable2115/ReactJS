import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [productList, setProductList] = useState([]);
  const[allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/carts");
    const json = await data.json();
    console.log(json);

    // flatten all products from all carts
    const products = json.carts.flatMap((cart) => cart.products);
    setProductList(products);
    setAllProducts(products);
  };

  
// if (productList.length === 0) {
//     return <Shimmer />;
//   }

  return productList.length ===0?<Shimmer/>:(
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = allProducts.filter(
              (p) => p.discountPercentage > 10
            );
            setProductList(filtered);
            setAllProducts(filtered);
          }}
        >
          High Discount Items
        </button>
        <button
          className="filter-btn"
          onClick={() => setProductList(allProducts)}
        >
          Show All
        </button>
      </div>

      <div className="res-container">
        {productList.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
