import React, { useState } from 'react';

const Gallery = () => {
  const galleryImages = [
    '/images/gallery001.webp',
    '/images/gallery002.webp',
    '/images/gallery003.webp',
    '/images/gallery004.webp',
    '/images/gallery005.webp',
    '/images/gallery006.webp',
    '/images/gallery007.webp',
    '/images/gallery008.webp',
    '/images/gallery009.webp',
    '/images/gallery010.webp',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div className="bg-slate-900">
      {/* Gallery Section */}
      <div className="grid grid-cols-5 gap-0">
        {galleryImages.map((src, index) => (
          <div key={index} className="relative w-full aspect-square">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              onClick={() => openModal(src)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt="Modal"
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeModal}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
