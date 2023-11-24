import React from "react";
import "./contentpage.css"; // Import your CSS file for styling

const ContentPage = () => {
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristiqueconsequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a ";
  const contentAbove =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristiqueconsequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. ";
  const contentUnder =
    "Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a ";
  return (
    <div>
        <div className="container">
      {/* Big image at the center top */}
      <img
        src={require("./image/logo.png")}
        alt="Top Image"
        className="topImage"
      />

      {/* View with gray background and content */}
      <div className="grayBackground">
        <p className="contentText">Lorem ipsum dolor sit asmet?</p>
        <p style={{ paddingLeft: 20, paddingRight: 20, fontSize: 14 }}>
          {content}
        </p>
      </div>

      {/* View with 3 child views */}
      <div className="threeChildView">
        {/* Child View 1 */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            marginTop: 0,
            marginRight: 15,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2 className="headerText">Lorem ipsum dolor sit asmet?</h2>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <img
              src={require("./image/cssicon.png")}
              alt="Child Image 1"
              style={{ width: 70, height: 70, marginRight: 10 }}
            />
            <p
              style={{
                fontSize: 14,
                textAlign: "left",
                marginTop: 0,
                fontSize: 14,
              }}
            >
              {contentAbove}
            </p>
          </div>
          <p style={{ textAlign: "left", marginTop: -10, fontSize: 14 }}>
            {contentUnder}
          </p>
        </div>

        {/* Child View 2 */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            marginTop: 0,
            marginRight: 15,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2 className="headerText">Lorem ipsum dolor sit asmet?</h2>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <img
              src={require("./image/htmlicon.png")}
              alt="Child Image 1"
              style={{ width: 70, height: 70, marginRight: 10 }}
            />
            <p
              style={{
                fontSize: 14,
                textAlign: "left",
                marginTop: 0,
                fontSize: 14,
              }}
            >
              {contentAbove}
            </p>
          </div>
          <p style={{ textAlign: "left", marginTop: -10, fontSize: 14 }}>
            {contentUnder}
          </p>
        </div>

        {/* Child View 3 */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            marginTop: 0,
            marginRight: 10,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2 className="headerText">Lorem ipsum dolor sit asmet?</h2>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <img
              src={require("./image/urlicon.png")}
              alt="Child Image 1"
              style={{ width: 70, height: 70, marginRight: 10 }}
            />
            <p
              style={{
                fontSize: 14,
                textAlign: "left",
                marginTop: 0,
                fontSize: 14,
              }}
            >
              {contentAbove}
            </p>
          </div>
          <p style={{ textAlign: "left", marginTop: -10, fontSize: 14 }}>
            {contentUnder}
          </p>
        </div>
      </div>
      </div>

      <footer
       style={{
        position: "absolute",
        bottom: 0,
        width: window.innerWidth,
        borderTop: "1px solid black",
        
       
      }}
      >
        <p style={{ alignSelf: "flex-start", marginLeft: 76 }}>Copyright © 2021</p>
      </footer>
    </div>
  );
};

export default ContentPage;
