import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-ping h-4 w-4 bg-teal-500 rounded-full">
        <h2 className="text-center mt-8">Loading...</h2>
      </div>
    </div>
  );
};

export default Loader;
