import { Outlet, useNavigation } from "react-router-dom";

import Header from "../components/header/Header";

import Footer from "../components/footer/Footer";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="container">
      {isLoading && <Loader />}
      <header>
        <Header />
      </header>

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
