import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory, Redirect } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("zangbox@gmail.com");
  const [password, setPassword] = useState("ZangBox@2021");
  const history = useHistory();

  const handleClick = (e) => {
    if (email == "zangbox@gmail.com" && password === "ZangBox@2021") {
      window.sessionStorage.setItem("username", "zangbox");
      history.push("/emergency");
    }
  };
  return props.user ? (
    <Redirect to="/emergency" />
  ) : (
    <div className="container">
      <div
        className="login m-auto px-4 py-3 mt-5"
        style={{ maxWidth: "400px", border: "solid 1px grey" }}
      >
        <div className="text-center fs-2">Login</div>
        <Form className="my-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
