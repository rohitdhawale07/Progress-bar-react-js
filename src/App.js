import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
        setStatus("Complete!");
      }
    }, 200);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="w-3/5">
        <div className="relative pt-1">
          <h1 className="mb-6 text-4xl text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-lg w-auto">
            Progress Bar
          </h1>

          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                {status}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-teal-600">
                {progress}%
              </span>
            </div>
          </div>
          <div className="flex mb-2 items-center justify-between">
            <div className="flex-1 overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
              <div
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
