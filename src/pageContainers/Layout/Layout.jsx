import React, { Suspense, useState } from "react";
import IntlProvider from "../../i18n/IntlProvider";
import UpBox from "../../components/mainComponents/UpBox";
import CallMeBox from "../../components/mainComponents/CallMeBox";
import Header from "../../components/mainComponents/Header";
import Contacts from "../../components/mainComponents/Contacts";
import Footer from "../../components/mainComponents/Footer/Footer";
import { Outlet } from "react-router-dom";
import Loader from "../../components/additionalComponents/Loader";

const Layout = () => {
  const [appLang, setAppLang] = useState("ukr");
  return (
    <IntlProvider lang={appLang}>
      <UpBox />
      <CallMeBox />
      <Header appLang={appLang} changeAppLangFunction={setAppLang} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Contacts />
      <Footer />
    </IntlProvider>
  );
};

export default Layout;
