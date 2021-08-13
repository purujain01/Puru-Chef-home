import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RateReviewIcon from "@material-ui/icons/RateReview";
import EditIcon from "@material-ui/icons/Edit";
import "./productHeader.css";

const ProductsHeader = (props) => {
  const styles = {
    largeIcon: {
      width: 100,
      height: 100,
    },
  };
  return (
    <>
      <div className="card">
        <div className="headerItem">
          <AddIcon className="svg_icons" fontSize="large" />
          <button className="productButton">Add new Product to the menu</button>
        </div>
      </div>
      <div className="card">
        <div className="headerItem">
          <RateReviewIcon className="svg_icons" fontSize="large" />
          <button className="productButton">Review Product Details</button>
        </div>
      </div>
      <div className="card">
        <div className="headerItem">
          <EditIcon className="svg_icons" fontSize="large" />
          <button className="productButton">Edit Product Details</button>
        </div>
      </div>
    </>
  );
};

export default ProductsHeader;
