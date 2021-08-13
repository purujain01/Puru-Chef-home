/*
  this is our navigation bar     
*/
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import API from "../../utils/API";
import { fetchCart } from "../../redux/asyncRequests/cartRequest";
import { getUnreadNotificationCount } from "../../redux/asyncRequests/notificationRequest";
import { logoutUserSuccess } from "../../redux/slices/userSlice";
import { makeEmptyCart } from "../../redux/slices/cartSlice";
import Zang from "../../images/zang green(latest).png";
import "./style.css";

import COLOR from "../../Style";


const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: "#00442f",
    color: "white",
  },
}));

const Style = {
  jumbotron: { width: "100vw" },
  navbar: { width: "90%" },
  positionRelative: { position: "relative" },
  color: { color: "#00442f" },
};

function MenuBar(props) {
  const classes = useStyles();
  const cart = useSelector((state) => state.cartSlice.cart);
  //getting unread notification from global state
  const UnreadNotificationCount = useSelector(
    (state) => state.notificationSlice.notifications.UnreadNotificationCount
  );
  const noOfItem = cart.products ? Object.keys(cart.products).length : null;
  let history = useHistory();
  let dispatch = useDispatch();
  const { user } = props;

  const logOut = () => {
    API.logout()
      .then((res) => {
        dispatch(logoutUserSuccess());
        //make cart clean
        dispatch(makeEmptyCart());
        API.removeAuthHeader();
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          swal({
            title: "Error",
            text: error.response.data.message,
            icon: "errror",
          });
        } else {
          swal({
            title: "Error",
            text: "Some Error Occured. Try Again!!",
            icon: "error",
          });
        }
      });
  };

  //run this whenever user change
  React.useEffect(() => {
    //call only if user is sigin
    if (user) {
      //to avoid error Can’t perform a React state update on an unmounted component.
      const abortCtrl = axios.CancelToken.source();
      const opts = { signal: abortCtrl.token };
      dispatch(getUnreadNotificationCount(opts));
      //if we not get Cached only call the function
      if (!cart.isCached) {
        dispatch(fetchCart(opts));
      }
      return () => abortCtrl.cancel();
    }
  }, [user]);
  return (
    <AppBar position="fixed" className="bg-white" style={{boxShadow:"none",borderBottom:"solid 2px black"}}>
      <Toolbar>
        <div className="flex-grow-1">
          <Link to="/" className="logo d-block w-25 h-75">
            <img src={Zang} className="zang w-25" />
          </Link>
        </div>

        {props.user ? (
          <Button
            onClick={(e) => {
              window.sessionStorage.removeItem("username");
              history.replace("/");
            }}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
        {props.user ? (
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        ) : null}
      </Toolbar>
    </AppBar>
  );
  // return (
  //   <Jumbotron fluid className="jumbotron fixed-top" style={Style.jumbotron}>
  //     <Navbar expand="lg" variant="light" className="menubar color-nav">
  //       <Link to="/" className="logo">
  //         <Navbar.Brand>
  //           <img src={Zang} alt="Zang" className="zang" alt="chef@home" />
  //         </Navbar.Brand>
  //       </Link>
  //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //       <Navbar.Collapse id="responsive-navbar-nav" style={Style.navbar}>
  //         <Nav className="ml-auto align-items-center">
  //           {user ? (
  //             <>
  //               <Nav.Link
  //                 className="navBarLogOut text-center"
  //                 id="navstyle2"
  //                 onClick={logOut}
  //                 href="#"
  //               >
  //                 LOGOUT
  //               </Nav.Link>
  //             </>
  //           ) : (
  //             <>
  //               <Nav.Link
  //                 className="navBarLogIn text-center"
  //                 id="navstyle2"
  //                 onClick={() => {
  //                   history.push("/login");
  //                 }}
  //               >
  //                 LOG IN
  //               </Nav.Link>

  //               <Nav.Link
  //                 className="navBarRegister text-center"
  //                 id="navstyle2"
  //                 onClick={() => {
  //                   history.push("/signup");
  //                 }}
  //               >
  //                 REGISTER
  //               </Nav.Link>
  //             </>
  //           )}

  //           <IconButton
  //             className="text-success"
  //             style={Style.color}
  //             aria-label="shopping cart"
  //             onClick={() => {
  //               history.push("/profile");
  //             }}
  //           >
  //             {props.user
  //               ? <Avatar className={classes.small} >{props.user.username[0]}</Avatar>
  //               : <AccountCircleIcon htmlColor="#00442f" />
  //             }
  //           </IconButton>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar>
  //   </Jumbotron>
  // );
}

export default MenuBar;
