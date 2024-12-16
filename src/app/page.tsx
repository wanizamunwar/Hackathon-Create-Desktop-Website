import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center bg-cream ">
        <div className="w-[48%] ml-[120px]">
          <h1 className="text-[60px] font-bold">Rocket Single Seater</h1>
          <button className="bg-transparent mt-4 border-b-2 pb-2 text-[20px] text-black border-b-black">
            Shop now
          </button>
        </div>
        <div>
          <Image
            src="/images/rocket.png"
            alt="Seat"
            width={1500}
            height={1500}
          />
        </div>
      </div>

      <div className="flex px-20 py-10 justify-between bg-cream2">
        <div>
          <Image src="/images/side1.png" height={900} width={900} alt="hello" />
          <h2 className="text-[30px] font-semibold">Side Table</h2>
          <button className="bg-transparent text-black mt-4 border-b-2 pb-2 text-[20px] border-b-black">
            Shop now
          </button>
        </div>
        <div>
          <Image src="/images/side2.png" height={900} width={900} alt="hello" />
          <h2 className="text-[30px] font-semibold">Side Table</h2>
          <button className="bg-transparent text-black mt-4 border-b-2 pb-2 text-[20px] border-b-black">
            Shop now
          </button>
        </div>
      </div>

      <div className="py-10 bg-gray-50">
        <div className="px-10 md:px-20 py-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Top Picks for You</h1>
          <p className="text-lg text-gray-600">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 md:px-20 py-10">
          <div className="flex flex-col">
            <Image
              src="/images/img1.png"
              height={200}
              width={200}
              alt="Product Image"
              className="mb-4"
            />
            <h5 className=" text-gray-800 w-[70%] mb-2">
              Trenton Modular Sofa_3
            </h5>
            <h3 className="font-semibold text-black mb-4">Rs. 25,000.00</h3>
          </div>

          <div className="flex flex-col">
            <Image
              src="/images/img2.png"
              height={200}
              width={200}
              alt="Product Image"
              className="mb-4"
            />
            <h5 className=" w-[70%] text-gray-800 mb-2">
              Granite dining table with dining chair
            </h5>
            <h3 className=" font-semibold text-black mb-4">Rs. 25,000.00</h3>
          </div>

          <div className="flex flex-col">
            <Image
              src="/images/img3.png"
              height={200}
              width={200}
              alt="Product Image"
              className="mb-4"
            />
            <h5 className=" text-gray-800 w-[70%] mb-2">
              Outdoor bar table and stool
            </h5>
            <h3 className="font-semibold text-black mb-4">Rs. 25,000.00</h3>
          </div>

          <div className="flex flex-col">
            <Image
              src="/images/rocket.png"
              height={200}
              width={200}
              alt="Product Image"
              className="mb-4"
            />
            <h5 className=" text-gray-800 w-[70%] mb-2">
              Plain console with teak mirror
            </h5>
            <h3 className="font-semibold text-black  mb-4">Rs. 25,000.00</h3>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="bg-transparent text-black border-b-2 pb-2 text-[20px] border-b-black">
            Shop now
          </button>
        </div>
      </div>

      <div className="bg-cream3 px-20 py-20 flex items-center justify-evenly">
        <div>
          <Image
            src="/images/asgaarda.png"
            alt="alt"
            width={800}
            height={400}
          />
        </div>
        <div className="text-center">
          <h3 className="text-[24px] font-light">New Arrivals</h3>
          <h1 className="font-bold text-[50px]">Asgaard Sofa</h1>
          <button className="bg-transparent text-black border-[1px] mt-8 px-14 py-3 border-black">
            Shop now
          </button>
        </div>
      </div>

      <div className="items-center text-center pb-10 px-20">
        <div className="items-center text-center py-20">
          <h1 className="text-[36px] font-semibold">Our Blogs</h1>
          <p className="mt-2 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex justify-between pb-20 gap-5 px-20">
          <div className="items-center text-center">
            <Image
              className="hover:shadow-md hover:rounded-md"
              src="/blog1.png"
              alt="alt"
              height={400}
              width={400}
            />
            <p className="text-[18px] mt-5">
              Going all-in with millennial design
            </p>
            <button className="bg-transparent text-black border-b-2 my-3 text-[18px] font-light border-b-black">
              Read more
            </button>
            <div>
              <div className="flex justify-evenly">
                <p className="flex text-[16px]">
                  <img className="pr-2 " src="/icons/time.png" alt="" />5 min
                </p>
                <p className="flex text-[16px]">
                  <img className="pr-2" src="/icons/date.png" alt="" />
                  12th Oct 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-transparent text-black border-b-2 pb-2 text-[20px] border-b-black">
          More
        </button>
      </div>
    </div>
  );
}
