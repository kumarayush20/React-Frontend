import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    const url = "http://localhost:5050/employee/login";
    const obj = { name, email, password };
    axios
      .post(url, obj)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Employee Login Form</h1>
      <label for="name">Name</label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="pwd">Password</label>
      <input
        type="password"
        id="pwd"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default Login;

// to capture any data we use the hook useEffect().