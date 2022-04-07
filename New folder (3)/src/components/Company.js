import React from "react";

import Header from "./Header/index";
import Delivering from "./delevring/Delivering";
import Vision from "./vision/Vision";
import CoreValues from "./core-values/CoreValues";
import Service from "./service/Service";
import Makeus from "./makeus/Makeus";
import OurClient from "./our-client/OurClient";
import Contactus from "./contactus/Contactus";
import Footer from "./Footer/index";
import Navigation from "./Navigation";
export default function Company() {
  return (
    <>
      <Navigation />
      <Delivering />
      <Vision />
      <CoreValues />
      <Service />
      <Makeus />
      <OurClient />

      <Footer />
    </>
  );
}
