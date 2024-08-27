import React from "react";

const errorShowPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-4xl font-bold text-red-600">
        Error | 404 Not Found
      </div>

      <div className="text-2xl ">Could not find the data with given ID</div>
    </div>
  );
};

export default errorShowPage;
