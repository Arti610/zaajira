import React from "react";

const ToastContainer = props => {
  return (
    <div
      id="mytoast"
      style={{
        backgroundColor: "rgb(255, 112, 67)",
        borderRadius: "50px",
        width: "15rem",
        padding: "10px",
        textAlign: "center",
        position: "fixed",
        top: "20%",
        right: "40%",
        zIndex: "5000"
      }}
    >
      {props.message}
    </div>
  );
};

export default ToastContainer;
