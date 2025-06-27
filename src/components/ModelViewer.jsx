import React, { useEffect, useRef } from "react";

const ModelViewer = ({ path }) => {
  const modelRef = useRef();

  useEffect(() => {
    const preventZoom = (e) => {
      // Only prevent zoom gestures (like Ctrl + scroll or trackpad pinch)
      if (e.ctrlKey || e.deltaY % 1 !== 0) {
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
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ModelViewer;
