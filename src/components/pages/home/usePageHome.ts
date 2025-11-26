export const usePageHome = () => {
  // Slider Logo
  const logos = [
    "/home/logo-slider/image1.png",
    "/home/logo-slider/image2.png",
    "/home/logo-slider/image3.png",
    "/home/logo-slider/image4.png",
    "/home/logo-slider/image5.png",
    "/home/logo-slider/image6.png",
  ];
  const getRepeatedLogos = (logos: string[], minCount = 12) => {
    const result = [];
    while (result.length < minCount) {
      result.push(...logos);
    }
    return result;
  };
  const repeatedLogos = getRepeatedLogos(logos);

  return {
    // Slider Logo
    repeatedLogos,
  };
};
