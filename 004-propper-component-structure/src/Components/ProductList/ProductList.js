import React from "react";
import ProductCard from "./Card/Card";
import Photo from "./Card/photo.jpg";
import "./../../App.css";
import ProductContainer from "./ProductListContainer";

const productInfo = [
  { name: "Potato", price: 1000, photo: Photo, key: 1 },
  { name: "Potato", price: 1000, photo: Photo, key: 2 },
  { name: "Potato", price: 1000, photo: Photo, key: 3 },
  { name: "Potato", price: 1000, photo: Photo, key: 4 },
  { name: "Potato", price: 1000, photo: Photo, key: 5 },
  { name: "Potato", price: 1000, photo: Photo, key: 6 },
  { name: "Potato", price: 1000, photo: Photo, key: 7 },
  { name: "Potato", price: 1000, photo: Photo, key: 8 },
  { name: "Potato", price: 1000, photo: Photo, key: 9 }
];

var ProductListComponent = props => {
  var products = productInfo.map(item => {
    return (
      <ProductCard
        name={item.name}
        price={item.price}
        photo={item.photo}
        key={item.key}
      />
    );
  });
  return (
    <div className="container">
      <div className="row">
        {products}
        <ProductContainer />
      </div>
    </div>
  );
};

export default ProductListComponent;
