import React from "react";
import { useSelector } from "react-redux";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Wrapper = ({ children }) => {
  const drawer = useSelector((state) => state.settings.drawer);

  return (
    <>
      <Header />
      <Drawer drawer={drawer} />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
