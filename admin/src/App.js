import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Helmet } from "react-helmet";
import "./App.css";
import Sidebar from "./components/Sidebar";
import NewsLetter from "./pages/NewsLetter.js";
import Home from "./pages/Home.js";
import NewProduct from "./pages/NewProduct.js";
import AllOrders from "./pages/AllOrders.js";
import MenuBar from "./components/Menubar";
import Emergency from "./pages/Emergency";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";

import OrderDetails from "./pages/OrderDetails";

function App() {
  let user = window.sessionStorage.getItem("username");
  // let user = useSelector((state) => state.userSlice.user);
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   const abortCtrl = axios.CancelToken.source();
  //   const opts = { signal: abortCtrl.token };

  //   if (user) {
  //     dispatch(fetchCart(opts));
  //   }

  //   return () => abortCtrl.cancel();
  // }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chef At Home</title>
        <meta
          name="description"
          content="Get your cook it yourself meal right away!"
        />
        <meta name="keywords" content="food, ingredients, meal" />
      </Helmet>

      <Router>
        <Switch>
          <Route
            render={({ location }) => (
              <div>
                <MenuBar user={user} />
                <div className="d-flex">
                  <Sidebar />
                  <div
                    style={{
                      minWidth: "calc(100vw - 80px)",
                      marginLeft: "80px",
                      marginTop: "66px",
                    }}
                  >
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={300}
                      >
                        <Switch location={location}>
                          {/* Just add newpages route here */}
                          {/* Don't worry about sidebar and menubar. */}
                          <Route
                            exact
                            path="/"
                            render={(props) => <Home user={user} {...props} />}
                          />
                          <Route
                            exact
                            path="/newproduct"
                            render={(props) => (
                              <NewProduct user={user} {...props} />
                            )}
                          />
                          <ProtectedRoute
                            path="/newsletter"
                            component={NewsLetter}
                            user={user}
                          />
                          <ProtectedRoute
                            path="/allorders"
                            component={AllOrders}
                            user={user}
                          />
                          <ProtectedRoute
                            path="/emergency"
                            component={Emergency}
                            user={user}
                          />
                          <ProtectedRoute
                            path="/orderdetails/:orderId"
                            component={OrderDetails}
                            user={user}
                          />
                          <Route
                            exact
                            path="/login"
                            render={(props) => <Login {...props} user={user} />}
                          />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  </div>
                </div>
              </div>
            )}
          />
        </Switch>
      </Router>
    </>
  )
}

export default App;
