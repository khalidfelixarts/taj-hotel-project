import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer color={"#ffe6c9"} />
    </div>
  );
};

export default layout;
