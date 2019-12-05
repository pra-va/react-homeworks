import React from "react";

const ProductNavigation = () => {
  return (
    <div className="App">
      <nav className="nav nav-pills nav-fill my-5">
        <a className="nav-item nav-link active m-3" href="/admin/new">
          New Product
        </a>
        <a className="nav-item nav-link active m-3" href="/admin/products/:id">
          Get Product ID
        </a>
      </nav>
    </div>
  );
};

export default ProductNavigation;
