import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [productList, setProductList] = useState([]);
  const[allProducts, setAllProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

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
        <input type="text" className="search_box" value={searchText}
        onChange={(e)=> {
          setSearchText (e.target.value);
        }} />
        <button className="search_btn"
         onClick={()=>{
          // search functionality
          console.log(searchText);
          const searched = allProducts.filter((products)=>{
           return products.title.toLowerCase().includes(searchText.toLowerCase());
          })
          setProductList(searched);

        }}>
          Search
          </button>


        <button
          className="filter-btn"
          onClick={() => {
            const filtered = allProducts.filter(
              (p) => p.discountPercentage > 10
            );
            setProductList(filtered);
          }}
        >
          High Discount Items
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
