import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
} from "./components";

const App = () => {

  const [isActive, setIsActive] = useState("#");

  const changeNavActive = (navItem: string) => {
    setIsActive(navItem);
  } 


  return (
    <>
      <Header changeNavActive={changeNavActive} />
      <Nav isActive={isActive} changeNavActive={changeNavActive} />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
