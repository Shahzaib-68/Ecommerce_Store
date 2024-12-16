import Image from "next/image";
import icon from "../../component/guarantee.png";
import icon1 from "../../component/customer-support.png";
import icon2 from "../../component/trophy 1.png";
import { FaPhone } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

function ContactUs() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="font-mono text-center mt-10">
          <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
          <p className="text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Will Always Be There To Help You Out.
            Do Not Hesitate!
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <h1 className="text-2xl font-mono font-bold mb-2 flex items-center">
                <MdLocationPin className="text-3xl mr-2"/>Address
              </h1>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="md:w-1/2">
              <h1 className="font-bold mb-2">Your  Name</h1>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-10 p-4 border border-[#9F9F9F] border-solid rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <h1 className="text-2xl font-mono font-bold mb-2 flex items-center">
                <FaPhone className="text-2xl mr-2"/>Phone
              </h1>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
            <div className="md:w-1/2">
              <h1 className="font-bold mb-2">Email Address</h1>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-10 p-4 border border-[#9F9F9F] border-solid rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <h1 className="text-2xl font-mono font-bold mb-2 flex items-center">
                <MdWatchLater className="text-3xl mr-2"/>Working Time
              </h1>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
            <div className="md:w-1/2">
              <h1 className="font-bold mb-2">Subject</h1>
              <input
                type="text"
                placeholder="This is optional"
                className="w-full h-10 p-4 border border-[#9F9F9F] border-solid rounded-lg"
              />
              <h1 className="mt-7 mb-2">Message</h1>
              <textarea
                placeholder="Hi! I’d like to ask about"
                className="w-full h-24 p-4 border border-[#9F9F9F] border-solid rounded-lg"
              />
              <button className="mt-9 bg-[#029FAE] text-white w-full md:w-[150px] text-center h-11 rounded-2xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="w-full lg:w-[900px] mx-auto flex flex-col lg:flex-row justify-between mt-12 h-auto lg:h-[250px] items-center bg-[#F4F4F4] p-4 lg:p-8 space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <Image alt="High Quality" src={icon2} width={64} height={64} />
          <div>
            <h1 className="font-bold">High Quality</h1>
            <p className="text-[#9F9F9F]">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image alt="Warranty Protection" src={icon} width={64} height={64} />
          <div>
            <h1 className="font-bold">Warranty Protection</h1>
            <p className="text-[#9F9F9F]">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image alt="24 / 7 Support" src={icon1} width={64} height={64} />
          <div>
            <h1 className="font-bold">24 / 7 Support</h1>
            <p className="text-[#9F9F9F]">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
