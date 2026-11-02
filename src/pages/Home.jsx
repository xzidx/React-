import { useState, useEffect } from "react";


function Home() {
    const [products, setProducts] = useState([]);
    async function fetchData() {
        const response = await fetch("/data/products.json");
        const data = await response.json();
        
        setProducts(data.products);
        
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
          <h1>Our Product</h1>
          {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
        </div>
  );
}

export default Home;