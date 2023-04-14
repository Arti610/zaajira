import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Login = (props) => {
  const onChange = () => {};
  return (
    <div
      style={{
        width: "30%",
        marginRight: "5rem",
        borderRadius: "10px",
        lineHeight: "3rem",
      }}
    >
      <div
        style={{
          width: "30vw",
          borderRadius: "10px",
        }}
      >
        <h4 style={{ textAlign: "center", padding: "35px 20px" }}>
          {props.heading}
        </h4>
        <div className="form" style={{ width: "100%" }}>
          <form action="#">
            <input
              type="text"
              placeholder="Company Name"
              style={{
                width: "90%",
                margin: "20px",
                borderRadius: "5px",
                padding: "10px 5PX",
                border: "none",
                backgroundColor: "rgb(234, 234, 234)",
              }}
              required
            />{" "}
            <input
              type="email"
              placeholder="Email or Phone"
              style={{
                width: "90%",
                margin: "20px",
                borderRadius: "5px",
                padding: "10px 5PX",
                border: "none",
                backgroundColor: "rgb(234, 234, 234)",
              }}
              required
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: " 90%",
                margin: "20px",
                borderRadius: "5px",
                padding: "10px 5PX",
                border: "none",
                backgroundColor: "rgb(234, 234, 234)",
              }}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              style={{
                width: " 90%",
                margin: "20px",
                borderRadius: "5px",
                padding: "10px 5PX",
                border: "none",
                backgroundColor: "rgb(234, 234, 234)",
              }}
              required
            />
            <input
              type="checkbox"
              name="remeber me"
              style={{ margin: "20px" }}
            />
            Remember Me
            <ReCAPTCHA
              style={{ margin: "0px 10%" }}
              sitekey="6LfsDoQlAAAAAO8TBcrbc5dDl7hDxg95RiMcQpDL"
              onChange={onChange}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "rgb(98, 68, 229)",
                width: "90%",
                padding: "15px 0",
                margin: "20px",
                color: "WHITE",
                border: "none",
                borderRadius: "5px",
              }}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
      <div className="textalign" style={{ textAlign: "center" }}>
        <span> {props.confirmation}</span>
        <a
          style={{
            width: "100%",
            textDecoration: "none",
            fontWeight: "bold",
            color: "rgb(139, 89, 229)",
          }}
          href="#"
        />
        <br />
        <a
          style={{
            width: "100%",
            textDecoration: "none",
            fontWeight: "bold",
            color: "rgb(139, 89, 229)",
            // margin: "0px 10%",
          }}
          href="#"
        >
          {props.back}
        </a>
      </div>
    </div>
  );
};

export default Login;
