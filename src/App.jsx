import Adventure from "./components/Adventure/Adventure";
import Banner from "./components/Banner/Banner";
import Bookings from "./components/Bookings/Bookings";
import Destination from "./components/Destinations/Destinations";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <main className="max-w-[1512px] bg-white mx-auto px-2 md:px-4">
      <Navbar />
      <Banner />
      <Adventure />
      <Destination />
      <Explore />
      <Bookings />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
