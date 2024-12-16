import Image from "next/image";
import whiteChair2 from "../component/Image.png";
import brownChair from "../component/item-category-2.png";
import chair from "../component/Image (5).png";
import orangeChair from "../component/Image (2).png";
import imageCh from "../component/Image (8).png";
import image2 from "../component/Image (4).png";
import image3 from "../component/Image (1).png";

function Main6() {
  const imageObj = [
    { src: whiteChair2, price: "20$", title: "Library Stool Chair" },
    { src: whiteChair2, price: "20$", title: "Library Stool Chair" },
    { src: brownChair, price: "20$", title: "Library Stool Chair" },
    { src: chair, price: "20$", title: "Library Stool Chair" },
    { src: orangeChair, price: "20$", title: "Library Stool Chair" },
    { src: imageCh, price: "20$", title: "Library Stool Chair" },
    { src: image2, price: "20$", title: "Library Stool Chair" },
    { src: image3, price: "20$", title: "Library Stool Chair" },
  ];

  return (
    <div className="w-full lg:w-[1120px] m-auto mt-24 box-border p-4">
      <h1 className="text-center font-mono font-bold text-4xl">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {imageObj.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              alt="this is chair image"
              src={item.src}
              width={300}
              height={200}
              className="w-full"
            />
            <p className="text-center mt-2">{item.title}</p>
            <b className="text-center">{item.price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main6;
