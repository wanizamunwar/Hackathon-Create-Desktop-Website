"use client";

import Image from "next/image";
import { useState } from "react";
import { FaSquareXTwitter, FaFacebook } from "react-icons/fa6";
import Link from "next/link";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="px-10 py-16 bg-gray-50">
      <nav className="text-sm text-gray-600 mb-8">
        <span>Home</span> <span className="mx-2">/</span>
        <span>Shop</span> <span className="mx-2">/</span>
        <span className="text-gray-900 font-semibold">Asgaard sofa</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex w-full lg:w-1/2 gap-4">
          <div className="flex flex-col gap-4 w-1/4">
            <div className="relative flex items-center bg-cream2 w-full h-[150px] rounded-lg overflow-hidden">
              <Image
                src="/images/product1/1.png"
                alt="Thumbnail 1"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </div>
            <div className="relative items-center bg-cream2 w-full h-[150px] rounded-lg overflow-hidden">
              <Image
                src="/images/product1/2.png"
                alt="Thumbnail 2"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </div>
            <div className="relative items-center bg-cream2 w-full h-[150px] rounded-lg overflow-hidden">
              <Image
                src="/images/product1/1.png"
                alt="Thumbnail 3"
                height={400}
                width={400}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="relative w-3/4 flex justify-center items-center bg-cream2 h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/product1/asgaarda.png"
              alt="Asgaard sofa"
              width={650}
              height={650}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-semibold">Asgaard sofa</h1>
          <p className="text-2xl font-bold text-gray-800">Rs. 250,000.00</p>

          <div className="flex items-center gap-2">
            <div className="flex">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
            <span className="text-gray-500">(10 customer reviews)</span>
          </div>

          <p className="text-gray-600">
            Meticulously crafted with premium materials, this sofa offers
            superior comfort and timeless elegance, making it the perfect
            centerpiece for any living room.
          </p>

          <div>
            <h1>Size</h1>
            <div className="flex gap-2">
              <button className="bg-cream rounded-md py-2 px-3">L</button>
              <button className="bg-cream rounded-md py-2 px-3">XL</button>
              <button className="bg-cream rounded-md py-2 px-3">LS</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-800">Color:</span>
            <button className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></button>
            <button className="w-6 h-6 rounded-full bg-yellow-500 border border-gray-300"></button>
            <button className="w-6 h-6 rounded-full bg-gray-500 border border-gray-300"></button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-800">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={decrementQuantity}
                className="px-3 py-1 bg-gray-200 rounded-l-lg"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-1 bg-gray-200 rounded-r-lg"
              >
                +
              </button>
            </div>
            <button className="w-full lg:w-auto px-6 py-3 bg-black text-white rounded-lg">
              Add to Cart
            </button>
          </div>

          <button className="flex items-center gap-2 text-gray-800">
            <Image
              src="/icons/wishlist.png"
              alt="Wishlist Icon"
              width={20}
              height={20}
            />
            Add to Wishlist
          </button>

          <div className="mt-20">
            <hr className="border-t1 border-black" />
          </div>

          <div className="flex gap-10 text-left">
            <h5 className="font-semibold w-[25%]">SKU</h5>
            <h5>: SS001</h5>
          </div>
          <div className="flex gap-10 text-left">
            <h5 className="font-semibold w-[25%]">Category</h5>
            <h5>: Sofas</h5>
          </div>
          <div className="flex gap-10 text-left">
            <h5 className="font-semibold w-[25%]">Tags</h5>
            <h5>: Sofa, Chair, Home, Shop</h5>
          </div>
          <div className="flex gap-10 text-left">
            <h5 className="font-semibold w-[25%]">Share</h5>
            <h5 className="flex gap-5">
              :
              <FaFacebook />
              <FaSquareXTwitter />
            </h5>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="py-10">
        <h1 className="text-[34px] text-center font-semibold">
          Related Products
        </h1>
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
            src="/images/img1.png"
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
            src="/images/img1.png"
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
            src="/images/img1.png"
            height={200}
            width={200}
            alt="Product Image"
            className="mb-4"
          />
          <h5 className=" text-gray-800 w-[70%] mb-2">
            Comfortably large arm chair
          </h5>
          <h3 className="font-semibold text-black mb-4">Rs. 25,000.00</h3>
        </div>
      </div>
    </div>
  );
}
