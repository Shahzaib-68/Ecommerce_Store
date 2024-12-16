import { TiPlus } from "react-icons/ti";

function FaqComponent() {
  return (
    <>
      <div className="w-full pt-10 px-4">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold">Questions? Look Here</h1>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          </p>
        </div>
        {/* FAQ Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-[1120px] mx-auto py-7 font-mono">
          {/* FAQ Item 1 */}
          <div className="bg-[#F7F7F7] rounded-md p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">What types of chairs do you offer?</h1>
              <b>
                <TiPlus />
              </b>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          {/* FAQ Item 2 */}
          <div className="bg-[#F7F7F7] rounded-md p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">How can we get in touch with you?</h1>
              <b>
                <TiPlus />
              </b>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          {/* FAQ Item 3 */}
          <div className="bg-[#F7F7F7] rounded-md p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">Do your chairs come with a warranty?</h1>
              <b>
                <TiPlus />
              </b>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          {/* FAQ Item 4 */}
          <div className="bg-[#F7F7F7] rounded-md p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">What will be delivered? And When?</h1>
              <b>
                <TiPlus />
              </b>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          {/* FAQ Item 5 */}
          <div className="bg-[#F7F7F7] rounded-md p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">Can I try a chair before purchasing?</h1>
              <b>
                <TiPlus />
              </b>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          {/* FAQ Item 6 */}
          <div className="bg-[#F7F7F7] rounded-md p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">How do I clean and maintain my Comforty chair?</h1>
              <b>
                <TiPlus />
              </b>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqComponent;
