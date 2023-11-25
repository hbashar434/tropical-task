import img1 from "../../assets/Rectangle 25.png";
import img2 from "../../assets/Rectangle 27.png";
import img3 from "../../assets/Rectangle 26.png";

const reviews = [
  {
    image: img1,
    name: "Corey Korsgaard",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: img2,
    name: "Jakob Aminoff",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: img3,
    name: "Carla Press",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Testimonials = () => {
  return (
    <section>
      <p className="my-title inter text-center">Testimonials</p>
      <div className="container mx-auto grid md:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="max-w-md flex flex-col items-center w-full p-6 rounded-md lg:h-full lg:p-8 text-gray-800"
          >
            <img
              src={review.image}
              alt="reviewer-image"
              className="w-20 h-20 rounded-full dark:bg-gray-500"
            />
            <p className=" pt-3 border-b-2 border-blue-400 pb-[0.3rem] text-lg font-medium text-center inter">
              {review.name}
            </p>
            <div className="text-center text-gray-800 pt-3 inter">{review.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
