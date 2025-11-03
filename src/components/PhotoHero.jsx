import React from 'react'

// const PhotoHero = () => {
// const photos = [
//     "/photo1.jpg",
//     "/photo2.jpg",
//     "/photo3.jpg",
//      "/photo4.jpg",
//      "/photo5.jpg",
// ]

// const counts = {
// top: 10,
// bottom: 10,
// left: 6,
// right: 6
// };

// const getPhotos = (count) => {
// return Array.from({ length: count }, (_, i) => photos[i % photos.length]);
// };



//   return (
//    <div className="grid grid-rows-[60px_1fr_60px] grid-cols-[60px_1fr_60px] h-screen w-full bg-stone-50">
// {/* Top Border */}
// <div className="col-span-3 grid grid-flow-col auto-cols-fr">
// {getPhotos(counts.top).map((photo, idx) => (
// <img
// key={`top-${idx}`}
// src={photo}
// alt=""
// className="w-full h-full object-cover"
// />
// ))}
// </div>
//   {/* Left Border */}
//   <div className="row-start-2 grid grid-flow-row auto-rows-fr">
//     {getPhotos(counts.left).map((photo, idx) => (
//       <img
//         key={`left-${idx}`}
//         src={photo}
//         alt=""
//         className="w-full h-full object-cover"
//       />
//     ))}
//   </div>

//   {/* Main Content */}
//   <div className="row-start-2 col-start-2 flex flex-col items-center justify-center p-10 bg-stone-50 rounded-lg ">
//     <h1 className="text-5xl mb-5 text-gray-800 font-light">
//       <span className="font-bold">Kaosar</span> is <span className="font-bold">creative</span>
//     </h1>
    
//     <div className="flex gap-2.5 my-5">
//       <div className="w-2 h-2 bg-red-900 rounded-full"></div>
//       <div className="w-2 h-2 bg-red-900 rounded-full"></div>
//     </div>
    
//     <p className="text-xl text-gray-600 max-w-2xl text-center leading-relaxed mt-2.5">
//       She is an expert in capturing moments<br />making sure every story is told.
//     </p>
    
//     <p className="text-gray-400 text-sm mt-5 tracking-widest uppercase">
//       Photographer · Visual Artist
//     </p>
//   </div>

//   {/* Right Border */}
//   <div className="row-start-2 col-start-3 grid grid-flow-row auto-rows-fr">
//     {getPhotos(counts.right).map((photo, idx) => (
//       <img
//         key={`right-${idx}`}
//         src={photo}
//         alt=""
//         className="w-full h-full object-cover"
//       />
//     ))}
//   </div>

// </div>
//   )
// }

// export default PhotoHero;