import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { MoreVert, Search } from "@material-ui/icons";

export default function AllOrders() {
  const [sort, setSort] = useState("None");
  const [slot, setSlot] = useState("Both");
  const [status, setStatus] = useState("All");

  return (
    <div className="orders mx-5 my-3">
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
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="OrderId">Order Id</MenuItem>
              <MenuItem value="Username">Username</MenuItem>
              <MenuItem value="PlacedOn">Placed On</MenuItem>
              <MenuItem value="Total">Total</MenuItem>
              <MenuItem value="DeliveredAt">Delivered At</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='d-flex'>
          <div>Status:</div>
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="OnTheWay">On The Way</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
              <MenuItem value="Canceled">Canceled</MenuItem>
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
              <MenuItem value="Both">Both</MenuItem>
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Evening">Evening</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="d-flex align-items-center border border-rounded">
          <InputBase
            placeholder="Search Order"
            style={{ paddingLeft: "10px" }}
          />
          <IconButton>
            <Search />
          </IconButton>
        </div>
      </div>
      <div className='mt-5'>
        <div className='order-table row justify-content-between fw-bold'>
          <div className='order-id col-1'>
            <div>Order Id</div>
          </div>
          <div className='username col-2'>
            <div>Username</div>
          </div>
          <div className='placed on col-2'>
            <div>Placed On</div>
          </div>
          <div className='total col-1'>
            <div>Total</div>
          </div>
          <div className='slot col-1'>
            <div>Slot</div>
          </div>
          <div className='status col-1'>
            <div>Status</div>
          </div>
          <div className='delivered-at col-2'>
            <div>Delivered At</div>
          </div>
          <div className='details col-1'>
            <div>Details</div>
          </div>
        </div>
        <div className='order-table row justify-content-between border py-2 my-3 align-items-center'>
          <div className='order-id col-1'>
            <div>#123456</div>
          </div>
          <div className='username col-2'>
            <div>Mr. Nobody</div>
          </div>
          <div className='placed on col-2'>
            <div>20-01-2021 3:45 pm</div>
          </div>
          <div className='total col-1'>
            <div>100</div>
          </div>
          <div className='slot col-1'>
            <div>Morning</div>
          </div>
          <div className='status col-1'>
            <div></div>
          </div>
          <div className='delivered-at col-2'>
            <div>22-01-2021 10:45 am</div>
          </div>
          <div className='details col-1'>
            <div><IconButton><MoreVert /></IconButton></div>
          </div>
        </div>
        <div className='order-table row justify-content-between border py-2 my-3 align-items-center'>
          <div className='order-id col-1'>
            <div>#123456</div>
          </div>
          <div className='username col-2'>
            <div>Mr. Nobody</div>
          </div>
          <div className='placed on col-2'>
            <div>20-01-2021 3:45 pm</div>
          </div>
          <div className='total col-1'>
            <div>100</div>
          </div>
          <div className='slot col-1'>
            <div>Morning</div>
          </div>
          <div className='status col-1'>
            <div></div>
          </div>
          <div className='delivered-at col-2'>
            <div>22-01-2021 10:45 am</div>
          </div>
          <div className='details col-1'>
            <div><IconButton><MoreVert /></IconButton></div>
          </div>
        </div>
        <div className='order-table row justify-content-between border py-2 my-3 align-items-center'>
          <div className='order-id col-1'>
            <div>#123456</div>
          </div>
          <div className='username col-2'>
            <div>Mr. Nobody</div>
          </div>
          <div className='placed on col-2'>
            <div>20-01-2021 3:45 pm</div>
          </div>
          <div className='total col-1'>
            <div>100</div>
          </div>
          <div className='slot col-1'>
            <div>Morning</div>
          </div>
          <div className='status col-1'>
            <div></div>
          </div>
          <div className='delivered-at col-2'>
            <div>22-01-2021 10:45 am</div>
          </div>
          <div className='details col-1'>
            <div><IconButton><MoreVert /></IconButton></div>
          </div>
        </div>
      </div>
    </div>
  );
}
