import React, { useEffect, useRef, useState } from "react";

const LoadingPage = () => {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    // Save current overflow value to restore later
    const originalOverflow = document.body.style.overflow;
    if (visible) document.body.style.overflow = "hidden";
    timerRef.current = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = originalOverflow;
    }, 4000);

    return () => {
      clearTimeout(timerRef.current);
      document.body.style.overflow = originalOverflow;
    };
    // Only re-run on mount
    // eslint-disable-next-line
  }, []);

  if (!visible) return null;

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
          zIndex: 1,
          position: "relative",
        }}
      >
        <video
          src="/static/optimizedCow.mp4"
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
