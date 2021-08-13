import React from "react";
import Product from "./product";
import "./product.css";
import ProductsHeader from "./productsHeader";

const Products = () => {
  //Delete the arrays product and addToProduct its just for testing
  //this is for the testing purpose and to make this page dynamic we can get these data by server
  const product = [
    {
      _id: 1,
      image:
        "https://wallpapersdsc.net/wp-content/uploads/2016/09/Food-HD-Desktop.jpg",
      name: "Mountain",
      rating: 4.5,
      rate: 400,
    },
    {
      _id: 2,
      image:
        "https://wallpapersdsc.net/wp-content/uploads/2016/09/Food-HD-Desktop.jpg",
      name: "Mountain",
      rating: 4.5,
      rate: 400,
    },
    {
      _id: 3,
      image:
        "https://wallpapersdsc.net/wp-content/uploads/2016/09/Food-HD-Desktop.jpg",
      name: "Mountain",
      rating: 4.5,
      rate: 400,
    },
    {
      _id: 4,
      image:
        "https://wallpapersdsc.net/wp-content/uploads/2016/09/Food-HD-Desktop.jpg",
      name: "Mountain",
      rating: 4.5,
      rate: 400,
    },
    {
      _id: 5,
      image:
        "https://wallpapersdsc.net/wp-content/uploads/2016/09/Food-HD-Desktop.jpg",
      name: "Mountain",
      rating: 4.5,
      rate: 400,
    },
    {
      _id: 6,
      image:
        "https://wallpapersdsc.net/wp-content/uploads/2016/09/Food-HD-Desktop.jpg",
      name: "Mountain",
      rating: 4.5,
      rate: 400,
    },
  ];
  //this is for the testing purpose and to make this page dynamic we can get these data by server
  const addToProduct = [
    {
      _id: 1,
      image:
        "https://wallpapersdsc.net/wp-content/uploads/2016/09/Food-HD-Desktop.jpg",
      name: "Mountain",
      rating: 4.5,
      rate: 400,
    },
  ];
  return (
    <div className="productPage">
      <p className="mainTag">Products</p>
      <div className="grid-container">
        <ProductsHeader />
      </div>
      <p className="mainTag">Products</p>
      <div className="grid-container">
        {product.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
      <p className="mainTag">Add to Products</p>
      <div className="grid-container">
        {addToProduct.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
