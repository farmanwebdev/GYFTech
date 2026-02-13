import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../Components/common/ScrollToTop";


export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop/>
    </>
  );
}
