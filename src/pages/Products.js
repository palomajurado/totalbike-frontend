import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:1337/products");
    console.log(res.data);

    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (products.lenght == 0) return "NO hay productos";

  return products.map((product) => {
    return (
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <img
            className="img-fluid "
            width={70}
            src={"http://localhost:1337" + product.img.url}
            alt="bike"
          />
          <div>
            <h1>{product.title}</h1>
            <span>S/.{product.price}</span>
          </div>
        </div>
      </div>
    );
  });
};

export default Products;
