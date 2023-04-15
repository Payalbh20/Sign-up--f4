import React, { useState } from "react";

import "./Signup.css";

// import React from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [list, setList] = useState([]);

  const inputValue = (val) => {
    const name = val.target.name;
    const value = val.target.value;
    // console.log(name, value);
    setUserData({ ...userData, [name]: value });
  };

  const formSubmit = (val) => {
    val.preventDefault();

    //-----------------------------------------------------
    const inputError = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (userData.confirmPassword !== userData.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!userData.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }
    setFormError(inputError);

    //-----------------------------------------------------
    const newList = { ...userData, };
    console.log(list);
    setList([...list, newList]);
    // console.log(list);
    setUserData({ username: "", email: "", password: "", confirmPassword: "" });
    document.getElementById("error").innerHTML = "Successfully Signed Up!";
  };
  return (
    <>
      <div id="box">
        <header>
          <h1>Signup</h1>
        </header>
        <main>
          <form action="" onSubmit={formSubmit}>
            <label htmlFor="username">Full Name</label>
            <input type="text" value={userData.username} name="username" id="username" onChange={inputValue} placeholder="......" required />
            <hr />
            <label htmlFor="email">Email</label>
            <input type="email" value={userData.email} name="email" id="email" onChange={inputValue} placeholder="......" required />
            <hr />
            <label htmlFor="password">Password</label>
            <input type="password" value={userData.password} name="password" id="password" onChange={inputValue} placeholder="......" required />
            <p className="error-message">{formError.password}</p>
            <hr />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" onChange={inputValue} placeholder="......" required />
            <p className="error-message">{formError.confirmPassword}</p>
            <hr />
            <p id="error"></p>
            <button type="submit">Signup</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Signup;
