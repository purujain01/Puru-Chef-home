import React from "react";

export default function NewProduct(props) {
  return (
    <>
      <div className="container pt-3">
        <h2>Details of the product</h2>
        <div className="row">
          <div className="col-5">
            <div className="mb-4">
              <label>PRODUCT NAME</label>
              <br />
              <input className="w-100" type="name" />
            </div>
            <div className="mb-4">
              <label>COOKING TIME(IN MINUTES)</label>
              <br />
              <input className="w-100" type="name" />
            </div>
            <div className="mb-4">
              <label>SERVINGS AVAILABLE: </label>
              <br />
              <div className="d-flex justify-content-between">
                <div className="border p-3">1</div>
                <div className="border p-3">2</div>
                <div className="border p-3">4</div>
              </div>
            </div>
            <div className="mb-4">
              <label>INGREDIENTS</label>
              <br />
              <textarea className="w-100" rows={8}></textarea>
            </div>
            <div className="mb-4">
              <label>UPLOAD PRODUCT IMAGES</label>
              <br />
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <div className="mb-4">
              <label>PRODUCT PRICE</label>
              <br />
              <input className="w-100" type="name" />
            </div>
            <div className="mb-4">
              <label>STORAGE LIFE (IN DAYS)</label>
              <br />
              <input className="w-100" type="name" />
            </div>
            <div className="mb-4">
              <label>PRODUCT TYPE: </label>
              <br />
              <div className="d-flex justify-content-between">
                <div className="border p-3">Veg</div>
                <div className="border p-3">Non-Veg</div>
              </div>
            </div>
            <div className="mb-4">
              <label>PRODUCT DESCRIPTION</label>
              <br />
              <textarea className="w-100" rows={8}></textarea>
            </div>
            <div className="mb-4">
              <label>PRODUCT VIDEO LINK</label>
              <br />
              <input className="w-100" type="link" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
