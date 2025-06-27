import React, { useEffect, useRef } from "react";

const ModelViewer = ({ path }) => {
  const wrapperRef = useRef();
  const modelRef = useRef();

  useEffect(() => {
    const preventZoom = (e) => {
      if (e.ctrlKey) e.preventDefault();
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
    <div
      ref={wrapperRef}
      className="w-full h-full"
      style={{
        touchAction: "auto", // ✅ allow touch-based scroll
        overflow: "hidden", // optional: to keep 3D inside
      }}
    >
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
          pointerEvents: "none", // ✅ stop model-viewer from blocking scroll
        }}
      />
    </div>
  );
};

export default ModelViewer;
