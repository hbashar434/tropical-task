import Adventure from "./components/Adventure/Adventure";
import Banner from "./components/Banner/Banner";
import Bookings from "./components/Bookings/Bookings";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <main className="max-w-[1440px] bg-white">
      <Navbar />
      <Banner />
      <Adventure />
      <Explore />
      <Bookings />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
