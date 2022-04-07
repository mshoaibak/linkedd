import React from "react";
import Awards from "./Awards";

import Contactus from "./contactus/Contactus";
import Fixed from "./Fixed";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import ServicesPage from "./Services-page/ServicesPage";
import ServiseMain from "./ServiseMain";
import SuccessStory from "./SuccessStory";
import Ourcompany from "./ourcompany/Ourcompany";
import Hovercrad from "./hover/Hovercrad";
import Animate from "./Technology";
import Technology from "./Technology";

const All = () => {
  return (
    <>
      <Header />
      <Ourcompany />
      <Hovercrad />

      <Technology />
      <Fixed />
      <SuccessStory />
      <Awards />

      <Services />
      <Awards />
      <Contactus />

      <Footer />
      {/* <ServicesPage /> */}
    </>
  );
};

export default All;
