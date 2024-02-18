import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
