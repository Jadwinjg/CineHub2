import React from "react";

function ViewerWrap(props) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl border-[3px] border-viwer-border pt-[56.25%] shadow-viewer transition-all duration-300 ease-viewer hover:scale-105 hover:shadow-viewer-hover">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        src={props.img}
        alt="brand"
      />
      <video
        src={props.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
      />
    </div>
  );
}

export default ViewerWrap;
