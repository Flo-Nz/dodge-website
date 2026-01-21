import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import IndexPage from "@/pages/index";
import EntrainementsPage from "@/pages/entrainements";
import ContactPage from "@/pages/contact";
import RejoindreIndexPage from "@/pages/rejoindre";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<EntrainementsPage />} path="/entrainements" />
        <Route element={<RejoindreIndexPage />} path="/rejoindre" />
      </Routes>
    </>
  );
};

export default App;
