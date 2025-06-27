import React, { useState, forwardRef } from 'react';
import ModelViewer from '../components/ModelViewer';

const categories = {
  Doors: Array(12).fill("/models/door.glb"),
  Windows: Array(12).fill("/models/window.glb"),
  Grills: Array(12).fill("/models/grill.glb"),
  Frames: Array(12).fill("/models/frame.glb"),
  "PVC Panels": Array(12).fill("/models/pvc.glb")
};

const Gallery = forwardRef((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("Doors");
  const [visibleCount, setVisibleCount] = useState(6);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const modelsToDisplay = categories[selectedCategory].slice(0, visibleCount);

  return (
    <div ref={ref} className="w-full p-4 scroll-mt-20">
      {/* Heading */}
      <h1 className="text-[10vw] font-bold text-[#81e4ad] text-center mb-6 font-bebas">Gallery</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full text-white transition-all duration-200 ${
              selectedCategory === category ? 'bg-[#81e4ad] text-zinc-950' : 'bg-zinc-800 hover:bg-zinc-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 3x2 Grid */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {modelsToDisplay.map((modelPath, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden h-64">
            <ModelViewer path={modelPath} />
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < categories[selectedCategory].length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#81E4AD] text-zinc-900 rounded-full"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
});

export default Gallery;
