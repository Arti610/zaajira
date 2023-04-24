import React, { useState } from "react";
import ToastContainer from "../ToastContainer";
import "./AddUser.css";
const AddUser = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasselectedplan, sethasselectedplan] = useState(true);
  const addUser = () => {
    if (hasselectedplan) {
      setformval([...formval, { name: "", email: "", password: "" }]);
    } else {
      setIsVisible(!isVisible);

      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  // const handleClick = () => {
  //   setIsVisible(!isVisible);

  //   setTimeout(() => {
  //     setIsVisible(false);
  //   }, 3000);
  // };
  const [formval, setformval] = useState([
    { name: "", email: "", password: "" },
  ]);
  // const adduser = () => {
  //   setformval([...formval, { name: "", email: "", password: "" }]);
  // };
  const handleremove = (i) => {
    const newformval = [...formval];
    newformval.splice(i, 1);
    setformval(newformval);
  };
  const handleinput = (e, i) => {
    const newlst = [...formval];
    newlst[i][e.target.name] = [e.target.value];
    setformval(newlst);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ margin: "1rem 2rem " }}>
      {" "}
      {/* ------------------------------------------------------------ */}
      <div
        className="main"
        style={{
          margin: " 1rem 2rem 0rem 2rem",
          justifyContent: "space-between",
        }}
      >
        <div
          className="title"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>Create Users</h4>
          <div>
            {isVisible && <ToastContainer message="You don't have any plan" />}
            <button onClick={addUser}>ADD USER+</button>
          </div>
        </div>
        <hr />
      </div>
      <form action="#" onSubmit={onSubmit}>
        {formval.map((item, i) => (
          <div
            key={i}
            className="form"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className=" input">
              <label htmlFor="Name">Name</label> <br />
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={item.name}
                onChange={(e) => handleinput(e, i)}
              />
            </div>
            <div className=" input">
              <label htmlFor="Email">E-mail</label> <br />
              <input
                type="email"
                placeholder="Enter Email"
                value={item.email}
                name="email"
                onChange={(e) => handleinput(e, i)}
              />
            </div>
            <div className="input">
              <label htmlFor="Password">Password</label> <br />
              <input
                type="password"
                placeholder="Enter Password"
                value={item.password}
                name="password"
                onChange={(e) => handleinput(e, i)}
              />
            </div>

            <button
              style={{
                backgroundColor: "rgb(234, 234, 234)",
                color: "red",
                letterSpacing: "1.5px",
              }}
              onClick={() => handleremove(i)}
            >
              REMOVE
              <i class="fa-solid fa-trash-can" />
            </button>
          </div>
        ))}
      </form>
      {/* <AddUser /> */}
      <div
        style={{
          marginBottom: "5rem",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button>SUBMIT EMPLOYES</button>
      </div>
      {/* -------------------------------------------------- */}
      {/* <button>Add</button>
      <form action="#" onSubmit={onSubmit}>
        {formval.map((item, i) => (
          <div
            key={i}
            className="form"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className=" input">
              <label htmlFor="Name">Name</label> <br />
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={item.name}
                onChange={(e) => handleinput(e, i)}
              />
            </div>
            <div className=" input">
              <label htmlFor="Email">E-mail</label> <br />
              <input
                type="email"
                placeholder="Enter Email"
                value={item.email}
                name="email"
                onChange={(e) => handleinput(e, i)}
              />
            </div>
            <div className="input">
              <label htmlFor="Password">Password</label> <br />
              <input
                type="password"
                placeholder="Enter Password"
                value={item.password}
                name="password"
                onChange={(e) => handleinput(e, i)}
              />
            </div>

            <button
              style={{
                backgroundColor: "rgb(234, 234, 234)",
                color: "red",
                letterSpacing: "1.5px",
              }}
              onClick={() => handleremove(i)}
            >
              REMOVE
              <i class="fa-solid fa-trash-can" />
            </button>
          </div>
        ))}
      </form> */}
    </div>
  );
};

export default AddUser;
