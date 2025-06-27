import React, { useEffect, useRef } from "react";

const ModelViewer = ({ path }) => {
  const modelRef = useRef();

  useEffect(() => {
    const preventZoom = (e) => {
      // Only block ctrl + scroll (desktop zoom), not normal scroll
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    const viewer = modelRef.current;
    if (viewer) {
      viewer.addEventListener("wheel", preventZoom, { passive: false });
    }

    return () => {
      if (viewer) {
        viewer.removeEventListener("wheel", preventZoom);
      }
    };
  }, []);

  return (
    <model-viewer
      ref={modelRef}
      src={path}
      alt="3D model"
      auto-rotate
      camera-controls
      disable-zoom
      interaction-prompt="none"
      style={{
        width: "100%",
        height: "100%",
        touchAction: "pan-y", // ✅ allows vertical scrolling on mobile
      }}
    />
  );
};

export default ModelViewer;
