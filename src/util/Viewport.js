export const getWindowDimensions = (useRef) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return {
    width: windowSize[0],
    height: windowSize[1],
  };
  // let width = 1200;
  // let height = 800;
  // console.log(window);
  // return {
  //   width,
  //   height,
  // };
  // if (window) {
  //   width = window.innerWidth;
  //   height = window.innerHeight;
  // } else if (global && global.window) {
  //   console.info("Using global window instead of passed-in window object");
  //   width = global.window.innerWidth;
  //   height = global.window.innerHeight;
  // } else {
  //   console.warn(
  //     "Unable to retrieve 'window' object. This will result in incorrect width and height for the viewport."
  //   );
  // }
  // return {
  //   width,
  //   height,
  // };
};
