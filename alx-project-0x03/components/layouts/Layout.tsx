import { LayoutProps } from "../../interfaces";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
