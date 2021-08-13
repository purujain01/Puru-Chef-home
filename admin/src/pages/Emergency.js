import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputBase,
  IconButton,
  Modal,
} from "@material-ui/core";
import { FilterRounded, Search } from "@material-ui/icons";
import API from "../utils/API";
import { Pagination } from "@material-ui/lab";
import OrderCard from "../components/OrderCard";

export default function Emergency(props) {
  const [sort, setSort] = useState("null");
  const [slot, setSlot] = useState("both");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  const [allOrders, setAllOrders] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    API.getAllOrders()
      .then((all) => {
        setAllOrders(all.data.orders);
        setCount(all.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    API.getAllOrders({ sort, slot, status, page, limit, query })
      .then((all) => {
        setAllOrders(all.data.orders);
        setCount(all.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort, slot, status, page, limit, query]);

  return (
    <div className="emergency mx-5 my-3">
      <h3 className="mb-4">Orders</h3>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div>Sort By: </div>
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              label="Sort"
            >
              <MenuItem value="null">None</MenuItem>
              <MenuItem value="orderNo">Order Id</MenuItem>
              <MenuItem value="createdAt">Placed On</MenuItem>
              <MenuItem value="totalPrice">Total</MenuItem>
              <MenuItem value="deliveredAt">Delivered At</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="d-flex">
          <div>Status:</div>
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="ORDER PLACED">Order Placed</MenuItem>
              <MenuItem value="PACKED">Packed</MenuItem>
              <MenuItem value="ON THE WAY">On The Way</MenuItem>
              <MenuItem value="COMPLETED">Delivered</MenuItem>
              <MenuItem value="CANCELLED">Cancelled</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="d-flex">
          <div>Slot: </div>
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              label="Slot"
            >
              <MenuItem value="both">Both</MenuItem>
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Evening">Evening</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="d-flex align-items-center border border-rounded">
          <InputBase
            placeholder="Search Order"
            style={{ paddingLeft: "10px" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <IconButton>
            <Search />
          </IconButton>
        </div>
      </div>
      <div className="mt-5 mb-4">
        <div className="order-table row justify-content-between fw-bold">
          <div className="order-id col-1">
            <div>Order Id</div>
          </div>
          <div className="username col-2">
            <div>Username</div>
          </div>
          <div className="placed on col-1">
            <div>Placed On</div>
          </div>
          <div className="total col-1">
            <div>Total</div>
          </div>
          <div className="slot col-1">
            <div>Slot</div>
          </div>
          <div className="status col-2">
            <div>Status</div>
          </div>
          <div className="deliveredAt col-1">
            <div>Delivered At</div>
          </div>
          <div className="otp col-1">
            <div>OTP</div>
          </div>
          <div className="detail col-1">
            <div>Details</div>
          </div>
        </div>
        {allOrders && allOrders.map((order) => <OrderCard order={order} />)}
      </div>
      {count > limit ? (
        <Pagination
          className="d-flex justify-content-center"
          count={
            count % limit === 0 ? count / limit : Math.floor(count / limit) + 1
          }
          page={page}
          onChange={(e, v) => setPage(v)}
        />
      ) : null}
    </div>
  );
}
