import React from 'react';
import img from '../data/All/home_hero.png';
import img1 from '../data/gallery_images/img1.png'
import img2 from '../data/gallery_images/img2.png'
import img3 from '../data/gallery_images/img3.png'
import img4 from '../data/gallery_images/img4.png'
import img5 from '../data/gallery_images/img5.png'
import img6 from '../data/gallery_images/img6.png'
import img7 from '../data/gallery_images/img7.png'
import img8 from '../data/gallery_images/img8.png'
import img9 from '../data/gallery_images/img9.png'
import img10 from '../data/gallery_images/img10.png'
import img11 from '../data/gallery_images/img11.png'
import img12 from '../data/gallery_images/img12.png'
import img13 from '../data/gallery_images/img13.png'
import Footer from '../components/Footer';
// import img1 from '../data/globe.png';
import { Helmet } from "react-helmet";
import Videoscroll from '../components/videoscroll';

// Reusable Gallery Card Component
const GalleryCard = ({ image, height, className = '' }) => {
  return (
    <div className={`bg-gray-100 rounded-lg overflow-hidden group relative ${height} ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
    </div>
  );
};

const Gallery = () => {
  // Sample image data - replace with your actual image paths
  const images = [
    { id: 1, src: img2, alt: 'Event photo 1' },
    { id: 2, src: img3, alt: 'Event photo 2' },
    { id: 3, src: img4, alt: 'Event photo 3' },
    { id: 4, src: img5, alt: 'Event photo 4' },
    { id: 5, src: img6, alt: 'Event photo 5' },
    { id: 6, src: img7, alt: 'Event photo 6' },
    { id: 7, src: img8, alt: 'Event photo 7' },
    { id: 8, src: img9, alt: 'Event photo 8' },
    { id: 9, src: img10, alt: 'Event photo 9' },
    { id: 10, src: img11, alt: 'Event photo 10' },
    { id: 11, src: img12, alt: 'Event photo 11' },
    { id: 12, src: img13, alt: 'Event photo 12' },
  ];

  return (
<>
<Helmet>
  <title>BTL Moments & Highlights – Bharat Teck League Gallery</title>
  <meta
    name="description"
    content="Explore photos & videos from previous Bharat Teck League events. Witness student innovations, tech exhibits & competition highlights in action."
  />
</Helmet>

    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={img1}
          alt="Gallery Hero"
          className="w-full h-full object-cover rounded-b-[40px]"
        />
        <div className="absolute inset-0 rounded-b-[40px] bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-xl sm:text-2xl md:text-[32px] font-bold">GALLERY OF</h1>
          <h3 className="text-lg sm:text-xl md:text-[35px] font-bold mt-1">BHARAT TECK LEAGUE</h3>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4 py-10 space-y-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 w-1/2">
            <GalleryCard image={images[0]} height="h-[170px]" />
            <GalleryCard image={images[3]} height="h-[170px]" />
          </div>
          <GalleryCard image={images[1]} height="h-[355px]" className="w-1/2" />
        </div>

        <div className="flex gap-4">
          <GalleryCard image={images[2]} height="h-[170px]" className="w-1/2" />
          <GalleryCard image={images[4]} height="h-[170px]" className="w-1/2" />
        </div>

        <GalleryCard image={images[10]} height="h-[170px]" />

        <div className="flex gap-4">
          <GalleryCard image={images[6]} height="h-[170px]" className="w-1/2" />
          <GalleryCard image={images[7]} height="h-[170px]" className="w-1/2" />
        </div>

        <GalleryCard image={images[8]} height="h-[170px]" />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid max-w-8xl mx-auto px-[100px] py-10 gap-4 grid-cols-4">
        {/* Row 1 */}
        <GalleryCard image={images[0]} height="h-[350px]" />
        <GalleryCard image={images[1]} height="h-[720px]" className="row-span-2" />
        <GalleryCard image={images[2]} height="h-[350px]" className="col-span-2" />
        <GalleryCard image={images[3]} height="h-[350px]" />

        {/* Row 2 */}
        <GalleryCard image={images[4]} height="h-[350px]" />
        <GalleryCard image={images[5]} height="h-[350px]" />
        <GalleryCard image={images[6]} height="h-[350px]" className="col-span-2" />

        {/* Row 3 */}
        <GalleryCard image={images[7]} height="h-[350px]" />
        <GalleryCard image={images[8]} height="h-[350px]" />

        {/* Row 4 */}
        <GalleryCard image={images[9]} height="h-[350px]" />
        <GalleryCard image={images[10]} height="h-[350px]" />
        <GalleryCard image={images[11]} height="h-[350px]" className="col-span-2" />
      </div>
    </div>

<Videoscroll />
    <Footer />
  </>
  );
};

export default Gallery;
