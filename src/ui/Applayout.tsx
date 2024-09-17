import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";
import LineDivider from "./Linedivider";
import Footer from "../components/footer/Footer";

const AppLayout = () => {
  return (
    <div className="container">
      <header className="wrapper">
        <Header />
      </header>
      <LineDivider />

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
