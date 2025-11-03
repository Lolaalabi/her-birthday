import React from "react";

const PhotoBorder = ({ images, children }) => {
  const repeatCount = 120;
  const repeatedImages = Array.from({ length: repeatCount }, (_, i) => images[i % images.length]);

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Left border - fixed position */}
      <div className=" hidden lg:flex absolute top-0 left-0  flex-col z-30 overflow-hidden px-3 ">
        {repeatedImages.map((img, i) => (
          <img
            key={`left-${i}`}
            src={img}
            className="w-7 h-5 object-cover border border-stone-300"
            alt=""
          />
        ))}
      </div>

      {/* Right border - fixed position */}
      <div className="absolute top-0 right-0  flex flex-col z-30 overflow-hidden px-3">
        {repeatedImages.map((img, i) => (
          <img
            key={`right-${i}`}
            src={img}
            className="w-7 h-5 object-cover border border-stone-300"
            alt=""
          />
        ))}
      </div>

      {/* Main content with padding to avoid borders */}
      <main className="relative z-10 px-16 md:px-20 py-10 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default PhotoBorder;