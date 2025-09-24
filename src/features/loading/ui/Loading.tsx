export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg className="w-11 h-11" viewBox="0 0 100 100">
        <polyline
          fill="none"
          points="0,0,100,0,100,100"
          strokeWidth="15"
          className="stroke-gray-400"
        ></polyline>
        <polyline
          fill="none"
          points="0,0,0,100,100,100"
          strokeWidth="15"
          className="stroke-gray-400"
        ></polyline>

        <polyline
          fill="none"
          points="0,0,100,0,100,100"
          strokeWidth="15"
          className="stroke-blue-500 animate-[ssr-loading-spacing_1.2s_ease-in_infinite,ssr-loading-color_4.8s_linear_infinite] origin-center"
        ></polyline>
        <polyline
          fill="none"
          points="0,0,0,100,100,100"
          strokeWidth="15"
          className="stroke-blue-500 animate-[ssr-loading-spacing_1.2s_ease-in_infinite,ssr-loading-color_4.8s_linear_infinite] origin-center"
        ></polyline>
      </svg>

      <div className="text-center max-w-[65ch] text-gray-800 font-sans min-w-[300px] px-2 pt-6 text-sm antialiased">
        Loading editor...
      </div>
    </div>
  );
};
