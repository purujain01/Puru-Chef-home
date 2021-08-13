import React from "react";
import Buttons from "../components/Buttons";

export default function newsLetter() {
  return (
    <div className="m-5">
      <h3 className="mb-5">Newsletter</h3>
      <div
        className="letter d-flex justify-content-between px-4 py-3 align-items-center my-3"
        style={{ maxWidth: "900px", border: "solid 1px rgb(0, 68, 47)" }}
      >
        <div>Mr. NoNody</div>
        <div>nobody@gmail.com</div>
        <div>1234567890</div>
        <div>
          <Buttons text="All Details" />
        </div>
      </div>
      <div
        className="letter d-flex justify-content-between px-4 py-3 align-items-center my-3"
        style={{ maxWidth: "900px", border: "solid 1px rgb(0, 68, 47)" }}
      >
        <div>Mr. NoNody</div>
        <div>nobody@gmail.com</div>
        <div>1234567890</div>
        <div>
          <Buttons text="All Details" />
        </div>
      </div>
      <div
        className="letter d-flex justify-content-between px-4 py-3 align-items-center my-3"
        style={{ maxWidth: "900px", border: "solid 1px rgb(0, 68, 47)" }}
      >
        <div>Mr. NoNody</div>
        <div>nobody@gmail.com</div>
        <div>1234567890</div>
        <div>
          <Buttons text="All Details" />
        </div>
      </div>
      <div
        className="letter d-flex justify-content-between px-4 py-3 align-items-center my-3"
        style={{ maxWidth: "900px", border: "solid 1px rgb(0, 68, 47)" }}
      >
        <div>Mr. NoNody</div>
        <div>nobody@gmail.com</div>
        <div>1234567890</div>
        <div>
          <Buttons text="All Details" />
        </div>
      </div>
    </div>
  );
}
