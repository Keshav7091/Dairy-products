import React, { useEffect } from "react";

const LoadingPage = () => {
  useEffect(() => {
    // Save current overflow value to restore later
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="fixed h-screen w-screen top-0 left-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
      {/* Blur Background */}

      {/* Foreground Cow */}
      <div
        style={{
          height: 250,
          borderRadius: "100%",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          border: "4px solid #e4e4e4",
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
        />
      </div>
    </div>
  );
};

export default LoadingPage;
