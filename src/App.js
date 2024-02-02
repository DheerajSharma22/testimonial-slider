import Testimonial from "./components/Testimonial";
import reviews from "./data";

function App() {
  return (
    <div
      className="flex flex-col w-[100vw] justify-center items-center bg-gray-200"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[1/5] mt-2 "></div>
      </div>
      <Testimonial reviews={reviews} />
    </div>
  );
}

export default App;
