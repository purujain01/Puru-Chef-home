import React from "react";
import API from "../utils/API";
import Card from "../components/Card";

const Style = {
  divWrapper: { minHeight: "100vh" },
  margin: { margin: "1rem" },
  button: { alignContent: "center", backgroundColor: "#dc2525" },
  maxWidth: { maxWidth: "90%" },
  widthHeight: { maxWidth: "350px", height: "220px" },
};

function OrderDetails(props) {
  const [order, setOrder] = React.useState({});

  React.useEffect(() => {
    console.log(props.match);
    API.getOneOrder(props.match.params.orderId)
      .then((dbOrder) => {
        setOrder(dbOrder.data);
        console.log(dbOrder.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ms-4 mt-4" style={Style.divWrapper}>
      <h2>Order Details</h2>
      {!order ? null : (
        <div className="orderDetails">
          <div style={Style.margin}>
            <div className="details">
              <div className="row mb-3">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ml-3">
                  <span className="p-0 mb-3">
                    Order Number: #{order.orderNo}
                  </span>
                  <br />

                  <span className="p-0 mb-3 ">
                    Placed By: {order.user && order.user.username}
                  </span>
                  <br />

                  {!order.placedOn ? null : (
                    <div>
                      <span className="p-0 mb-3">
                        Placed On: {new Date(order.placedOn).toDateString()}
                      </span>
                      <br />
                    </div>
                  )}

                  {!order.timeSlot ? null : (
                    <div>
                      <span className="p-0 mb-3">
                        Estimated Dilevary: {order.timeSlot}
                      </span>
                      <br />
                    </div>
                  )}

                  {order.status === "COMPLETED" ? (
                    <div>
                      <span className="p-0 mb-3">
                        Dilevered On: {order.deliveredOn}
                      </span>
                      <br />
                    </div>
                  ) : null}
                </div>

                <div className="col ml-3">
                  <span className="p-0 mb-3">
                    Status: <span>{order.status}</span>
                  </span>
                  <br />

                  {order.status === "CANCELLED" ? (
                    <span className="p-0 mb-3">
                      Reason:
                      {order.paymentStatus === "pending"
                        ? " Cancelled by user before completing."
                        : order.paymentStatus === "failed"
                        ? order.paymentMethod === "Cash On Delivery"
                          ? " Cancelled by user after completing with cash on delivery."
                          : " Cancelled due to payment faliure."
                        : " Canelled by user after completing payment using " +
                          order.paymentMethod}
                    </span>
                  ) : order.status === "ON THE WAY" ? (
                    <span className="p-0 mb-3">
                      Payment Method: {order.paymentMethod}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            {order.address ? (
              <div
                className="orderDetailCard"
                border="light"
                style={Style.maxWidth}
              >
                <h4 className="orderDetailHeading">Shipping Address</h4>
                <br />
                <div className="text-dark p-0 m-0">
                  <span className="d-block font-bold font-weight-bold">
                    {order.address.username}
                  </span>
                  <span className="d-block">{order.address.address1}</span>
                  <span className="d-block">{order.address.address2},</span>
                  <span className="d-block">{order.address.towncity}</span>
                  <span className="d-block">{order.address.city}</span>
                  <span className="d-block">{order.address.landmark}</span>
                  <span className="d-block">{order.address.state}</span>
                  <span className="d-block">{order.address.pincode}</span>
                  <span className="d-block">
                    Phone No1: {order.address.mobilenumber1}
                  </span>
                  {order.address.mobilenumber2 ? (
                    <span className="d-block">
                      Phone No2: {order.address.mobilenumber2}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ) : null}

            <h4>Ordered Products</h4>
            <div className="orderDetailProducts">
              {order.products &&
                order.products.map((product) => {
                  return (
                    <Card
                      key={product._id}
                      productId={product.product._id}
                      name={product.product.name}
                      image={product.product.pictures[0]}
                      price={product.product.price}
                      quantity={product.quantity}
                    />
                  );
                })}
            </div>
          </div>

          <div style={Style.widthHeight} className="orderDetailCard ml-auto">
            <h4 className="orderDetailHeading">ORDER SUMMARY</h4>
            <br />
            <p className="orderDetailTotalPrice">
              Items :{" "}
              <span className="orderDetailPrice">₹{order.itemsPrice}</span>
            </p>
            <p className="orderDetailTotalPrice">
              Delivery :{" "}
              <span className="orderDetailPrice">₹{order.deliveryPrice}</span>
            </p>
            <hr />
            <h4 className="orderDetailHeading">
              Order Total :{" "}
              <span className="orderDetailPrice">₹{order.totalPrice}</span>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
