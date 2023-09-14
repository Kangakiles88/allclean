import React from "react";
import Header from "./header";
import Footer from "./footer";
import Hero from "../home/hero";
import Step from "../home/step";
import Feature from "../home/feature";
import Gallery from "../home/gallery";
import Description from "../home/description";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Description />
      <Gallery />
      <Step />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
