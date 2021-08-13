import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./product.css";

const Product = ({ product }) => {
  return (
    <div className="card">
      <img className="bg-img" src={product.image} alt="Loading" />
      <div className="content">
        <table>
          <tbody>
            <tr className="row">
              <td className="td1">{product.name}</td>
              <td className="td2" id="productRating">
                {product.rating}
                <StarIcon id="star" fontSize="small" />
              </td>
            </tr>
            <tr className="row">
              <td className="td1" id="productRate">
                {" "}
                ₹{product.rate}
              </td>
              <td className="td2">
                <button id="removeButton">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
