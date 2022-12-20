import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { menus } from './menu';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex">
      <div
        className={`bg-green-700 min-h-screen ${
          open ? 'w-64' : 'w-16'
        } duration-500 text-gray-100 px-3`}
      >
        <div
          className={`py-5 flex ${
            open ? 'justify-end' : 'justify-center'
          } duration-500`}
        >
          <HiMenu
            size={33}
            className="cursor-pointer hover:bg-green-600 rounded"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={`${
                menu?.margin ? 'mt-10' : 'mt-3'
              } flex items-center hover:bg-green-600 p-2 rounded-md cursor-pointer`}
            >
              <div>{React.createElement(menu?.icon, { size: 23 })}</div>
              <h2
                className={`pl-2 ${
                  !open && 'opacity-0  overflow-hidden'
                } duration-500`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="mx-5 my-1">
        <Image src={'/logo.svg'} width={100} height={70} />
      </div> */}
    </section>
  );
};

export default Sidebar;
