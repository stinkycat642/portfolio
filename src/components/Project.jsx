import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export default function Project(props) {
  const [key, setKey] = React.useState("home");

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="ProjectContainer" id={props.id}>
      <Nav.Link href="#top" className={"Space SpaceLeft " + props.p}></Nav.Link>
      <div className="Project" id={props.title}>
        <h3 className="Cup">{props.cup}</h3>
        <h1>{props.title}</h1>
        <Button
          onClick={() => window.open(props.url)}
          style={{ margin: "0vw .5vh" }}
        >
          Explore the Site!
        </Button>
        {/* href={props.url} */}

        <Tabs
          //   activeKey={key}
          defaultActiveKey="Race 1: Context"
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="Race 1: Context" title="Race 1:      Context">
            {/* {lorem} */}
            <h5>{props.context}</h5>
          </Tab>
          <Tab eventKey="Race 2: Research" title="Race 2:       Research">
            {/* {lorem} */}
            <h5>{props.research}</h5>
          </Tab>
          <Tab eventKey="Race 3: Iterations" title="Race 3: Iterations">
            <h5>{props.iterations}</h5>
            {/* {lorem} */}
          </Tab>
          <Tab eventKey="Race 4: Conclusion" title="Race 4: Conclusion">
            <h5>{props.conclusion}</h5>
            {/* {lorem} */}
          </Tab>
        </Tabs>
      </div>
      <Nav.Link
        href="#top"
        className={"Space SpaceRight " + props.p}
      ></Nav.Link>
    </div>
  );
}
