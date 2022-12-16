import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import personas from "./assets/personas-square.png";
import redesign from "./assets/redesign-square.png";
import iterative from "./assets/delight-square.png";
import development from "./assets/development-square.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PortfolioItem from "./components/PortfolioItem";
import Project from "./components/Project.jsx";

// import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar className="Navbar" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#top">
            {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            StinkyKart 642 Deluxe
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#About Me" style={{ transition: "250ms" }}>About Me</Nav.Link>
            <Nav.Link href="#Personas">Personas</Nav.Link>
            <Nav.Link href="#Responsive">Responsive</Nav.Link>
            <Nav.Link href="#Iterative">Iterative</Nav.Link>
            <Nav.Link href="#Development">Development</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* INTRO HEADER/JUMBOTRON: Morgann, Profile Pic, Theme/Narrative Statement */}
      <div className="Header">
        <h1>
          <b>StinkyCat642</b>
        </h1>
        <h4>
          Hi! I'm a CS student at Brown. I love to play around and explore in
          life, and UIUX is a fun way through which I can express myself and my
          daily interests. Click on a <i>Grand Prix</i> below to race through
          some of my websites!
        </h4>
      </div>

      {/* 4 PORTFOLIO SUMMARY GRID: links to full below; image, title, keywords  */}

      <div className="Portfolio">
        <PortfolioItem
          cup="Flower Cup"
          src={personas}
          keywords="User Research, Interface Design,  Storyboards, Empathy "
          item={{ title: "Personas", itemNum: "item1", img: personas }}
        />
        <PortfolioItem
          cup="Leaf Cup"
          src={redesign}
          keywords="Accessibility Analysis, Responsive Design, Usability, Learnability"
          item={{ title: "Responsive", itemNum: "item2" }}
        />
        <PortfolioItem
          cup="Star Cup"
          src={iterative}
          keywords="App Design, Prototyping, Figma, Start-ups"
          item={{ title: "Iterative", itemNum: "item3" }}
        />
        <PortfolioItem
          cup="Banana Cup"
          src={development}
          keywords="React, Interactive, Data, State"
          item={{ title: "Development", itemNum: "item4" }}
        />
      </div>

      <div className="Divider"></div>
      <div className="Divider"></div>

      {/* FULL PORTFOLIOS SECTIONS: Problem, Research, Iterations, Conclusion */}
      {/* <div id="Personas">
        <h1>Personas</h1>
      </div> */}
      <Project
        id="Personas"
        p="p1"
        cup="Flower Cup"
        title="Personas: Washers & Dryers"
        url="https://stinkycat642.github.io/personas/"
        context="Personas are about understanding users better, allowing us to design products that induce better user experience. We interview real people and then create representative personas to model and understand interfaces from the user's perspective, not a designer's perspective."
        research="I chose to study my roommates' use of our SAMSUNG washer and dryer set; it was interesting to me because the interface was very modern, yet I discovered it lacked clarity and obfuscated common tasks and basic information like how long a cycle would take."
        iterations="N/A"
        conclusion="My roommate's and I unanimously took away that a simpler and more analog interface, at least in this use case, is more intuitive and more effective and efficient."
      ></Project>
      <div className="Divider"></div>

      <Project
        id="Responsive"
        p="p2"
        cup="Leaf Cup"
        title="Responsive Redesign: MCLINC"
        url="https://stinkycat642.github.io/redesign-fixed-file-paths/"
        context="Responsive designs are readable and usable for many types of people in many situations (e.g. screen size). I took my local library's website, and made the core information and end goal--getting an available title from a nearby library--immediately clear and accessible on all screens."
        research={
          <p>
            We both manually analyzed and used{" "}
            <a
              href="https://wave.webaim.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              WebAIM WAIVE
            </a>{" "}
            to detect accessibility problems on our redesign targets.
          </p>
        }
        iterations="I made low-fidelity prototypes of a book reservation page to scope out the essential information and functionality. Then, I worked them up into high-fidelity prototypes with details and design which directly translated into my final website."
        conclusion="Similar to in Personas, I think simpler, bigger designs are much more effective for a lot of situations, along with a clear information hierarchy that comes from size, spacing, and a color theme."
      ></Project>
      <div className="Divider"></div>

      <Project
        id="Iterative"
        p="p3"
        cup="Star Cup"
        title="Iterative Design: Delight Dating"
        url="https://bloatedpanda444.github.io/iter/"
        context="Here, our group of 4 went through the full process of mocking up a design solution to a chosen startup's concept. We chose Delight, a dating app for serious relationships. Its gimmick is that you can only match with one person at a time, and we added to this concept with compatibility scores and complete app design changes upon being matched."
        research="We took inspiration from other dating apps but strived to make our design simple, bright, and interesting. "
        iterations="From scratch, we sketched multiple designs, combined them into a lo-fi prototype, then finished by creating a full, interactive Figma prototype which we sent out for user testing."
        conclusion="My biggest takeaway was actually that we should've started our Figma with less total pages and complexity, since I think we did more work than we needed; I also took away a strong appreciation for the whole sketch, lo-fi, Figma design process and auto layouts."
      ></Project>
      <div className="Divider"></div>

      <Project
        id="Development"
        p="p4"
        cup="Banana Cup"
        title="Development"
        url="https://stinkycat642.github.io/development/"
        context="I developed a Tea Shop website to explore React pages that users can interact with to update values and interface with backend data."
        research="N/A"
        iterations="N/A"
        conclusion="Displaying a lot of structured information showed me the strength of flexbox, along with the ease and power of jsx for interactions and organizing data; I want to try to make websites that organize data from APIs in the future."
      ></Project>

      <div className="Divider"></div>

      {/* About */}
      <div id="About Me" className="About">
        <h1>More About Me</h1>
        <p style={{ margin: "0 20%"}}>
          This site is Mario Kart themed, and that's because I wanted to use
          this space to convey the playful, creative, expressive side of
          myself...Frontend design is a thought-filled, technical process, but
          to me its core is that it has an almost excessive abundance of choice.
          When you make something from scratch with tools that let you do so
          much, your ideals and experiences will always shine through. I'm
          curious what you glean of me from my work and if it matches how I see
          myself!
        </p>
        <p></p>
        <div>
          <h3>Contacts</h3>
          <p>stinkycat642 shan't be contacted</p>
        </div>
        <a href="#top">Back to Top!</a>
      </div>
    </div>
  );
}

export default App;
