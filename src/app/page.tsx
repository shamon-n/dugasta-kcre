// pages/index.js
import Image from "next/image";
import Form from "./form";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-3xl max-w-7xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="p-6 md:p-10 md:w-1/2 space-y-8 flex flex-col justify-center content-center order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 justify-center content-center">
            10% Guaranteed Net ROI For 10 Years With Zero Service Charges and 100% Buyback Option!
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-light">
            Fill in the form and our expert will contact you.
          </p>
          <Form />
        </div>

        {/* Right Section (Image) */}
        <div className="relative md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <div className="w-[95%] h-[95%] bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src="Dugasta_Image.jpeg"
              alt="Dugasta"
              width={600}
              height={600}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
