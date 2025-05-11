import React from "react";

const Loading = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center mt-4">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default Loading;

