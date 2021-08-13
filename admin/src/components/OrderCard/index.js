import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  IconButton,
  Dialog,
  TextField,
  DialogActions,
  DialogTitle,
  DialogContent,
  Checkbox,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Buttons from "../Buttons";

export default function OrderCard(props) {
  const [otpDialog, setOtpDialog] = useState(false);
  const [packedDialog, setPackedDialog] = useState(false);

  const handleChange = (e) => {
    API.changeStatus(props.order._id, e.target.value);
  };

  return (
    <div className="order-table row justify-content-between border py-2 my-3 align-items-center">
      <Dialog open={otpDialog} onClose={() => setOtpDialog(false)}>
        <DialogTitle className="text-center">Confirmation</DialogTitle>
        <DialogContent>
          <TextField className="mb-3" label="OTP" />
          <br />
          <TextField label="Tracking URL" />
        </DialogContent>
        <DialogActions className="justify-content-evenly">
          <Buttons text="Send" onClick={() => setOtpDialog(false)} />
          <Buttons text="Exit" onClick={() => setOtpDialog(false)} />
        </DialogActions>
      </Dialog>
      <Dialog open={packedDialog} onClose={() => setPackedDialog(false)}>
        <DialogTitle className="text-center">Confirmation</DialogTitle>
        <DialogContent>
          <div className="text-center mb-4">
            <div className="mb-2">Upload the image of the packed product</div>
            <Buttons text="Upload" />
          </div>
          <div>
            <Checkbox />
            <span>
              I confirm that product is packed and is ready to be shipped
            </span>
          </div>
        </DialogContent>
        <DialogActions className="justify-content-evenly">
          <Buttons text="Confirm" onClick={() => setPackedDialog(false)} />
          <Buttons text="Exit" onClick={() => setPackedDialog(false)} />
        </DialogActions>
      </Dialog>
      <div className="order-id col-1">
        <div onClick={() => setPackedDialog(true)}>{props.order.orderNo}</div>
      </div>
      <div className="username col-2">
        <div>{props.order.user && props.order.user.username}</div>
      </div>
      <div className="placedOn col-1">
        <div>{new Date(props.order.placedOn).toDateString()}</div>
      </div>
      <div className="total col-1">
        <div>{props.order.totalPrice}</div>
      </div>
      <div className="slot col-1">
        <div>{props.order.timeSlotType}</div>
      </div>
      <div className="status col-2">
        <FormControl>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={props.order.status}
            onChange={handleChange}
            label="Status"
          >
            <MenuItem value="OEDER PLACED">Order Placed</MenuItem>
            <MenuItem value="PACKED">Packed</MenuItem>
            <MenuItem value="ON THE WAY">On The Way</MenuItem>
            <MenuItem value="COMPLETED">Delivered</MenuItem>
            <MenuItem value="CANCELLED">Cancelled</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="delivered-at col-1">
        <div>
          {props.order.deliveredOn
            ? new Date(props.order.deliveredOn).toDateString()
            : "-"}
        </div>
      </div>
      <div className="otp col-1">
        <a style={{ cursor: "pointer" }} onClick={() => setOtpDialog(true)}>
          Send OTP
        </a>
      </div>
      <div className="detail col-1">
        <div>
          <Link to={`/orderdetails/${props.order._id}`}>
            <IconButton>
              <MoreVert />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
