import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <main className="max-w-[1440px] bg-white">
      <Navbar />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
