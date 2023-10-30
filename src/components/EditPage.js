import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function EditPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const obj1 = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5050/employee/update-employee/" + obj1.id)
      .then((res) => {
        if (res.status === 200) {
          setName(res.data.name);
          setPassword(res.data.password);
          setEmail(res.data.email);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [obj1.id]);
  const handleSubmit = () => {
    const url = "http://localhost:5050/employee/update-employee/" + obj1.id;
    const obj2 = { name, email, password };
    axios
      .put(url, obj2)
      .then((res) => {
        if (res.status === 200) {
          alert("Employee updated successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Employee Edit Form</h1>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={(e) => setName(e.target.value)}
        defaultValue={name}
      />
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        defaultValue={email}
      />
      <label for="pwd">Password</label>
      <input
        type="password"
        id="pwd"
        onChange={(e) => setPassword(e.target.value)}
        defaultValue={password}
      />
      <input type="submit" />
      <Link to="/view">View Page</Link>
    </form>
  );
}

export default EditPage;