import React, { useEffect, useRef, useState } from "react";

const LoadingPage = () => {


  return (
    <div className="fixed h-screen w-screen top-0 left-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
      {/* Blur Background */}

      {/* Foreground Cow */}
      <div
        style={{
          height: 250,
          borderRadius: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          zIndex: 1,
          position: "relative",
        }}
      >
        <video
          src="/movingCow.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          style={{
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
          playbackRate={1.5}
          onCanPlay={(e) => {
            if (e.target.playbackRate !== 1.5) {
              e.target.playbackRate = 1.5;
            }
          }}
          data-priority="high"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
