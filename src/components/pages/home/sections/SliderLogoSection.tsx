"use client";

import Image from "next/image";

const SliderLogoSection: React.FC = () => {
  // Logo gốc
  const logos = [
    "/home/logo-slider/image1.png",
    "/home/logo-slider/image2.png",
    "/home/logo-slider/image3.png",
    "/home/logo-slider/image4.png",
    "/home/logo-slider/image5.png",
    "/home/logo-slider/image6.png",
  ];

  // Nhân bản logo đủ số lượng để slider mượt
  const minCount = 12;
  const getRepeatedLogos = (logos: string[], minCount: number) => {
    const result: string[] = [];
    while (result.length < minCount) {
      result.push(...logos);
    }
    return result;
  };

  const repeatedLogos = getRepeatedLogos(logos, minCount);

  return (
    <section className="mb-20 overflow-hidden py-4">
      <div className="animate-slide flex gap-x-20 whitespace-nowrap">
        {repeatedLogos.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Logo branch ${idx + 1}`}
            width={168}
            height={68}
            className="flex-shrink-0"
            style={{ width: "168px", height: "68px", objectFit: "contain" }}
          />
        ))}
      </div>
    </section>
  );
};

export default SliderLogoSection;
