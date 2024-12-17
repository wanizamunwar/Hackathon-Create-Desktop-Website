import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-cream items-center shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href='/'>
          <div className="text-[25px] font-bold">Waniza's Shop</div>
        </Link>

        <nav className="flex text-black font-normal space-x-8">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-700">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-gray-700">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-700">
            Contact
          </Link>
          <Link href="/product" className="hover:text-gray-700">
            Product
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/dashboard" aria-label="User Icon">
            <Image
              src="/icons/profile1.png"
              alt="User Icon"
              width={20}
              height={20}
              className="hover:opacity-75"
            />
          </Link>
          <Link href="#" aria-label="Wishlist Icon">
            <Image
              src="/icons/wishlist1.png"
              alt="Heart Icon"
              width={20}
              height={20}
              className="hover:opacity-75 cursor-pointer"
            />
          </Link>
          <Link href="/" aria-label="Cart Icon">
            <Image
              src="/icons/cart1.png"
              alt="Cart Icon"
              width={20}
              height={20}
              className="hover:opacity-75 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
