import React from "react";

const Avatar = ({ initials, index }) => {
  const colors = ["bg-purple-600", "bg-blue-600", "bg-blue-700"];
  return (
    <div className={`w-10 h-10 rounded-full border border-white/20 ${colors[index]} flex items-center justify-center text-white font-semibold text-sm`}>
    {initials}
  </div>
  );
};

export default Avatar;
