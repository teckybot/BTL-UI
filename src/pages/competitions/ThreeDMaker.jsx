import React from 'react';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';
import Td from '../../data/images/img3.png';
import circle from "../../data/All/circle1.png";

export default function Robotics() {
  return (
    <>
      <Navbar />
      <section className="pt-[80px] bg-[#f7faff] flex">
        {/*left - image  */}
        <div className="w-72 lg:w-80 shrink-0">
          <img
            src={Td}
            alt="3D Printing"
            className="w-full h-[100vh] object-cover shadow-lg"
          />
        </div>

        <div className="relative flex-1 pl-6 md:pl-12 py-8 overflow-hidden">
          <h1 className="text-5xl lg:text-6xl font-bold uppercase bg-gradient-3dmaker bg-clip-text text-transparent z-10">
            3D Printing
          </h1>


          <img
            src={circle}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-[300px] md:w-[420px] translate-x-1/3 translate-y-1/3 pointer-events-none select-none"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
