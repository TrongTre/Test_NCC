import React from "react";

const Menu = () => {
  return (
    <div
      style={{
        backgroundColor: "#191718",
        width: "60%",
        height: window.innerWidth / 2,
      }}
    >
      <div>
        <p
          style={{
            fontSize: 16,
            textAlign: "left",
            marginLeft: 0,
            color: "white",
            fontWeight: "600",
            marginLeft: 10,
          }}
        >
          Home
        </p>
        <div
          style={{
            borderBottom: "1px solid white",
            width: "100%",
            marginLeft: 0,
            marginTop: -5,
          }}
        ></div>
      </div>

      <div>
        <p
          style={{
            fontSize: 16,
            textAlign: "left",
            marginLeft: 0,
            color: "white",
            fontWeight: "600",
            marginLeft: 10,
          }}
        >
          Services
        </p>
        <div
          style={{
            borderBottom: "1px solid white",
            width: "100%",
            marginLeft: 0,
            marginTop: -5,
          }}
        ></div>
      </div>

      <div>
        <p
          style={{
            fontSize: 16,
            textAlign: "left",
            marginLeft: 0,
            color: "white",
            fontWeight: "600",
            marginLeft: 10,
          }}
        >
          News
        </p>
        <div
          style={{
            borderBottom: "1px solid white",
            width: "100%",
            marginLeft: 0,
            marginTop: -5,
          }}
        ></div>
      </div>

      <div>
        <p
          style={{
            fontSize: 16,
            textAlign: "left",
            marginLeft: 0,
            color: "white",
            fontWeight: "600",
            marginLeft: 10,
          }}
        >
          Blog
        </p>
        <div
          style={{
            borderBottom: "1px solid white",
            width: "100%",
            marginLeft: 0,
            marginTop: -5,
          }}
        ></div>
      </div>

      <div>
        <p
          style={{
            fontSize: 16,
            textAlign: "left",
            marginLeft: 0,
            color: "white",
            fontWeight: "600",
            marginLeft: 10,
          }}
        >
          Contact
        </p>
        <div
          style={{
            borderBottom: "1px solid white",
            width: "100%",
            marginLeft: 0,
            marginTop: -5,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Menu;
