import React from "react";
import Navigation from "./Navigation/index";
import Service from "./service/Service";
import Services from "./Services";
import Footer from "./Footer";
import ServicesPage from "./Services-page/ServicesPage";

export default function ServiseMain() {
  return (
    <>
      <Navigation />
      <ServicesPage />
      <Footer />
    </>
  );
}
