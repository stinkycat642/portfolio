import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

export default function PortfolioItem(props) {
  const item = props.item;
  return (
    <div>
      <Nav.Link href={"#" + item.title}>
        <h4 className="Cup" style={{ fontSize: "2.2rem" }}>
          {props.cup}
        </h4>
        <div className={"BackgroundDiv " + item.itemNum}>
          <div className="PortfolioItem">
            <h1 style={{ fontSize: "4rem" }}>{item.title}</h1>
            <h3 className="TextOutline" style={{ fontSize: "2.5rem" }}>
              <i>{props.keywords}</i>
            </h3>
            {/* <div className="Block"></div> */}
            <Image
              className="Image"
              src={props.src}
              rounded={true}
              roundedCircle={true}
              fluid={true}
            ></Image>
            {/* <img className="Image" src={props.src}/> */}
          </div>
        </div>
      </Nav.Link>
    </div>
  );
}
